import Link from "next/link";
import React from "react";

const LeadingBrand = () => {
  return (
    <section className="section-padding">
      <h1 className="title text-center mb-4">Explore our leading brand</h1>
      <div className="w-fit mx-auto">
        <Link href="https://www.capeherb.co.za/">
          <img
            src="/cape1.png"
            alt=""
            loading="lazy"
            className="w-[300px] h-full object-cover"
          />
        </Link>
      </div>
    </section>
  );
};

export default LeadingBrand;
