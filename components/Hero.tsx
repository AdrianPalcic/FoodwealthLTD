"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { HERO_CONTENT } from "@/constants";
import { useTranslations } from "next-intl";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000 }),
  ]);
  const t = useTranslations("homepage");

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {HERO_CONTENT.map((item, i) => (
          <div
            key={i}
            className="embla__slide relative flex flex-col justify-center sm:justify-end py-20 px-4 sm:px-10 h-[500px] bg-cover bg-center"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {/* Overlay za zatamnjenje */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 max-w-full sm:max-w-3xl text-white text-center sm:text-left ">
              <h1 className="title py-3 text-4xl md:text-5xl font-bold text-white">
                {t(item.title)}
              </h1>
              <h2 className="subtitle text-lg md:text-xl text-white">
                {t(item.subtitle)}
              </h2>
              <button className="button-main mt-5 px-6 py-3 rounded-lg bg-accent hover:bg-accent/80 transition">
                {t(item.cta)}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
