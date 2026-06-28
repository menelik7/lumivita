import type { Metadata } from "next";
import Link from "next/link";
import { LogoLockup } from "@/components/LogoLockup";

export const metadata: Metadata = {
  title: "Bekreftet — Lumivita",
  // Utility landing page for the double opt-in redirect — keep it out of search.
  robots: { index: false, follow: false },
};

export default function Bekreftet() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-sand px-[7vw] py-24 text-center">
      <LogoLockup />
      <h1 className="mt-10 font-display text-[40px] font-normal leading-[1.1] text-ink md:text-[52px]">
        E-posten din er <em className="text-amber">bekreftet</em>
      </h1>
      <p className="mt-5 max-w-110 text-[17px] leading-[1.7] text-body">
        Takk! Du står nå på listen for tidlig tilgang. Vi gir deg beskjed så snart
        vi åpner — og du får ti prosent på din første bestilling.
      </p>
      <Link
        href="/"
        className="mt-9 rounded-pill bg-ink px-6.5 py-3.75 text-[13px] font-semibold uppercase tracking-[0.04em] text-sand transition-opacity hover:opacity-90"
      >
        Tilbake til forsiden
      </Link>
    </main>
  );
}
