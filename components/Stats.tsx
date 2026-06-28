import { Eyebrow } from "./Eyebrow";

const stats = [
  { value: "14%", label: "Har klinisk vinterdepresjon" },
  { value: "4–6", label: "Timer dagslys midt på vinteren" },
  { value: "50%+", label: "Merker vinterbluesen" },
];

export function Stats() {
  return (
    <section id="om" className="scroll-mt-20 bg-ink px-[6vw] py-22">
      <div className="mx-auto grid max-w-245 grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14">
        <div>
          <Eyebrow className="mb-5">Bakgrunn</Eyebrow>
          <h2 className="mb-5 font-display text-[32px] font-normal leading-[1.12] text-sand md:text-[42px]">
            Vinteren påvirker
            <br />
            <em className="text-amber">millioner av oss</em>
          </h2>
          <p className="text-[15px] leading-[1.7] text-sand/62">
            Det finnes veldokumenterte metoder for å møte de mørke månedene. Det
            manglet bare en samlet, troverdig og norsk kilde for dem. Det er det
            Lumivita er.
          </p>
        </div>
        <div className="flex flex-col gap-3.5">
          {stats.map((stat, i) => (
            <div
              key={stat.value}
              className={`flex items-baseline gap-4.5 ${
                i < 2 ? "border-b border-sand/10 pb-3.5" : "pb-1"
              }`}
            >
              <span className="min-w-24 font-display text-[44px] font-medium leading-none text-amber">
                {stat.value}
              </span>
              <span className="text-sm text-sand/66">{stat.label}</span>
            </div>
          ))}
          <p className="mt-2 text-xs text-sand/36">
            Kilde: Folkehelseinstituttet og nasjonal søvnforskning
          </p>
        </div>
      </div>
    </section>
  );
}
