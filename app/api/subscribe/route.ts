import { NextResponse } from "next/server";
import { addSubscriber } from "@/lib/email-provider";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Light, in-memory rate limit. Scoped to a single serverless instance — it
 * resets on cold start and isn't shared across regions — so it's abuse
 * *friction*, not a hard guarantee. Adequate for a coming-soon form; swap for
 * Upstash/Redis if a strict cross-instance limit is ever needed.
 */
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  return fwd?.split(",")[0]?.trim() || "unknown";
}

export async function POST(req: Request) {
  if (rateLimited(clientIp(req))) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  let payload: { email?: unknown; company?: unknown };
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }

  // Honeypot: a real user never fills `company`. A bot that does gets a silent
  // 200 — nothing is subscribed, but it can't tell it was rejected.
  if (typeof payload.company === "string" && payload.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  const outcome = await addSubscriber(email);
  switch (outcome) {
    case "ok":
    // Already on the list → still a success for the user, and returning 200
    // (rather than 409) avoids leaking who is subscribed.
    case "duplicate":
      return NextResponse.json({ ok: true });
    case "not_configured":
      return NextResponse.json({ error: "not_configured" }, { status: 503 });
    case "provider_error":
      return NextResponse.json({ error: "provider_error" }, { status: 502 });
  }
}
