"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export default function MobileLocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const locales = ["en", "hr"];

  const changeLocale = (newLocale: string) => {
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
    }
    setOpen(false); // zatvori dropdown
  };

  return (
    <div className="relative inline-block text-left">
      {/* Trenutni locale */}
      <div
        className=" px-3 py-1 text-center font-josefin cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="flex items-center gap-1">
          {locale.toUpperCase()}
          {!open ? <span>˅</span> : <span>⌃</span>}
        </span>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute mt-1 right-4 w-fit  px-2  z-10">
          {locales
            .filter((loc) => loc !== locale)
            .map((loc) => (
              <div
                key={loc}
                className=" py-2  cursor-pointer text-center"
                onClick={() => changeLocale(loc)}
              >
                {loc.toUpperCase()}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
