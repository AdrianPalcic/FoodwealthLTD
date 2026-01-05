import { notFound } from "next/navigation";
import { ADDPRODUCTS } from "@/constants";
import Hero from "./components/Hero";

export async function generateStaticParams() {
  return ADDPRODUCTS.map((p) => ({
    product: p.key,
  }));
}

interface PageProps {
  params: {
    product: string;
  };
}

const ProductPage = async ({ params }: PageProps) => {
  const { product } = await params;
  console.log(product);

  const productCategory = ADDPRODUCTS.find((p) => p.link === product);

  if (!productCategory) return notFound();

  return (
    <main>
      <Hero
        title={productCategory.key}
        description={productCategory.desc}
        img={productCategory.img}
      />
    </main>
  );
};

export default ProductPage;
