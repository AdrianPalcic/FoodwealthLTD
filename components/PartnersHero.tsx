import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const PartnersHero = () => {
  const t = useTranslations("homepage.partners");

  return (
    <section className="section-padding">
      <div className="flex flex-col items-center">
        <p className="text-tag mb-2">{t("tag")}</p>
        <h1 className="title">{t("title")}</h1>
        <h2 className="subtitle max-w-3xl text-center text-(--text-color)">
          {t("subtitle")}
        </h2>
        <button className="button-main">{t("button")}</button>
      </div>
      <div className="flex flex-col items-center mt-10">
        <Image src={"/brand-vector.svg"} alt="partner" width={80} height={80} />
      </div>
    </section>
  );
};

export default PartnersHero;
