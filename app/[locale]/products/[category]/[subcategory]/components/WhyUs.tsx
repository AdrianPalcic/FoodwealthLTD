import React from "react";

const WhyUs = () => {
  return (
    <section className="section-padding">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="title text-center">Why Choose Us?</h1>
        <h2 className="subtitle text-center max-w-5xl">
          Experience the difference that quality, sustainability, and passion
          make in every product.
        </h2>
      </div>
      <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-2 mt-10 gap-6">
        <div className="bg-(--secondary-color) row-span-2 min-h-[300px] sm:min-h-[600px] relative flex flex-col justify-center rounded-xl py-6 px-4 sm:px-10">
          <img
            src="/i1.jpg"
            alt="Why choose us"
            loading="lazy"
            className="hidden sm:block w-full h-full object-cover inset-0 rounded-xl absolute"
          />
          <div className="absolute inset-0 w-full h-full z-2 bg-black/40 rounded-xl hidden sm:block"></div>
          <div className="z-10">
            <h1 className="uppercase text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
              Premium Quality Guaranteed
            </h1>
            <p className="text-white">
              Every spice undergoes rigorous testing and quality control.
              Handpicked at peak freshness, sourced from the world's finest
              spice gardens, and delivered directly to your kitchen.
            </p>
          </div>
        </div>
        <div className="row-span-1 rounded-xl bg-white py-6 px-4 sm:px-6">
          <div className="w-full h-full flex gap-6 items-center">
            <div className="self-start">
              <img src="/droplet.svg" alt="Droplet" />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl sm:text-4xl font-bold uppercase ">
                Freshness Guaranteed
              </h3>
              <p className="subtitle">
                Small-batch processing ensures maximum flavor and aroma in every
                package.
              </p>
            </div>
          </div>
        </div>
        <div className="row-span-1 rounded-xl bg-white py-6 px-4 sm:px-6">
          <div className="w-full h-full flex gap-6 items-center">
            <div className="self-start">
              <img src="/recycle.svg" alt="Droplet" />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl sm:text-4xl font-bold uppercase ">
                Sustainably Sourced
              </h3>
              <p className="subtitle">
                Small-batch processing ensures maximum flavor and aroma in every
                package.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
