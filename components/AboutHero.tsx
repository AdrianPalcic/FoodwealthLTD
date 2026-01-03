import React from "react";

const AboutHero = () => {
  return (
    <section className="px-4 sm:px-16 mt-20 font-inter">
      <div className="flex justify-center gap-8">
        <div className="">
          <div className="w-full h-[500px]">
            <img src="/i1.jpg" alt="Image" className="w-full h-full" />
          </div>
        </div>
        <div className="flex-1 py-6">
          <p className="text-tag mb-4">About Us</p>
          <h1 className="title text-black mb-4">Our Story</h1>
          <p>
            Founded in 2012, Foodwealth Ltd produces, imports, packages, and
            distributes premium herbs, spices, and culinary products. Our
            mission is to combine quality with authenticity, delivering flavors
            that inspire trust and elevate everyday cooking.
          </p>
          <br />
          <p>
            We serve retailers, wholesalers, and foodservice providers across
            Southeastern Europe, including Greece, Bulgaria, and the Balkans,
            bringing authentic flavors and innovative products to kitchens
            everywhere.
          </p>
          <button className="button-main">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
