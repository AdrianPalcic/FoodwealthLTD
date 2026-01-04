import { useTranslations } from "next-intl";
import React from "react";

const CTA = () => {
  const t = useTranslations("aboutpage.CTA");

  return (
    <section className="section-padding">
      <div className="w-full flex flex-col items-center justify-center py-12  px-4 sm:px-10 bg-(--secondary-color) rounded-xl max-w-7xl mx-auto">
        <h1 className="title text-white text-center mb-2">{t("title")}</h1>
        <h2 className="subtitle text-white text-center mb-6">
          {t("subtitle")}
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="text-black bg-white duration-300 transition-colors hover:bg-white/80">
            {t("button1")}
          </button>
          <button className="text-white border border-white duration-300 transition-colors hover:text-black hover:bg-white">
            {t("button2")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
