"use client";

import { useTranslations } from "use-intl";

const Form = () => {
  const t = useTranslations("contactpage.contactform");

  return (
    <div className="bg-white py-12 px-4 sm:px-6 rounded-xl">
      <h2 className="text-2xl font-bold uppercase mb-2">{t("title")}</h2>
      <h3 className="subtitle mb-10">{t("subtitle")}</h3>
      <form className="flex flex-col gap-6">
        <div className="flex justify-between w-full gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="name" className="font-inter">
              {t("name")}
            </label>
            <input
              id="name"
              type="text"
              className="border border-[#D0D0D0] bg-[#EFEFEF] rounded-lg py-2 px-2 font-inter"
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="email" className="font-inter">
              {t("email")}
            </label>
            <input
              id="email"
              type="text"
              className="border border-[#D0D0D0] bg-[#EFEFEF] rounded-lg py-2 px-2 font-inter"
            />
          </div>
        </div>
        <div className="flex justify-between w-full gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="company" className="font-inter">
              {t("companyname")}
            </label>
            <input
              id="company"
              type="text"
              className="border border-[#D0D0D0] bg-[#EFEFEF] rounded-lg py-2 px-2 font-inter"
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="phone" className="font-inter">
              {t("phone")}
            </label>
            <input
              id="phone"
              type="text"
              className="border border-[#D0D0D0] bg-[#EFEFEF] rounded-lg py-2 px-2 font-inter"
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="businesstype">{t("business")}</label>
          <select
            id="businesstype"
            className="border border-[#D0D0D0] bg-[#EFEFEF] rounded-lg py-2 px-2"
          >
            <option>Select</option>
            <option>1</option>
            <option>3</option>
            <option>2</option>
          </select>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="message">{t("message")}</label>
          <textarea
            id="message"
            className="border border-[#D0D0D0] bg-[#EFEFEF] rounded-lg py-2 px-2"
            placeholder={t("placeholder")}
          ></textarea>
        </div>
        <button type="submit" className="button-main w-full!">
          {t("button")}
        </button>
      </form>
    </div>
  );
};

export default Form;
