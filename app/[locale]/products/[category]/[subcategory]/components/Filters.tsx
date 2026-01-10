"use client";

import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

const dietaryOptions = [
  "Halal",
  "Parave",
  "Vegan",
  "Vegetarian",
  "Gluten-free",
  "Organic",
];

const sortOptions = ["default", "reverse"];

const Filters = () => {
  const t = useTranslations("subcategorypage.filters");

  const [openDietary, setOpenDietary] = useState(false);
  const [openSort, setOpenSort] = useState(false);

  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);
  const [selectedSort, setSelectedSort] = useState<string | null>(null);

  const dietaryRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dietaryRef.current &&
        !dietaryRef.current.contains(e.target as Node)
      ) {
        setOpenDietary(false);
      }
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setOpenSort(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Toggle dietary selection (multi-select)
  const toggleDietary = (option: string) => {
    setSelectedDietary((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="py-4 w-full">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
        {/* FILTER LABEL */}
        <div className="flex items-center gap-2">
          <SlidersHorizontal />
          <p className="font-medium text-black">{t("filter")}:</p>
        </div>

        {/* DROPDOWNS */}
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          {/* DIETARY */}
          <div ref={dietaryRef} className="relative w-full sm:w-auto">
            <button
              onClick={() => {
                setOpenDietary(!openDietary);
                setOpenSort(false);
              }}
              className="flex w-full items-center justify-between gap-10 rounded-lg border border-[#C0BEBE] bg-white px-4 py-3 group"
            >
              <span className="text-black">{t("dietary.default")}</span>
              <ChevronDown
                className={`transition-transform duration-200 group-hover:text-(--accent-color) ${
                  openDietary ? "rotate-180" : ""
                }`}
              />
            </button>

            {openDietary && (
              <div className="absolute z-20 mt-2 w-full rounded-lg border border-[#C0BEBE] bg-white shadow-md">
                {dietaryOptions.map((option) => {
                  const active = selectedDietary.includes(option);

                  return (
                    <button
                      key={option}
                      onClick={() => toggleDietary(option)}
                      className="flex w-full items-center gap-3 px-4 py-2 text-sm hover:bg-gray-50 transition"
                    >
                      {/* CHECKBOX */}
                      <span
                        className={`flex h-4 w-4 items-center justify-center rounded border transition
                ${active ? "bg-(--accent-color) border-none" : "border-gray"}
              `}
                      >
                        {active && (
                          <svg
                            className="h-3 w-3 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8.25 8.25a1 1 0 01-1.414 0l-3.75-3.75a1 1 0 011.414-1.414l3.043 3.043 7.543-7.543a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </span>

                      <span className={active ? "font-medium" : ""}>
                        {option}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* SORT */}
          <div ref={sortRef} className="relative w-full sm:w-auto">
            <button
              onClick={() => {
                setOpenSort(!openSort);
                setOpenDietary(false);
              }}
              className="flex w-full items-center justify-between gap-10 rounded-lg border border-[#C0BEBE] bg-white px-4 py-3 group"
            >
              <span className="text-black">
                {!selectedSort
                  ? t("byname.default")
                  : t(`byname.${selectedSort}`)}
              </span>
              <ChevronDown
                className={`transition-transform duration-200 group-hover:text-(--accent-color) ${
                  openSort ? "rotate-180" : ""
                }`}
              />
            </button>

            {openSort && (
              <div className="absolute z-20 mt-2 w-full rounded-lg border border-[#C0BEBE] bg-white shadow-md">
                {sortOptions.map((option) => {
                  const active = selectedSort === option;

                  return (
                    <button
                      key={option}
                      onClick={() => {
                        setSelectedSort(option);
                        setOpenSort(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm transition
                        ${
                          active
                            ? "bg-gray-100 font-medium"
                            : "hover:bg-gray-50"
                        }
                      `}
                    >
                      {t(`byname.${option}`)}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
