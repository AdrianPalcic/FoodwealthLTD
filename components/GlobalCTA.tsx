import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import React from "react";

const GlobalCTA = () => {
  const t = useTranslations("globalCTA");

  return (
    <section className="w-full h-[500px] bg-(--cta-field-color)">
      <div className="flex flex-col w-full h-full justify-center items-center px-4">
        <h1 className="title text-center">{t("title")}</h1>
        <h2 className="subtitle max-w-3xl text-center mt-2">{t("subtitle")}</h2>
        <Link href="/contact">
          <button className="button-main">{t("button")}</button>
        </Link>
      </div>
    </section>
  );
};

export default GlobalCTA;
