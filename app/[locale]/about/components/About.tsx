import { useTranslations } from "next-intl";
import React from "react";

const About = () => {
  const t = useTranslations("aboutpage.aboutUs");

  return (
    <section className="section-padding font-inter">
      <div className="flex flex-col-reverse lg:flex-row-reverse gap-8 items-end">
        <div className="flex-[0.5]">
          <div className="w-full h-auto">
            <img src="/i1.jpg" alt="Image" className="w-full h-full" />
          </div>
        </div>
        <div className="flex-[0.5] py-6">
          <h1 className="title text-black mb-4">{t("title")}</h1>
          <div className="max-w-xl flex flex-col">
            <p>{t("para1")}</p>
            <br />
            <p>{t("para2")}</p>
            <br />
            <p>{t("para3")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
