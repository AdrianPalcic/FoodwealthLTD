import { useTranslations } from "next-intl";
import React from "react";

const AboutHero = () => {
  const t = useTranslations("homepage.about");

  return (
    <section className="section-padding font-inter">
      <div className="flex justify-center gap-8">
        <div className="">
          <div className="w-full h-[500px]">
            <img src="/i1.jpg" alt="Image" className="w-full h-full" />
          </div>
        </div>
        <div className="flex-1 py-6">
          <p className="text-tag mb-4">{t("tag")}</p>
          <h1 className="title text-black mb-4">{t("title")}</h1>
          <p>{t("paragraph-1")}</p>
          <br />
          <p>{t("paragraph-2")}</p>
          <button className="button-main">{t("button")}</button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
