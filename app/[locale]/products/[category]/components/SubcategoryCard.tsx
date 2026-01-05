import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

const SubcategoryCard = ({ idx }: { idx: number }) => {
  const t = useTranslations("productcategorypage.subcategorycard");
  const items = ["China", "Medium", "Organic"];

  const colors = [
    "bg-(--secondary-color)",
    "border border-black",
    "bg-(--accent-color)",
  ];

  return (
    <div key={idx} className="bg-white w-full h-full rounded-lg">
      <div className="h-40 sm:h-[300px] w-full">
        <img
          src="/i1.jpg"
          alt="Subcategory"
          className="w-full h-full object-cover rounded-t-xl"
        />
      </div>
      <div className="py-2 px-2 sm:px-6">
        <Link
          href={"/products/herbs/subcategory"}
          className="flex justify-between items-center mb-2 group cursor-pointer"
        >
          <h3 className="text-2xl duration-200 transition-colors group-hover:text-(--accent-color)">
            Subcategory
          </h3>
          <span className=" duration-300 transition-all group-hover:translate-x-1.5 group-hover:text-(--accent-color)">
            <ArrowRight />
          </span>
        </Link>

        <div>
          <p>Premium true cinnamon with delicate, sweet flavor</p>
        </div>

        <div className="flex gap-2 items-center flex-wrap my-5">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`py-1 px-2 font-josefin rounded-lg font-medium ${
                colors[idx]
              } ${idx % 2 == 0 ? "text-white" : "text-black"}`}
            >
              {item}
            </div>
          ))}
        </div>
        <Link className="w-full h-full" href={"/products/herbs/subcategory"}>
          <button className="button-main ">{t("button")}</button>
        </Link>
      </div>
    </div>
  );
};

export default SubcategoryCard;
