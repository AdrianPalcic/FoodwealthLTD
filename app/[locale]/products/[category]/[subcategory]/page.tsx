import { notFound } from "next/navigation";

import ProductListing from "./components/ProductListing";
import WhyUs from "./components/WhyUs";
import LeadingBrand from "./components/LeadingBrand";
import GlobalCTA from "@/components/GlobalCTA";

interface PageProps {
  params: {
    subcategory: string;
  };
}

const page = async ({ params }: PageProps) => {
  const { subcategory } = await params;
  if (!subcategory) return notFound();

  return (
    <main>
      <ProductListing subcategory={subcategory} />
      <WhyUs />
      <LeadingBrand />
      <GlobalCTA />
    </main>
  );
};

export default page;
