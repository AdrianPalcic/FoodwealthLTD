import React from "react";
import Hero from "./components/Hero";
import ProductCategories from "./components/ProductCategories";
import GlobalCTA from "@/components/GlobalCTA";

const page = () => {
  return (
    <main>
      <Hero />
      <ProductCategories />
      <GlobalCTA />
    </main>
  );
};

export default page;
