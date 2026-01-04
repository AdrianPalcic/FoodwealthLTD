import React from "react";
import { useTranslations } from "next-intl";
import Hero from "./components/Hero";
import About from "./components/About";
import Values from "./components/Values";
import Journey from "./components/Journey";
import Business from "./components/Business";
import CTA from "./components/CTA";

const page = () => {
  const t = useTranslations("aboutpage.hero");
  return (
    <main>
      <Hero />
      <About />
      <Values />
      <Journey />
      <Business />
      <CTA />
    </main>
  );
};

export default page;
