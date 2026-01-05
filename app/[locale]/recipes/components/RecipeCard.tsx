import { Link } from "@/i18n/navigation";
import { Clock, User } from "lucide-react";
import React from "react";

const RecipeCard = () => {
  return (
    <div className="bg-white w-full h-full rounded-lg">
      <div className="h-[220px] sm:h-[300px] w-full">
        <img
          src="/i1.jpg"
          alt="Subcategory"
          className="w-full h-full object-cover rounded-t-xl"
        />
      </div>
      <div className="py-2 px-4 sm:px-6">
        <p className="text-xs py-2 px-4 rounded-xl border border-black w-fit font-josefin font-bold text-black">
          Main Course
        </p>
        <div>
          <h3 className="text-2xl duration-200 transition-colors uppercase font-bold group-hover:text-(--accent-color) mt-4 mb-2">
            Mediterranean Grilled Chicken
          </h3>
          <p>
            Succulent chicken marinated with our Mediterranean Essence herb
            blend, grilled to perfection with a golden crust.
          </p>
        </div>
        <div className="flex items-center mt-4 flex-wrap">
          <div className="flex-1 flex gap-2 items-center justify-start">
            <Clock className="text-(--accent-color)" />
            <p className="text-xs">35min</p>
          </div>
          <div className="flex-1 flex gap-2 items-center justify-start">
            <User className="text-(--accent-color)" />
            <p className="text-xs">4 servings</p>
          </div>
        </div>
      </div>
      <div className="w-full h-0.5 mt-4 mb-2 bg-(--accent-color)"></div>
      <div className="py-2 px-4 sm:px-6 w-full">
        <p className="text-xs uppercase font-josefin text-(--accent-color)">
          Products Used
        </p>
        <div className="flex gap-2 flex-wrap mt-2">
          {Array.from({ length: 2 }).map((item, idx) => (
            <span
              className="text-[14px] py-2 px-1 rounded-xl bg-[#D9D9D9] font-josefin font-bold"
              key={idx}
            >
              Pepper
            </span>
          ))}
        </div>
        <Link href="/recipes/recipe" className="w-full">
          <button className="button-main ">View Recipe</button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
