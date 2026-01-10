import { useTranslations } from "next-intl";
import React from "react";

const ContactHero = () => {
  const t = useTranslations("homepage.contact");

  return (
    <section className="section-padding w-full">
      <div className="py-10 lg:py-24 px-4 sm:px-12 bg-white mx-auto max-w-3xl relative">
        <div className=" flex flex-col lg:flex-row flex-wrap gap-8 lg:gap-16 items-start justify-end relative">
          <div className="hidden lg:block absolute left-[-120px] bg-(--accent-color) text-white px-6 pt-12 pb-20  flex-[0.4] shadow-2xl">
            <h2 className="text-3xl font-semibold mb-12">{t("greenTitle")}</h2>

            <ul className="space-y-8">
              <li className="flex items-center gap-4">
                <span>📍</span>
                <span>{t("Street")}</span>
              </li>

              <li className="flex items-center gap-4">
                <span>📞</span>
                <a href="tel:+302295041870">+30 22950 41870</a>
              </li>

              <li className="flex items-center gap-4">
                <span>✉️</span>
                <a href="mail:contactus@foodwealth.gr">
                  contactus@foodwealth.gr
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 lg:flex-[0.6]">
            <h2 className="text-3xl font-semibold mb-12 uppercase">
              {t("title")}
            </h2>
            <form className="space-y-6">
              <input
                type="text"
                placeholder={t("placeholder1")}
                className="w-full bg-gray-100 px-6 py-4 rounded-md"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-100 px-6 py-4 rounded-md"
              />

              <textarea
                placeholder={t("placeholder2")}
                rows={6}
                className="w-full bg-gray-100 px-6 py-4 rounded-md resize-none"
              />

              <button
                type="submit"
                className="bg-[#A7B58A] text-white px-10 py-3 rounded-full hover:opacity-90 transition"
              >
                {t("button")}
              </button>
            </form>
          </div>
          <div className="block lg:hidden flex-1 bg-(--accent-color) w-full px-2 py-12 sm:p-12 text-white">
            <h2 className="text-3xl text-center sm:text-left font-semibold mb-12">
              {t("greenTitle")}
            </h2>

            <ul className="space-y-8">
              <li className="flex items-center gap-4">
                <span>📍</span>
                <span>{t("Street")}</span>
              </li>

              <li className="flex items-center gap-4">
                <span>📞</span>
                <a href="tel:+302295041870">+30 22950 41870</a>
              </li>

              <li className="flex items-center gap-4">
                <span>✉️</span>
                <a href="mail:contactus@foodwealth.gr">
                  contactus@foodwealth.gr
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
