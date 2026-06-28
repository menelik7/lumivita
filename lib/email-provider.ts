/**
 * Email provider abstraction.
 *
 * The route handler talks only to `addSubscriber` — the concrete provider
 * (currently Brevo) is isolated here so it can be swapped for Klaviyo /
 * MailerLite later without touching the API route or the form.
 *
 * Config is env-driven and server-only (never NEXT_PUBLIC_*):
 *   BREVO_API_KEY            required — server API key
 *   BREVO_LIST_ID            required — numeric early-access list id
 *   BREVO_DOI_TEMPLATE_ID    optional — numeric double-opt-in template id
 *   BREVO_DOI_REDIRECT_URL   optional — post-confirmation redirect URL
 *
 * When BOTH DOI vars are present the contact is created through Brevo's GDPR
 * double-opt-in flow (a confirmation email is sent first). Otherwise the
 * contact is added directly (single opt-in). Until the two REQUIRED vars are
 * set, this returns "not_configured" and never calls the provider.
 */

const BREVO_BASE = "https://api.brevo.com/v3";

export type SubscribeOutcome =
  | "ok"
  | "duplicate"
  | "not_configured"
  | "provider_error";

export async function addSubscriber(email: string): Promise<SubscribeOutcome> {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_LIST_ID;

  // Inert until the client supplies both required keys.
  if (!apiKey || !listId) return "not_configured";
  const listIdNum = Number(listId);
  if (!Number.isInteger(listIdNum)) return "not_configured";

  const doiTemplateId = process.env.BREVO_DOI_TEMPLATE_ID;
  const doiRedirectUrl = process.env.BREVO_DOI_REDIRECT_URL;
  const useDoi = Boolean(doiTemplateId && doiRedirectUrl);

  const headers = {
    "api-key": apiKey,
    "content-type": "application/json",
    accept: "application/json",
  };

  try {
    const res = useDoi
      ? await fetch(`${BREVO_BASE}/contacts/doubleOptinConfirmation`, {
          method: "POST",
          headers,
          body: JSON.stringify({
            email,
            includeListIds: [listIdNum],
            templateId: Number(doiTemplateId),
            redirectionUrl: doiRedirectUrl,
          }),
        })
      : await fetch(`${BREVO_BASE}/contacts`, {
          method: "POST",
          headers,
          body: JSON.stringify({
            email,
            listIds: [listIdNum],
            updateEnabled: true,
          }),
        });

    // 201 created / 204 updated — both success.
    if (res.ok) return "ok";

    // Brevo flags an already-known contact with code "duplicate_parameter".
    if (res.status === 400) {
      const body = (await res.json().catch(() => null)) as {
        code?: string;
      } | null;
      if (body?.code === "duplicate_parameter") return "duplicate";
    }

    return "provider_error";
  } catch {
    return "provider_error";
  }
}
