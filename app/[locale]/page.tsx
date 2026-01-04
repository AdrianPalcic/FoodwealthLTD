import AboutHero from "@/components/AboutHero";
import BrandsHero from "@/components/BrandsHero";
import ContactHero from "@/components/ContactHero";
import { EmblaCarousel } from "@/components/Hero";
import PartnersHero from "@/components/PartnersHero";
import ProductCategoriesHero from "@/components/ProductCategoriesHero";
import RecipesHero from "@/components/RecipesHero";

export default function Home() {
  return (
    <main>
      <EmblaCarousel />
      <AboutHero />
      <BrandsHero />
      <ProductCategoriesHero />
      <RecipesHero />
      <PartnersHero />
      <ContactHero />
    </main>
  );
}
