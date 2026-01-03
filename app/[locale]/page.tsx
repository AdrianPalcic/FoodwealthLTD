import AboutHero from "@/components/AboutHero";
import { EmblaCarousel } from "@/components/Hero";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("homepage");

  return (
    <main>
      <EmblaCarousel />
      <AboutHero />
    </main>
  );
}
