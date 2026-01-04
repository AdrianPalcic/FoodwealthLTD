import { useTranslations } from "next-intl";
import React from "react";

const Hero = () => {
  const t = useTranslations("contactpage.hero");

  return (
    <div className="h-[70vh] w-dvw px-4 sm:px-12 py-12 bg-[url('/i6.jpg')] bg-cover bg-center relative">
      <div className="absolute inset-0 z-1 bg-black/40 w-full h-full" />
      <div className="z-10 flex flex-col h-full justify-end">
        <p className="font-josefin text-white uppercase text-lg z-2 mb-4">
          {t("tag")}
        </p>
        <h1 className="title text-white z-2 mb-2">{t("title")}</h1>
        <h2 className="subtitle text-white z-2">{t("subtitle")}</h2>
      </div>
    </div>
  );
};

export default Hero;
