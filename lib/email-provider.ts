/**
 * Email provider abstraction (Brevo).
 *
 * Early-access uses an AUTOMATION-based double opt-in — the correct pattern for
 * a sign-up form built OUTSIDE Brevo. This module's only job is to upsert the
 * contact into the PENDING list; a Brevo automation then sends the branded
 * confirmation email and, on click, moves the contact to the CONFIRMED list.
 *
 * We deliberately do NOT call POST /contacts/doubleOptinConfirmation — that
 * endpoint only accepts DOI templates created through Brevo's own sign-up forms
 * (not standalone templates), and isn't the recommended fit for an external
 * form. See docs/ROADMAP.md D1.4 for the automation setup.
 *
 * Config (server-only, never NEXT_PUBLIC_*):
 *   BREVO_API_KEY          required — server API key
 *   BREVO_PENDING_LIST_ID  required — numeric id of the EARLY_ACCESS_PENDING list
 *   BREVO_BASE_URL         optional — defaults to https://api.brevo.com/v3
 *
 * The CONFIRMED list is managed entirely by the Brevo automation, so the
 * backend never needs its id.
 */

const BREVO_BASE = process.env.BREVO_BASE_URL || "https://api.brevo.com/v3";

export type SubscribeOutcome = "ok" | "not_configured" | "provider_error";

export async function addSubscriber(email: string): Promise<SubscribeOutcome> {
  const apiKey = process.env.BREVO_API_KEY;
  const pendingListId = process.env.BREVO_PENDING_LIST_ID;

  // Inert until both required vars exist.
  if (!apiKey || !pendingListId) return "not_configured";
  const listId = Number(pendingListId);
  if (!Number.isInteger(listId)) return "not_configured";

  try {
    const res = await fetch(`${BREVO_BASE}/contacts`, {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
        accept: "application/json",
      },
      // updateEnabled makes this an idempotent upsert: create-or-update the
      // contact and (re)add it to the pending list. Repeat submits are safe.
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    // 201 created / 204 updated — both success.
    if (res.ok) return "ok";

    const body = (await res.json().catch(() => null)) as {
      code?: string;
      message?: string;
    } | null;

    // With updateEnabled this rarely fires, but an existing contact still means
    // the goal (they're on the pending list) is met — treat it as success.
    if (res.status === 400 && body?.code === "duplicate_parameter") return "ok";

    console.error(
      `[email-provider] Brevo contacts call failed (${res.status}):`,
      body,
    );
    return "provider_error";
  } catch {
    return "provider_error";
  }
}
