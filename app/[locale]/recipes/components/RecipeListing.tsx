import { Link } from "@/i18n/navigation";
import { Clock, Search, User } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeListing = () => {
  const t = useTranslations("recipepage.recipelisting");

  return (
    <>
      <div className="w-full bg-white py-4 sm:px-4 px-10 ">
        <div className="relative">
          <input
            type="text"
            placeholder={t("placeholder")}
            className="w-full lg:w-[50%] py-3 pl-12 pr-3 bg-[#EFEFEF] rounded-xl text-black font-inter text-lg"
          />
          <Search className="absolute top-3 left-2 text-[#777777]" />
        </div>
      </div>

      <section className="section-padding w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((item, idx) => (
            <RecipeCard key={idx} />
          ))}
        </div>
      </section>
    </>
  );
};

export default RecipeListing;
