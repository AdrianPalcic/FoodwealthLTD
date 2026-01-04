import { useTranslations } from "next-intl";
import React from "react";

const Journey = () => {
  const t = useTranslations("aboutpage.journey");

  return (
    <section className="section-padding">
      <div className="flex flex-col items-center mb-10">
        <p className="text-tag mb-2">{t("tag")}</p>
        <h1 className="title text-center mb-4">{t("title")}</h1>
        <h2 className="subtitle text-center">{t("subtitle")}</h2>
      </div>

      <div className="flex flex-col">
        <div className="flex gap-3 items-center ">
          <div className="p-8 rounded-full flex items-center justify-center bg-(--accent-color) text-white text-lg">
            {t("journey1.year")}
          </div>
          <div>
            <h3 className="text-2xl text-black uppercase mb-1 font-bold">
              {t("journey1.title")}
            </h3>
            <p>{t("journey1.subtitle")}</p>
          </div>
        </div>
        <div className="divider ml-12 my-3"></div>
        <div className="flex gap-3 items-center ">
          <div className="p-8 rounded-full flex items-center justify-center bg-(--accent-color) text-white text-lg">
            {t("journey2.year")}
          </div>
          <div>
            <h3 className="text-2xl text-black uppercase mb-1 font-bold">
              {t("journey2.title")}
            </h3>
            <p>{t("journey2.subtitle")}</p>
          </div>
        </div>
        <div className="divider ml-12 my-3"></div>
        <div className="flex gap-3 items-center ">
          <div className="p-8 rounded-full flex items-center justify-center bg-(--accent-color) text-white text-lg">
            {t("journey3.year")}
          </div>
          <div>
            <h3 className="text-2xl text-black uppercase mb-1 font-bold">
              {t("journey3.title")}
            </h3>
            <p>{t("journey3.subtitle")}</p>
          </div>
        </div>
        <div className="divider ml-12 my-3"></div>
        <div className="flex gap-3 items-center ">
          <div className="p-8 rounded-full flex items-center justify-center bg-(--accent-color) text-white text-lg">
            {t("journey4.year")}
          </div>
          <div>
            <h3 className="text-2xl text-black uppercase mb-1 font-bold">
              {t("journey4.title")}
            </h3>
            <p>{t("journey4.subtitle")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
