import { useTranslations } from "next-intl";
import React from "react";

const Business = () => {
  const t = useTranslations("aboutpage.business");

  return (
    <section className="section-padding">
      <div className="flex flex-col items-center mb-10">
        <p className="text-tag mb-2">{t("tag")}</p>
        <h1 className="title text-center mb-4">{t("title")}</h1>
        <h2 className="subtitle text-center">{t("subtitle")}</h2>
      </div>
      <div className="flex flex-col items-center gap-6 w-full">
        <div className="bg-white rounded-xl flex  items-center px-4 sm:px-10 py-6 w-full max-w-7xl shadow-[inset_10px_0_1px_0_rgba(75,53,38,1)]">
          <div className="flex flex-1 flex-col gap-1">
            <p className="text-[120px] text-(--text-color)/60">01</p>
            <h3 className="text-3xl text-black uppercase font-bold">
              {t("support1.title")}
            </h3>
          </div>
          <div className="flex-1">
            <p>{t("support1.subtitle")}</p>
          </div>
        </div>
        <div className="bg-(--accent-color) rounded-xl flex  items-center px-4 sm:px-10 py-6 w-full max-w-7xl">
          <div className="flex flex-1 flex-col gap-1 text-white">
            <p className="text-[120px] text-white/50">02</p>
            <h3 className="text-white text-3xl  uppercase font-bold">
              {t("support2.title")}
            </h3>
          </div>
          <div className="flex-1">
            <p className="text-white">{t("support2.subtitle")}</p>
          </div>
        </div>
        <div className="bg-white rounded-xl flex  items-center px-4 sm:px-10 py-6 w-full max-w-7xl shadow-[inset_10px_0_1px_0_rgba(163,177,138,1)]">
          <div className="flex flex-1 flex-col gap-1">
            <p className="text-[120px] text-(--text-color)/60">03</p>
            <h3 className="text-3xl text-black uppercase font-bold">
              {t("support3.title")}
            </h3>
          </div>
          <div className="flex-1">
            <p>{t("support3.subtitle")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
