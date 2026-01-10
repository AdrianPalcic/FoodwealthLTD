import RecipeCard from "@/app/[locale]/recipes/components/RecipeCard";
import React from "react";

const RelatedRecipes = () => {
  return (
    <section className="section-padding">
      <div>
        <h1 className="title">Recipes that use This product</h1>
        <h2 className="subtitle">Level up your cooking with these recipes</h2>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <RecipeCard />
      </div>
    </section>
  );
};

export default RelatedRecipes;
