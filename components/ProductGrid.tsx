import { Eyebrow } from "./Eyebrow";
import { ProductCard, type Product } from "./ProductCard";

const products: Product[] = [
  {
    image: "/images/portable.jpg",
    title: "Bærbar lysbehandling",
    description:
      "Samme kliniske effekt som en fast lampe, mens du lever dagen din. For alle som har gitt opp lysterapi fordi det tok for lang tid.",
    meta: "CE godkjent · Klinisk dokumentert",
    accent: "ink",
  },
  {
    image: "/images/lamps.jpg",
    title: "Lysbehandlingslamper",
    description:
      "Kun lamper som er uavhengig verifisert til å levere terapeutisk lys ved tretti til femti centimeter. Avstanden du faktisk bruker.",
    meta: "Avstandsverifisert · Uavhengig testet",
    accent: "ink",
  },
  {
    image: "/images/supplements.jpg",
    title: "Kosttilskudd",
    description:
      "Vår egen linje med klar dosering, dokumentert opprinnelse og norsk merking, produsert ved GMP sertifiserte anlegg i Europa.",
    meta: "GMP sertifisert · EU produsert",
    accent: "forest",
  },
  {
    image: "/images/sleep.jpg",
    title: "Søvn og morgenlys",
    description:
      "Dokumentert effektive produkter for dypere søvn, og morgenlys som lar kroppen våkne rolig og naturlig i mørket.",
    meta: "Klinisk fundert · EU godkjent",
    accent: "ink",
  },
];

export function ProductGrid() {
  return (
    <section id="produkter" className="scroll-mt-20 bg-sand px-[6vw] py-24">
      <div className="mx-auto mb-14 max-w-[880px] text-center">
        <Eyebrow className="mb-5">Produktkategorier</Eyebrow>
        <h2 className="mb-5 font-display text-[32px] font-normal leading-[1.1] text-ink md:text-[44px]">
          Valgt på klinisk <em className="text-amber">grunnlag</em>
        </h2>
        <p className="mx-auto max-w-[540px] text-base leading-[1.7] text-body">
          Hvert produkt er her fordi forskning og helsefaglig erfaring sier det
          hjelper.
        </p>
      </div>
      <div className="mx-auto grid max-w-[980px] grid-cols-1 gap-6 md:grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
    </section>
  );
}
