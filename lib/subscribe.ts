/**
 * Early-access signup.
 *
 * POSTs to the local route handler (app/api/subscribe), which validates the
 * email server-side and forwards it to the email provider. Throws on any
 * non-2xx response so the form surfaces its error state.
 *
 * `company` is the form's honeypot value — empty for real users, forwarded so
 * the server can silently drop bot submissions.
 */
export async function subscribe(email: string, company = ""): Promise<void> {
  const res = await fetch("/api/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, company }),
  });
  if (!res.ok) throw new Error("subscribe failed");
}
