"use client";

import Chevron from "@/public/Chevron";
import React, { useState } from "react";
import benefits from "@/public/benefits.json";
import { useTheme } from "next-themes";

const SleepBenefitsDropdown = () => {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4 sm:max-w-xl mx-auto mt-12 lg:mt-22">
      <h4 className="flex justify-center text-lg text-center sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-8">
        Benefits of better sleep 😎
      </h4>
      {benefits.map((benefit, index) => (
        <div key={index} className="mb-2">
          <button
            className={`w-full flex justify-between items-center py-4 font-medium text-[16px] lg:text-xl border-b-[0.5px] cursor-pointer ${
              theme === "dark" ? "border-stone-600" : "border-stone-300"
            } ${
              openIndex === index
                ? `${
                    theme === "dark" ? "text-violet-300 " : "text-violet-600 "
                  }`
                : ""
            }`}
            onClick={() => handleToggleDropdown(index)}
          >
            {benefit.title}
            <span
              className={`${openIndex === index ? "rotate-0" : "rotate-180"}`}
            >
              <Chevron />
            </span>
          </button>

          {openIndex === index && (
            <p
              className={`mt-2 rounded-md pt-2 pb-2 text-sm sm:text-lg font-medium ${
                theme === "dark" ? "text-violet-300" : "text-violet-600"
              }`}
            >
              {benefit.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default SleepBenefitsDropdown;
