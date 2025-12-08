import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("homepage");

  return (
    <main>
      <h1 className="p-30 font-josefin">{t("title")}</h1>
      <p>Ovo je test za 333 boju</p>
      <button>Henlo</button>
    </main>
  );
}
