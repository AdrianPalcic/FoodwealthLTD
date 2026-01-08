import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import React from "react";

const AboutHero = () => {
  const t = useTranslations("homepage.about");

  return (
    <section className="section-padding font-inter">
      <div className="flex flex-col-reverse lg:flex-row gap-8">
        <div className="flex-[0.5]">
          <div className="w-full h-auto">
            <img src="/i1.jpg" alt="Image" className="w-full h-full" />
          </div>
        </div>
        <div className="flex-[0.5] py-6">
          <p className="text-tag mb-4">{t("tag")}</p>
          <h1 className="title text-black mb-4">{t("title")}</h1>
          <div className="max-w-xl flex flex-col">
            <p>{t("paragraph-1")}</p>
            <br />
            <p>{t("paragraph-2")}</p>
          </div>
          <Link href="/about">
            <button className="button-main">{t("button")}</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
