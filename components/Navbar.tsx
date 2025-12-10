import { useTranslations } from "next-intl";
import { pageLinks } from "@/constants";
import { Link } from "@/i18n/navigation";
import LocaleSwitcher from "./LocaleSwitcher";
const Navbar = () => {
  const t = useTranslations("links.navbar");
  return (
    <header className="pt-2 px-4">
      <nav className="flex justify-between items-center gap-6">
        <img src="" alt="" />
        <div className="flex items-center gap-12">
          <ul className="flex gap-6">
            {pageLinks.map((link) => (
              <Link key={link.key} href={`/${link.path}`}>
                <li className="font-(--font-josefin)">{t(link.key)}</li>
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
