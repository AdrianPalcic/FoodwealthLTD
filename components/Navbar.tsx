import { useTranslations } from "next-intl";
import { pageLinks } from "@/constants";
import { Link } from "@/i18n/navigation";
import LocaleSwitcher from "./LocaleSwitcher";
import Image from "next/image";
const Navbar = () => {
  const t = useTranslations("links.navbar");
  return (
    <header className="pt-2 px-8">
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
        <div className="flex items-center gap-12">
          <ul className="flex gap-6">
            {pageLinks.map((link) => (
              <Link key={link.key} href={`/${link.path}`}>
                <li className="font-josefin text-[18px]">{t(link.key)}</li>
              </Link>
            ))}
          </ul>
          <LocaleSwitcher />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
