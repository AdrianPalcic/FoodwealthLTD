import { useTranslations } from "next-intl";
import React from "react";

const Values = () => {
  const t = useTranslations("aboutpage.values");

  return (
    <section className="section-padding">
      <div className="flex flex-col items-center">
        <p className="text-tag text-center mb-2">{t("tag")}</p>
        <h1 className="title text-center mb-2">{t("title")}</h1>
        <h2 className="subtitle text-center mb-4">{t("subtitle")}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-6">
          <div className="relative p-8 bg-(--accent-color) text-white col-span-1 sm:col-span-2 rounded-xl flex flex-col">
            <div className="absolute text-white/50 font-josefin right-1 sm:top-[30] text-8xl sm:text-[200px]">
              01
            </div>
            <div className="z-10">
              <p className="text-white font-josefin mb-4">{t("value1.tag")}</p>
              <h1 className="title mb-5">{t("value1.title")}</h1>
              <h2 className="subtitle">{t("value1.subtitle")}</h2>
            </div>
          </div>
          <div className="col-span-1 bg-white p-4 sm:p-8 rounded-xl">
            <p className="text-9xl text-(--text-color)/50">02</p>
            <h3 className="text-2xl uppercase font-bold">
              {t("value2.title")}
            </h3>
            <p>{t("value2.subtitle")}</p>
          </div>
          <div className="col-span-1 p-4 sm:p-8 rounded-xl bg-[#DCDBDB] flex flex-col justify-center relative overflow-hidden">
            <div className="absolute rounded-full  bg-[#A3B18A]/40 w-[300px]  h-[300px] right-[-60] bottom-[-100]"></div>
            <p className="px-4 py-1 rounded-2xl text-black font-bold font-josefin bg-(--accent-color) w-fit mb-5">
              03
            </p>
            <h3 className="text-2xl uppercase font-bold mb-2">
              {t("value3.title")}
            </h3>
            <p>{t("value3.subtitle")}</p>
          </div>
          <div className="col-span-1 sm:col-span-2 px-4 sm:px-8 py-12 rounded-xl text-white bg-(--secondary-color) flex flex-col lg:flex-row justify-between gap-6 sm:gap-12 lg:gap-40">
            <div className="text-white">
              <p className="font-josefin font-bold uppercase text-white mb-4">
                {t("value4.tag")}
              </p>
              <h1 className="title max-w-3xl">{t("value4.title")}</h1>
            </div>
            <div className="text-white">
              <h2 className="subtitle">{t("value4.subtitle")}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
