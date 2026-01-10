import React from "react";
import ProductCard from "../../components/ProductCard";

const RelatedCategories = () => {
  return (
    <section className="section-padding">
      <div>
        <h1 className="title">From the same category</h1>
        <h2 className="subtitle">Explore more products from this category</h2>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default RelatedCategories;
