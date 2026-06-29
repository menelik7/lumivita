"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { subscribe } from "@/lib/subscribe";

type Variant = "light" | "dark";
type Status = "idle" | "sending" | "done";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MSG_EMPTY = "Skriv inn e-postadressen din.";
const MSG_INVALID = "Sjekk at e-postadressen er riktig.";
const MSG_FAILED = "Noe gikk galt, prøv igjen.";

const PILL = "rounded-pill px-6 py-4 text-sm";
const ROW =
	"rounded-pill px-5.5 py-3.75 text-sm leading-none outline-none";

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
	const errorId = useId();
	const inputRef = useRef<HTMLInputElement>(null);
	const [email, setEmail] = useState("");
	const [company, setCompany] = useState("");
	const [status, setStatus] = useState<Status>("idle");
	const [error, setError] = useState<string | null>(null);

	async function handleSubmit(event: FormEvent) {
		event.preventDefault();
		const value = email.trim();
		if (!value) {
			setError(MSG_EMPTY);
			inputRef.current?.focus();
			return;
		}
		if (!EMAIL_RE.test(value)) {
			setError(MSG_INVALID);
			inputRef.current?.focus();
			return;
		}
		setError(null);
		setStatus("sending");
		try {
			await subscribe(value, company);
			setStatus("done");
		} catch {
			setStatus("idle");
			setError(MSG_FAILED);
		}
	}

	// Flag a malformed address as soon as the user leaves the field — but don't
	// nag an empty field on blur (that's surfaced only when they try to submit).
	function handleBlur() {
		const value = email.trim();
		setError(value && !EMAIL_RE.test(value) ? MSG_INVALID : null);
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
					Sjekk e-posten din og bekreft påmeldingen.
				</div>
			</div>
		);
	}

	const sending = status === "sending";
	const borderClass = error
		? "border-amber"
		: dark
			? "border-sand/20"
			: "border-ink/16";

	return (
		<form id={id} onSubmit={handleSubmit} className={className} noValidate>
			{/* Honeypot — hidden from users, tempting to bots. Off-screen, untabbable,
          excluded from autofill and the a11y tree. */}
			<input
				type="text"
				name="company"
				value={company}
				onChange={(e) => setCompany(e.target.value)}
				tabIndex={-1}
				autoComplete="off"
				aria-hidden="true"
				className="pointer-events-none absolute left-[-9999px] top-0 h-0 w-0 opacity-0"
			/>
			<div className="flex flex-col gap-3 md:flex-row">
				<input
					ref={inputRef}
					type="email"
					name="email"
					aria-label="E-postadresse"
					placeholder="din@epost.no"
					autoComplete="email"
					inputMode="email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
						if (error) setError(null);
					}}
					onBlur={handleBlur}
					aria-invalid={error ? true : undefined}
					aria-describedby={error ? errorId : undefined}
					className={`w-full md:flex-1 ${ROW} border ${borderClass} ${
						dark
							? "bg-sand/6 text-sand placeholder:text-sand/40"
							: "bg-white text-ink placeholder:text-ink/40"
					}`}
				/>
				<button
					type="submit"
					disabled={sending}
					className={`w-full cursor-pointer whitespace-nowrap rounded-pill px-6.5 py-3.75 text-[13px] font-semibold leading-none tracking-[0.04em] transition-opacity disabled:cursor-default disabled:opacity-60 md:w-auto md:flex-none ${
						dark ? "bg-amber text-ink" : "bg-ink text-sand"
					}`}
				>
					{sending ? "Sender…" : dark ? "Få tidlig tilgang" : "Tidlig tilgang"}
				</button>
			</div>
			{error && (
				<p
					id={errorId}
					role="alert"
					className="mt-3 text-left text-[13px] text-amber"
				>
					{error}
				</p>
			)}
			<p
				className={`mt-3.5 text-xs leading-[1.6] ${
					dark ? "text-sand/45" : "text-ink/50"
				}`}
			>
				Ved å melde deg på samtykker du til vår{" "}
				<Link href="/personvern" className="underline underline-offset-2">
					personvernerklæring
				</Link>
				. Meld deg av når som helst.
			</p>
		</form>
	);
}
