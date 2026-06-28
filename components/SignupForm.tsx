"use client";

import { useState, type FormEvent } from "react";
import { subscribe } from "@/lib/subscribe";

type Variant = "light" | "dark";
type Status = "idle" | "sending" | "done" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
	const [email, setEmail] = useState("");
	const [company, setCompany] = useState("");
	const [status, setStatus] = useState<Status>("idle");

	async function handleSubmit(event: FormEvent) {
		event.preventDefault();
		if (!EMAIL_RE.test(email.trim())) {
			setStatus("error");
			return;
		}
		setStatus("sending");
		try {
			await subscribe(email.trim(), company);
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
					Sjekk e-posten din og bekreft påmeldingen.
				</div>
			</div>
		);
	}

	const sending = status === "sending";

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
					className={`w-full cursor-pointer whitespace-nowrap rounded-pill px-6.5 py-3.75 text-[13px] font-semibold leading-none tracking-[0.04em] transition-opacity disabled:cursor-default disabled:opacity-60 md:w-auto md:flex-none ${
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
