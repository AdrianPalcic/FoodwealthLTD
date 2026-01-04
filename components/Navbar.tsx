"use client";

import { useTranslations } from "next-intl";
import { pageLinks } from "@/constants";
import { Link } from "@/i18n/navigation";
import LocaleSwitcher from "./LocaleSwitcher";
import Image from "next/image";
import { Facebook, Instagram, Menu, X } from "lucide-react";
import { useState } from "react";
import MobileLocaleSwitcher from "./MobileLocaleSwitcher";
const Navbar = () => {
  const t = useTranslations("links.navbar");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="pt-2 px-8 relative">
      <nav className="flex justify-between items-center gap-3">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="FoodWealth Logo"
            className="mix-blend-darken"
            width={100}
            height={100}
          />
        </Link>
        <div className="hidden absolute md:flex md:static items-center gap-12 ">
          <ul className="flex gap-6">
            {pageLinks.map((link) => (
              <Link key={link.key} href={`/${link.path}`}>
                <li className="font-josefin text-[18px]">{t(link.key)}</li>
              </Link>
            ))}
          </ul>
          <LocaleSwitcher />
        </div>
        <div className="block md:hidden md:absolute">
          <Menu
            className="text-black duration-200 transition-colors hover:text-(--accent-color)"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </nav>

      <nav
        className={`
    fixed top-0 left-0
    z-10
    h-dvh w-dvw
    bg-black
    transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "translate-x-full"}
  `}
      >
        <div className="h-full w-full flex overflow-hidden relative bg-(--accent-color)">
          <div
            className="flex-[0.9] sm:flex-[0.7] relative "
            style={{
              clipPath: "polygon(80% 100%, 0 100%, 0 0, 100% 0)",
            }}
          >
            <Image
              src={"/i2.jpg"}
              alt="image"
              height={750}
              width={750}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-[0.1] sm:flex-[0.3] bg-(--accent-color) text-white">
            <div className="flex flex-col justify-between h-full">
              <div className="py-6 px-6 flex gap-4 justify-end items-center font-josefin">
                <MobileLocaleSwitcher />
                <X onClick={() => setIsOpen(!isOpen)} />
              </div>
              <ul className="flex flex-col items-end px-6 py-6  gap-6">
                {pageLinks.map((link) => (
                  <Link key={link.key} href={`/${link.path}`}>
                    <li className="font-josefin sm:text-3xl text-2xl duration-300 transition-colors hover:text-(--accent-hover)">
                      {t(link.key)}
                    </li>
                  </Link>
                ))}
              </ul>
              <div className="flex flex-col items-end gap-2 font-inter px-6">
                <a className="text-sm duration-300 transition-colors hover:text-(--accent-hover) cursor-pointer">
                  +385 95 748 2199
                </a>
                <a className="text-sm duration-300 transition-colors hover:text-(--accent-hover) cursor-pointer">
                  info@foodwealth@gmail.com
                </a>
              </div>
              <div className="flex gap-3 justify-end py-4 px-6">
                <Facebook className="duration-300 transition-colors hover:text-(--accent-hover) cursor-pointer" />
                <Instagram className="duration-300 transition-colors hover:text-(--accent-hover) cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
