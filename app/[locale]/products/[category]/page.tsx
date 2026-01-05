import { notFound } from "next/navigation";
import { ADDPRODUCTS } from "@/constants";
import Hero from "./components/Hero";
import SubcategoryListing from "./components/SubcategoryListing";
import GlobalCTA from "@/components/GlobalCTA";

export async function generateStaticParams() {
  return ADDPRODUCTS.map((p) => ({
    category: p.key,
  }));
}

interface PageProps {
  params: {
    category: string;
  };
}

const ProductPage = async ({ params }: PageProps) => {
  const { category } = await params;
  console.log(category);

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
