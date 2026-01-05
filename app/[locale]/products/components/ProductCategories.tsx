"use client";
import { ADDPRODUCTS } from "@/constants";
import { Link } from "@/i18n/navigation";

const ProductCategories = () => {
  return (
    <section className="section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <>
          {ADDPRODUCTS.map((product, idx) => (
            <Link
              key={product.key}
              className={`flex justify-end items-end py-4 px-2 sm:px-6  min-h-80 sm:min-h-124 rounded-xl col-span-4 sm:col-span-2 relative group cursor-pointer overflow-hidden`}
              href={`/${product.link}`}
            >
              <img
                src={product.img}
                loading="lazy"
                className=" rounded-xl absolute inset-0 object-cover  w-full h-full duration-300 transition-transform group-hover:scale-[1.1]"
              ></img>
              <div className="z-2 absolute inset-0 w-full h-full bg-[#4B3526]/40 duration-300 transition-colors rounded-xl" />
              <div className=" z-50">
                <p className="text-[30px] sm:text-[60px] text-white font-regular">
                  {idx + 1 > 10 ? idx + 1 : "0" + `${idx + 1}`}
                </p>
                <h1 className="title text-white">{product.key}</h1>
                <h2 className=" text-white mb-4 font-regular text-lg">
                  {product.desc}
                </h2>
                <p className="text-white text-xs">
                  {product.additionalProducts}
                </p>
              </div>
            </Link>
          ))}
          <div className="col-span-4 sm:col-span-3 relative min-h-80 sm:min-h-124 rounded-xl flex items-end py-4 px-2 sm:px-6 bg-(--secondary-color)">
            <img
              src={"/i6.jpg"}
              loading="lazy"
              className=" hidden sm:block absolute rounded-xl inset-0 bg-cover bg-center w-full h-full duration-300 transition-transform group-hover:scale-[1.1] object-cover"
            ></img>
            <div className="z-2 absolute inset-0 w-full h-full bg-[#4B3526]/40 duration-300 transition-colors rounded-xl" />
            <div className="z-10">
              <h1 className="title text-white">
                Interested in our other brands?
              </h1>
              <h2 className=" text-white mb-4 font-regular text-lg">
                Complete seasoning kits that simplify cooking without
                compromising on taste
              </h2>
              <button className="button-main mt-2!">Explore more</button>
            </div>
          </div>
          <div className="bg-(--accent-color) col-span-4 sm:col-span-1 rounded-xl py-12 px-2 sm:px-4">
            <h1 className="title text-white md:text-4xl! mb-5">
              Need Recipe ideas?
            </h1>
            <h2 className=" text-white mb-4 font-regular text-lg">
              Need something specific? We offer custom blending, private
              labeling, and tailored packaging solutions for our B2B partners.
            </h2>
            <button className="bg-white text-(--accent-color) duration-700 transition-colors hover:bg-black hover:text-white">
              Explore Recipes
            </button>
          </div>
        </>
      </div>
    </section>
  );
};

export default ProductCategories;
