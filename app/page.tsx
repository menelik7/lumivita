import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { ProductGrid } from "@/components/ProductGrid";
import { Differentiation } from "@/components/Differentiation";
import { TrustRow } from "@/components/TrustRow";
import { SignupCTA } from "@/components/SignupCTA";
import { Footer } from "@/components/Footer";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lumivita",
  url: "https://lumivita.no",
  email: "post@lumivita.no",
  logo: "https://lumivita.no/favicon/favicon-512.png",
  description:
    "Norsk vintervelvære-merkevare med vitenskapelig funderte produkter for kropp og søvn når dagslyset blir borte.",
  sameAs: ["https://instagram.com/lumivita.no"],
  areaServed: "NO",
  foundingDate: "2026",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Nav />
      <Hero />
      <Stats />
      <ProductGrid />
      <Differentiation />
      <TrustRow />
      <SignupCTA />
      <Footer />
    </>
  );
}
