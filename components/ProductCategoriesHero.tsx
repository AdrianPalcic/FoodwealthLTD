import { PRODUCTS } from "@/constants";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
const ProductCategoriesHero = () => {
  const t = useTranslations("homepage.products");
  return (
    <section className="section-padding">
      <div className="flex flex-col items-center mb-4">
        <p className="text-tag mb-2">{t("tag")}</p>
        <h1 className="title">{t("title")}</h1>
        <h2 className="subtitle max-w-5xl text-center text-(--text-color)">
          {t("subtitle")}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        {PRODUCTS.map((prod) => (
          <Link
            key={prod.key}
            href={`/products/${prod.link}`}
            className="relative block"
          >
            <div className="h-full w-full overflow-hidden">
              <Image
                height={500}
                width={650}
                src={`${prod.img}`}
                alt="Product Category"
                className="h-full w-full duration-300 transition-transform hover:scale-[1.1]"
              />
            </div>
            <div className="content absolute bottom-[15] left-[15] z-10">
              <h3 className="text-white text-3xl uppercase font-bold">
                {t(prod.key)}
              </h3>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <Link href="/products">
          <button className="button-main">{t("button")}</button>
        </Link>
      </div>
    </section>
  );
};

export default ProductCategoriesHero;
