import { BRANDS } from "@/constants";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

const BrandsHero = () => {
  const t = useTranslations("homepage.brands");

  return (
    <section className="section-padding w-full">
      <div className="flex w-full justify-center">
        <div className="flex flex-col items-center w-full">
          <p className="text-tag text-center mb-2">{t("tag")}</p>
          <h1 className="title text-center">{t("title")}</h1>
          <h2 className="subtitle mb-8 text-center text-(--text-color)">
            {t("paragraph")}
          </h2>
          <div className="flex gap-12 justify-center ">
            {BRANDS.map((brand, i) => (
              <Link href={`/${brand.link}`} key={i}>
                <Image src={brand.img} width={80} height={80} alt="vector" />
                <p className="font-josefin text-xl mt-1">{brand.name}</p>
              </Link>
            ))}
          </div>
          <Link href="/brands">
            <button className="button-main">{t("button")}</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandsHero;
