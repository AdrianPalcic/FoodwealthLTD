import React from "react";
import SubcategoryCard from "./SubcategoryCard";

const SubcategoryListing = () => {
  return (
    <section className="section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6">
        {Array.from({ length: 6 }).map((item, idx) => (
          <SubcategoryCard idx={idx} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default SubcategoryListing;
