import Image from "next/image";
import { SignupForm } from "./SignupForm";

export function Hero() {
	return (
		<section className="grid grid-cols-1 bg-sand md:grid-cols-[1.04fr_.96fr]">
			<div className="flex flex-col justify-center px-[7vw] pb-18 pt-21 md:px-[6vw] md:py-30">
				<p className="mb-6 text-[11px] font-medium uppercase tracking-[0.24em] text-amber">
					Vintervelvære&nbsp;·&nbsp;Vitenskapelig fundert
				</p>
				<h1 className="mb-6.5 font-display text-[clamp(44px,4.4vw,64px)] font-normal leading-[1.06] text-ink">
					Lysets liv,
					<br />
					gjennom de
					<br />
					<em className="text-amber">mørke månedene.</em>
				</h1>
				<p className="mb-9 max-w-110 text-[17px] leading-[1.7] text-body">
					Vitenskapelig funderte produkter for kropp og søvn når dagslyset blir
					borte. Vi åpner høst 2026 — bli blant de første.
				</p>
				<SignupForm
					variant="light"
					id="tilgang"
					className="max-w-110 scroll-mt-28"
				/>
				<p className="mt-4 text-xs text-ink/42">
					Ti prosent på din første bestilling.
				</p>
			</div>
			<div className="relative min-h-75 overflow-hidden bg-ink md:min-h-140">
				<Image
					src="/images/hero.jpg"
					alt=""
					fill
					priority
					sizes="(max-width: 768px) 100vw, 48vw"
					className="object-cover"
				/>
				<div
					className="absolute inset-0"
					style={{
						background:
							"linear-gradient(90deg,rgba(28,43,58,.5) 0%,rgba(28,43,58,.05) 32%,transparent 55%)",
					}}
				/>
			</div>
		</section>
	);
}
