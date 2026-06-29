import type { Metadata } from "next";
import Link from "next/link";
import { LogoLockup } from "@/components/LogoLockup";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Personvernerklæring — Lumivita",
  description:
    "Slik behandler Lumivita personopplysningene dine når du melder deg på for tidlig tilgang.",
};

export default function Personvern() {
  return (
    <>
      {/* NAV */}
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-ink/8 bg-sand/92 px-[6vw] py-5 backdrop-blur-[10px]">
        <Link href="/" aria-label="Til forsiden" className="inline-flex">
          <LogoLockup />
        </Link>
        <Link
          href="/"
          className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink/55 transition-colors hover:text-amber"
        >
          ← Tilbake
        </Link>
      </nav>

      {/* HEADER */}
      <header className="mx-auto w-full max-w-260 px-[7vw] pb-14 pt-30 md:px-[6vw] md:pb-15 md:pt-24">
        <p className="mb-5.5 text-[11px] font-medium uppercase tracking-[0.24em] text-amber">
          Personvern
        </p>
        <h1 className="mb-5.5 font-display text-[clamp(40px,4.2vw,60px)] font-normal leading-[1.06] text-ink">
          Personvernerklæring
        </h1>
        <p className="max-w-140 text-[17px] leading-[1.7] text-body">
          Vi tar vare på opplysningene dine med samme omtanke som vi legger i
          produktene våre. Her forklarer vi hvilke data vi samler inn før
          lansering, hvorfor, og hvilke rettigheter du har.
        </p>
        <p className="mt-6 text-xs tracking-[0.04em] text-ink/42">
          Sist oppdatert 29. juni 2026
        </p>
      </header>

      {/* BODY */}
      <main className="mx-auto w-full max-w-260 px-[7vw] pb-18 md:px-[6vw] md:pb-24">
        <div className="border-t border-ink/10">
          <Section n="01" title="Behandlingsansvarlig">
            <P className="mb-3">
              Lumivita (under etablering) er ansvarlig for behandlingen av
              personopplysningene dine. Organisasjonsnummer oppgis ved
              lansering.
            </P>
            <P>
              Har du spørsmål om personvern, kan du kontakte oss på{" "}
              <Mail />.
            </P>
          </Section>

          <Section n="02" title="Hvilke opplysninger vi samler inn">
            <P>
              Når du melder deg på for tidlig tilgang, lagrer vi kun
              e-postadressen din. Vi ber ikke om navn, adresse eller andre
              opplysninger på dette tidspunktet.
            </P>
          </Section>

          <Section n="03" title="Formål">
            <P>
              Vi bruker e-postadressen din til å gi deg beskjed når nettbutikken
              åpner, og til å sende deg relevant informasjon om lanseringen —
              inkludert tilbudet om ti prosent på din første bestilling.
            </P>
          </Section>

          <Section n="04" title="Behandlingsgrunnlag">
            <P>
              Behandlingen er basert på samtykket ditt (personvernforordningen
              artikkel 6 nr. 1 bokstav a). Du gir samtykke ved å melde deg på og
              bekrefte påmeldingen via e-posten vi sender deg (dobbel
              bekreftelse). Du kan trekke samtykket tilbake når som helst.
            </P>
          </Section>

          <Section n="05" title="Hvem vi deler opplysningene med">
            <P className="mb-3">
              Vi selger aldri personopplysningene dine. For å drive tjenesten
              bruker vi enkelte databehandlere som behandler opplysninger på
              våre vegne:
            </P>
            <ul className="mb-3.5 mt-1.5 list-disc space-y-1.75 pl-5 text-[15px] leading-[1.75] text-body">
              <li>
                <strong className="font-semibold text-ink">
                  Brevo (Sendinblue)
                </strong>{" "}
                — e-postutsending og administrasjon av påmeldingslisten. Data
                lagres innenfor EU/EØS.
              </li>
              <li>
                <strong className="font-semibold text-ink">Vercel</strong> —
                drift av nettsiden og anonym, informasjonskapselfri
                besøksstatistikk.
              </li>
            </ul>
            <P>
              Begge behandler opplysninger i tråd med personvernforordningen
              (GDPR), og opplysningene dine lagres innenfor EU/EØS.
            </P>
          </Section>

          <Section n="06" title="Informasjonskapsler">
            <P>
              Nettsiden bruker ingen informasjonskapsler (cookies) til sporing
              eller markedsføring. Besøksstatistikken vår er anonym og bruker
              ikke informasjonskapsler.
            </P>
          </Section>

          <Section n="07" title="Hvor lenge vi lagrer opplysningene">
            <P>
              Vi lagrer e-postadressen din frem til lansering og så lenge du
              ønsker å motta informasjon fra oss. Du kan når som helst melde deg
              av via lenken nederst i e-postene våre, eller ved å kontakte oss —
              da sletter vi opplysningene dine.
            </P>
          </Section>

          <Section n="08" title="Dine rettigheter">
            <P className="mb-3">
              Du har rett til å be om innsyn i opplysningene vi har lagret, få
              rettet uriktige opplysninger, få slettet opplysningene dine, få dem
              utlevert (dataportabilitet), og trekke tilbake samtykket ditt.
            </P>
            <P>
              For å bruke rettighetene dine, kontakt oss på <Mail />. Mener du at
              vi behandler opplysningene dine i strid med regelverket, kan du
              klage til Datatilsynet — se{" "}
              <a
                href="https://www.datatilsynet.no"
                target="_blank"
                rel="noopener"
                className="text-ink underline underline-offset-2"
              >
                datatilsynet.no
              </a>
              .
            </P>
          </Section>

          <Section n="09" title="Endringer">
            <P>
              Vi kan oppdatere denne erklæringen ved behov. Den til enhver tid
              gjeldende versjonen finner du alltid på denne siden.
            </P>
          </Section>
        </div>

        {/* CONTACT CARD */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-8 rounded-card bg-ink px-12 py-11">
          <div>
            <p className="mb-3.5 text-[11px] font-medium uppercase tracking-[0.22em] text-amber">
              Spørsmål om personvern?
            </p>
            <h2 className="font-display text-[30px] font-normal leading-[1.15] text-sand">
              Vi svarer gjerne.
            </h2>
          </div>
          <a
            href="mailto:post@lumivita.no"
            className="flex-none rounded-pill bg-amber px-7.5 py-3.75 text-[13px] font-semibold tracking-[0.04em] text-ink"
          >
            post@lumivita.no
          </a>
        </div>
      </main>

      <Footer activePersonvern />
    </>
  );
}

function Section({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid grid-cols-[48px_1fr] items-start gap-7 border-b border-ink/10 py-9.5">
      <div className="pt-0.5 font-display text-[30px] font-medium leading-none text-amber">
        {n}
      </div>
      <div>
        <h2 className="mb-3.5 font-display text-[26px] font-medium leading-[1.2] text-ink">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

function P({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-[15px] leading-[1.75] text-body ${className}`}>
      {children}
    </p>
  );
}

function Mail() {
  return (
    <a
      href="mailto:post@lumivita.no"
      className="text-ink underline underline-offset-2"
    >
      post@lumivita.no
    </a>
  );
}
