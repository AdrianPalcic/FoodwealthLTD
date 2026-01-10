"use client";

import { pageLinks, infoLinks } from "@/constants";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("links");
  const f = useTranslations("footer");
  const c = useTranslations("contactpage.contactinfo.info3");

  return (
    <footer className="">
      <div className="mx-auto  px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* LOGO + DESCRIPTION */}
          <div className="space-y-4 ">
            <Link href="/" className="flex items-center gap-2 w-fit">
              <img
                src="/logo.svg"
                alt="FoodWealth"
                className="h-24 w-auto mix-blend-multiply"
              />
            </Link>
            <p className="text-sm leading-relaxed">
              Foodwealth Ltd – {f("description")}
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="mb-4 text-lg font-medium ">{f("title1")}</h4>
            <ul className="space-y-2 text-sm font-inter">
              {pageLinks.map((link, i) => (
                <li className="hover:text-(--accent-color) transition" key={i}>
                  <a className="font-inter" href={`/${link.path}`}>
                    {t(`navbar.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-medium ">{f("title2")}</h4>
            <ul className="space-y-2 text-sm font-inter">
              {infoLinks.map((link, i) => (
                <li className="hover:text-(--accent-color) transition" key={i}>
                  <a className="font-inter" href={`/${link.path}`}>
                    {t(`infoLinks.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="mb-4 text-lg font-medium ">{f("title3")}</h4>
            <ul className="space-y-2 text-sm font-inter">
              <li>{c("location")}</li>
              <li>+30 22950 41870</li>
              <li>contactus@foodwealth.gr</li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="text-lg font-medium ">{f("title4")}</h4>

            <form className="mt-2">
              <input
                type="text"
                className="border border-gray-400 rounded-sm py-2 px-1"
              />
              <button className="button-main">{f("button")}</button>
            </form>

            <p className="text-sm mt-4 font-inter">{f("socials")}</p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 py-4 text-center text-xs">
        © {new Date().getFullYear()} FoodWealth. {f("rights")}
      </div>
    </footer>
  );
};

export default Footer;
