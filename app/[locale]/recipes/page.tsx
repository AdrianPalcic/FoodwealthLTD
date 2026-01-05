import React from "react";
import Hero from "./components/Hero";
import RecipeListing from "./components/RecipeListing";
import GlobalCTA from "@/components/GlobalCTA";

const page = () => {
  return (
    <main>
      <Hero />
      <RecipeListing />
      <GlobalCTA />
    </main>
  );
};

export default page;
