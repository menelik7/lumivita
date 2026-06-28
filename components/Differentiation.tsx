import { Eyebrow } from "./Eyebrow";

const columns = [
  {
    number: "01",
    title: "Historien bak hvert produkt",
    body: "Vi forteller hvorfor produktet er valgt, og hva forskningen faktisk sier. Aldri transaksjonelt.",
  },
  {
    number: "02",
    title: "Norskmerket kosttilskudd",
    body: "En egen linje med klinisk grunnlag bak hvert produkt. Ingen annen norsk velværemerkevare eier dette i dag.",
  },
  {
    number: "03",
    title: "En ekte norsk stemme",
    body: "Aldri oversatt fra engelsk. Vi skriver for hvordan oktober faktisk føles i en norsk kropp.",
  },
];

export function Differentiation() {
  return (
    <section className="bg-sand-darker px-[6vw] py-22.5">
      <div className="mx-auto max-w-245">
        <div className="mb-12.5 text-center">
          <Eyebrow className="mb-4.5">Hva gjør oss annerledes</Eyebrow>
          <h2 className="font-display text-[32px] font-normal leading-[1.1] text-ink md:text-[40px]">
            Du kjøper ikke en lampe.
            <br />
            <em className="text-amber">Du kjøper bedre morgener.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {columns.map((column) => (
            <div
              key={column.number}
              className="rounded-card bg-sand px-7 py-8"
            >
              <div className="mb-4 font-display text-[30px] text-amber">
                {column.number}
              </div>
              <h3 className="mb-2.5 text-[17px] font-semibold text-ink">
                {column.title}
              </h3>
              <p className="text-sm leading-[1.65] text-body-muted">
                {column.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
