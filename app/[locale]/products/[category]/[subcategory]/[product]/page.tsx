import { notFound } from "next/navigation";
import React from "react";

interface PageProps {
  params: {
    product: string;
  };
}

const page = async ({ params }: PageProps) => {
  const { product } = await params;
  if (!product) return notFound();
  return <div>Product</div>;
};

export default page;
