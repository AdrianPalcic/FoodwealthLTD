import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";
import Form from "./Form";

const Contact = () => {
  const t = useTranslations("contactpage.contactinfo");

  return (
    <section className="section-padding">
      <div className="w-full flex justify-center ">
        <div className="flex-1">
          <h1 className="title">{t("title")}</h1>
          <h2 className="subtitle">{t("subtitle")}</h2>

          <div className="flex flex-col gap-8 mt-8">
            <div className="flex items-center gap-2">
              <div className="bg-(--accent-color) p-4 rounded-xl">
                <Phone className="text-(--accent-hover)" />
              </div>
              <div>
                <p className="text-lg">{t("info1.title")}</p>
                <a
                  className="font-inter text-(--text-color)"
                  href="tel:+385957482199"
                >
                  +385 95 748 2199
                </a>
                <p>{t("info1.workhours")}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-(--accent-color) p-4 rounded-xl">
                <Mail className="text-(--accent-hover)" />
              </div>
              <div>
                <p className="text-lg">Email</p>
                <a
                  className="font-inter text-(--text-color)"
                  href="mail:adrian.palcic@gmail.com"
                >
                  mail@example.com
                </a>
                <p>{t("info2.respondtime")}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-(--accent-color) p-4 rounded-xl">
                <MapPin className="text-(--accent-hover)" />
              </div>
              <div>
                <p className="text-lg">{t("info3.title")}</p>
                <p>{t("info3.location")}</p>
                <p>{t("info3.serving")}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-(--accent-color) p-4 rounded-xl">
                <Clock className="text-(--accent-hover)" />
              </div>
              <div>
                <p className="text-lg">{t("info4.title")}</p>
                <p>{t("info4.sub1")}</p>
                <p>{t("info4.sub2")}</p>
                <p>{t("info4.sub3")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
