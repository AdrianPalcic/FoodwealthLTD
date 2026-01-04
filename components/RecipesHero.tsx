import { RECIPES } from "@/constants";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const RecipesHero = () => {
  const t = useTranslations("homepage.recipes");

  return (
    <section className="section-padding h-fit">
      <div className="flex flex-col items-center mb-4">
        <p className="text-tag mb-2">{t("tag")}</p>
        <h1 className="title text-center">{t("title")}</h1>
        <h2 className="subtitle text-center max-w-5xl text-(--text-color)">
          {t("subtitle")}
        </h2>
        <button className="button-main mb-4">{t("button")}</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full ">
        {RECIPES.map((r) => (
          <div className="flex-1 cursor-pointer" key={r.key}>
            <div className="overflow-hidden ">
              <Image
                src={r.img}
                width={300}
                height={300}
                alt="Recipe"
                className="w-full h-full duration-300 transition-transform hover:scale-[1.1]"
              />
            </div>
            <h3 className="text-2xl mt-3">{t(r.key)}</h3>
            <ul className="flex gap-2">
              <li>Spice 1,</li>
              <li>Spice 2</li>
            </ul>
            <button className="button-main">{t("recipe-button")}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecipesHero;
