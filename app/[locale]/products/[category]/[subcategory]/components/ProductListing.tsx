import { Search } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";
import ProductCard from "./ProductCard";
import Filters from "./Filters";

const ProductListing = ({ subcategory }: { subcategory: string }) => {
  const t = useTranslations("subcategorypage");

  return (
    <>
      <section className="section-padding">
        <h1 className="title">{subcategory}</h1>
        <h2 className="subtitle">24 {t("available")}</h2>
      </section>
      <section className="section-padding bg-linear-to-b from-[#ffffff] to-[#f0f0f0]">
        <div className="relative py-6">
          <input
            type="text"
            placeholder={t("placeholder")}
            className="w-full lg:w-[50%] py-3 pl-12 pr-3 border border-black/50 rounded-xl text-black font-inter text-lg"
          />
          <Search className="absolute top-9 left-2 text-[#777777]" />
        </div>

        <Filters />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {Array.from({ length: 6 }).map((item, idx) => (
            <ProductCard key={idx} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductListing;
