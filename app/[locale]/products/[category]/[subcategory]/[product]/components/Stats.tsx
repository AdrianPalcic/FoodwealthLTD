import { useTranslations } from "next-intl";
import React from "react";

const Stats = () => {
  const t = useTranslations("productpage.stats");
  const alergens = [
    "celera",
    "glutena",
    "gorušice",
    "soje",
    "sezama",
    "sulfita",
  ];

  return (
    <section className="section-padding">
      <div className="flex flex-col gap-6 sm:gap-12">
        <div className="flex flex-col justify-center md:flex-row  gap-6 md:gap-12 items-start md:items-center w-full">
          <div className="flex-[0.2]">
            <span className="hidden md:block text-[60px] font-josefin text-[#9b9a9a]">
              01
            </span>
            <h1 className="text-3xl text-black font-josefin font-bold uppercase">
              {" "}
              {t("stat1")}
            </h1>
          </div>
          <div className="flex-[0.8] rounded-lg py-8 px-2 sm:px-6 bg-white">
            <div className="flex gap-3 items-start max-w-3xl">
              <span className="w-fit h-fit mt-2 p-1 bg-(--accent-color) rounded-full"></span>
              <p>
                Sastojci: morska sol 60%, smeđi šećer, sušeni ružmarin, pečeni
                češnjak, crni papar u zrnu, sušena kadulja, sušeni peršin,
                limunov sok u prahu (maltodekstrin, limunov sok), sušeno lišće
                lovora, sušene masline 1%, tvar protiv zgrudnjavanja: silicijev
                dioksid.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center md:flex-row  gap-6 md:gap-12 items-start md:items-center w-full">
          <div className="flex-[0.2]">
            <span className="hidden md:block text-[60px] font-josefin text-[#9b9a9a]">
              02
            </span>
            <h1 className="text-3xl text-black font-josefin font-bold uppercase">
              {" "}
              {t("stat2")}
            </h1>
          </div>
          <div className="flex-[0.8] rounded-lg py-8 px-2 sm:px-6 bg-(--accent-color)">
            <div className="flex gap-3 items-start max-w-3xl">
              <span className="w-fit h-fit mt-2 p-1 bg-orange-400 rounded-full"></span>
              <p>
                Može sadržavati tragove:{" "}
                {alergens.map((alergen, i) => (
                  <span className="font-bold" key={i}>
                    {alergen}
                    {", "}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center md:flex-row  gap-6 md:gap-12 items-start md:items-center w-full">
          <div className="flex-[0.2]">
            <span className="hidden md:block text-[60px] font-josefin text-[#9b9a9a]">
              03
            </span>
            <h1 className="text-3xl text-black font-josefin font-bold uppercase">
              {" "}
              {t("stat3")}
            </h1>
          </div>
          <div className="flex-[0.8] rounded-lg py-8 px-2 sm:px-6 bg-white">
            <div className="flex gap-3 items-start max-w-3xl">
              <span className="w-fit h-fit mt-2 p-1 bg-(--accent-color) rounded-full"></span>
              <p>
                Ova aromatična mješavina bilja, češnjaka i masline idealna je za
                razna jela. Prije pečenja, obilno pospite dobro pouljeno pile
                ili ribu. Krumpire i povrće premažite s dovoljno maslinovog ulja
                i pospite mješavinom prije pečenja za rustikalni okus. Također,
                možete posuti umake za tjesteninu ili pizzu za dodatnu aromu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
