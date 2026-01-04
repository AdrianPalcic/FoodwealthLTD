import { useTranslations } from "next-intl";
import React from "react";

const Hero = () => {
  const t = useTranslations("aboutpage.hero");

  return (
    <section className=" text-white ">
      <div className="w-full h-[80vh] bg-[url('/i14.png')] bg-cover bg-center relative flex flex-col justify-center items-center">
        <div className="absolute w-full h-full inset-0 bg-black/30"></div>
        <div className="text-white z-10 flex flex-col items-center">
          <p className="font-josefin uppercase text-white mb-4">{t("tag")}</p>
          <h1 className="title text-white text-center max-w-5xl">
            {t("title")}
          </h1>
          <h2 className="subtitle text-center text-white max-w-3xl">
            {t("subtitle")}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
