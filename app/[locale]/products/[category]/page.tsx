import { notFound } from "next/navigation";
import { ADDPRODUCTS } from "@/constants";
import Hero from "./components/Hero";
import SubcategoryListing from "./components/SubcategoryListing";
import GlobalCTA from "@/components/GlobalCTA";

export async function generateStaticParams() {
  const locales = ["hr", "en"];

  return locales.flatMap((locale) =>
    ADDPRODUCTS.filter((p) => p.link).map((p) => ({
      locale,
      category: p.link,
    }))
  );
}
interface PageProps {
  params: {
    category: string;
    locale: string;
  };
}

const ProductPage = async ({ params }: PageProps) => {
  const { category, locale } = await params;
  console.log(category, locale);

  const productCategory = ADDPRODUCTS.find((p) => p.link === category);

  if (!productCategory) return notFound();

  return (
    <main>
      <Hero
        title={productCategory.key}
        description={productCategory.desc}
        img={productCategory.img}
      />
      <SubcategoryListing />
      <GlobalCTA />
    </main>
  );
};

export default ProductPage;
