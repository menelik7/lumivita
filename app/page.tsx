import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { ProductGrid } from "@/components/ProductGrid";
import { Differentiation } from "@/components/Differentiation";
import { TrustRow } from "@/components/TrustRow";
import { SignupCTA } from "@/components/SignupCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
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
