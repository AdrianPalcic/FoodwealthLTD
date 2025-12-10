"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import Image from "next/image";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const changeLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex gap-1.5 items-center bg-neutral-100 px-2 py-0.5 border border-neutral-300 rounded-xl font-josefin">
      <Image src="/language.png" alt="Language select" width={30} height={30} />
      <span
        className={`cursor-pointer px-1 ${locale === "en" ? "active" : ""}`}
        onClick={() => changeLocale("en")}
      >
        EN
      </span>
      <span
        className={`cursor-pointer px-1 ${locale === "hr" ? "active" : ""}`}
        onClick={() => changeLocale("hr")}
      >
        HR
      </span>
    </div>
  );
}
