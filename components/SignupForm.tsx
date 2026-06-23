"use client";

import { useState, type FormEvent } from "react";
import { subscribe } from "@/lib/subscribe";

type Variant = "light" | "dark";
type Status = "idle" | "sending" | "done" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PILL = "rounded-pill px-6 py-4 text-sm";
const ROW =
  "rounded-pill px-[22px] py-[15px] text-sm leading-none outline-none";

export function SignupForm({
  variant = "light",
  className = "",
  id,
}: {
  variant?: Variant;
  className?: string;
  id?: string;
}) {
  const dark = variant === "dark";
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      await subscribe(email.trim());
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div id={id} className={className}>
        <div
          className={`${PILL} ${
            dark
              ? "border border-amber/30 bg-amber/12 text-sand"
              : "border border-ink/15 bg-ink/6 text-ink"
          }`}
        >
          Takk. Vi gir deg beskjed når vi åpner.
        </div>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form id={id} onSubmit={handleSubmit} className={className} noValidate>
      <div className="flex flex-col gap-3 md:flex-row">
        <input
          type="email"
          name="email"
          aria-label="E-postadresse"
          placeholder="din@epost.no"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          className={`w-full md:flex-1 ${ROW} ${
            dark
              ? "border border-sand/20 bg-sand/6 text-sand placeholder:text-sand/40"
              : "border border-ink/16 bg-white text-ink placeholder:text-ink/40"
          }`}
        />
        <button
          type="submit"
          disabled={sending}
          className={`w-full whitespace-nowrap rounded-pill px-[26px] py-[15px] text-[13px] font-semibold leading-none tracking-[0.04em] transition-opacity disabled:opacity-60 md:w-auto md:flex-none ${
            dark ? "bg-amber text-ink" : "bg-ink text-sand"
          }`}
        >
          {sending ? "Sender…" : dark ? "Få tidlig tilgang" : "Tidlig tilgang"}
        </button>
      </div>
      {status === "error" && (
        <p role="alert" className="mt-3 text-[13px] text-amber">
          Noe gikk galt, prøv igjen.
        </p>
      )}
    </form>
  );
}
