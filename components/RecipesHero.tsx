import { RECIPES } from "@/constants";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const RecipesHero = () => {
  const t = useTranslations("homepage.recipes");

  return (
    <section className="section-padding">
      <div>
        <p className="text-tag mb-2">{t("tag")}</p>
        <h1 className="title">{t("title")}</h1>
        <h2 className="subtitle max-w-5xl">{t("subtitle")}</h2>
        <button className="button-main mb-4">{t("button")}</button>
      </div>
      <div className="flex gap-6 w-full flex-wrap">
        {RECIPES.map((r) => (
          <div className="flex-1" key={r.key}>
            <Image
              src={r.img}
              width={300}
              height={300}
              alt="Recipe"
              className="w-full h-full"
            />
            <h3 className="text-2xl mt-3">{t(r.key)}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecipesHero;
