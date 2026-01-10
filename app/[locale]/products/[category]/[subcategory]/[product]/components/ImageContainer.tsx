"use client";

import Image from "next/image";
import React, { useState } from "react";

const ImageContainer = () => {
  const images = ["/i1.jpg", "/i2.jpg", "/i3.jpg", "/i4.jpg"];

  const [activeIndex, setActiveIndex] = useState(images[1]);

  return (
    <div className="w-full">
      <div>
        <Image
          src={activeIndex}
          alt="Product"
          width={633}
          height={448}
          className="rounded-xl object-cover lg:max-h-[400px] w-full h-auto"
          loading="eager"
        />
      </div>
      <div className="flex gap-3 items-center w-full  py-2 lg:max-w-[600px] flex-wrap">
        {images.map((img, i) => (
          <div
            key={i}
            className="flex-1 lg:w-[180px] h-auto lg:h-36 overflow-hidden relative group cursor-pointer"
          >
            <div className="absolute inset-0 w-full min-h-[400px] h-full bg-black/20 opacity-0 duration-300 transition-opacity group-hover:opacity-100"></div>
            <img
              src={img}
              alt="Smaller-product-images"
              className="w-full min-h-[100px] md:min-h-40 h-full object-cover duration-300 transition-all group-hover:scale-[1.1] rounded-none md:rounded-lg "
              loading="eager"
              onClick={() => setActiveIndex(images[i])}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageContainer;
