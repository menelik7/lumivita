import { Eyebrow } from "./Eyebrow";
import { SignupForm } from "./SignupForm";

export function SignupCTA() {
  return (
    <section className="relative overflow-hidden bg-ink px-[6vw] py-[100px] text-center">
      <div
        className="pointer-events-none absolute bottom-[-90px] left-1/2 h-[330px] w-[760px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center bottom,rgba(232,149,109,.26) 0%,transparent 70%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-[600px]">
        <Eyebrow className="mb-5">Lansering høst 2025</Eyebrow>
        <h2 className="mb-[22px] font-display text-[32px] font-normal leading-[1.1] text-sand md:text-[44px]">
          Vær klar når <em className="text-amber">mørket</em> setter inn
        </h2>
        <p className="mb-[34px] text-base leading-[1.7] text-sand/65">
          Bli blant de første til å høre når vi åpner. Tidlig tilgang og ti
          prosent på din første bestilling.
        </p>
        <SignupForm variant="dark" className="mx-auto max-w-[480px]" />
        <p className="mt-[18px] text-xs text-sand/40">
          Ingen uønskede henvendelser. Kun relevant informasjon.
        </p>
      </div>
    </section>
  );
}
