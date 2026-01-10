import { notFound } from "next/navigation";
import React from "react";
import Hero from "./components/Hero";
import RelatedCategories from "./components/RelatedCategories";
import RelatedRecipes from "./components/RelatedRecipes";
import Stats from "./components/Stats";

interface PageProps {
  params: {
    product: string;
  };
}

const page = async ({ params }: PageProps) => {
  const { product } = await params;
  if (!product) return notFound();

  return (
    <main>
      <Hero />
      <Stats />
      <RelatedCategories />
      <RelatedRecipes />
    </main>
  );
};

export default page;
