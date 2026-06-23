/**
 * Early-access signup call.
 *
 * STUB — until the Hono backend lands. Resolves success after a short delay so
 * the form's loading state is exercised. When the backend is ready, replace the
 * body with the real POST (single line to flip):
 *
 *   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/subscribe`, {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify({ email }),
 *   });
 *   if (!res.ok) throw new Error("subscribe failed");
 */
export async function subscribe(email: string): Promise<void> {
  void email;
  await new Promise((resolve) => setTimeout(resolve, 600));
}
