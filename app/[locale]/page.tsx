import AboutHero from "@/components/AboutHero";
import BrandsHero from "@/components/BrandsHero";
import { EmblaCarousel } from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <EmblaCarousel />
      <AboutHero />
      <BrandsHero />
    </main>
  );
}
