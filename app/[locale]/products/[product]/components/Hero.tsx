import React from "react";

const Hero = ({
  title,
  description,
  img,
}: {
  title: string;
  description: string;
  img: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row w-full h-[80vh] bg-(--accent-color) relative">
      <img
        src={img}
        alt="Product"
        className="absolute md:hidden inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 w-full h-full z-2 bg-black/40 block md:hidden"></div>
      <div className="flex-1 md:flex-[0.3] flex flex-col items-start justify-center px-4 sm:px-10 z-10">
        <p className="text-lg text-white uppercase font-bold font-josefin mb-2">
          Product Category
        </p>
        <h1 className="title text-white mb-4">{title}</h1>
        <h2 className="subtitle text-white">{description}</h2>
      </div>
      <div
        className="flex-1 md:flex-[0.7] relative hidden md:block"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)",
        }}
      >
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={img}
        />
      </div>
    </div>
  );
};

export default Hero;
