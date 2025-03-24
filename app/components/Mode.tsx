"use client";

import * as React from "react";
import { useTheme } from "next-themes";

const Mode = () => {
  const { theme, setTheme } = useTheme();

  const isLight = theme === "light";

  return (
    <div className="flex items-center gap-2">
      <span
        className={` transition-opacity duration-200 ${
          isLight ? "text-white" : "text-stone-400"
        }`}
      >
        Light
      </span>

      <button
        onClick={() => setTheme(isLight ? "dark" : "light")}
        className="relative w-12 h-6 rounded-full bg-gray-300 dark:bg-neutral-600 transition-colors cursor-pointer"
      >
        <span
          className={`absolute top-[2px] left-[2px] h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-300 transform ${
            !isLight ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>

      <span
        className={`transition-opacity duration-200 ${
          isLight ? "text-stone-400" : "text-white"
        }`}
      >
        Dark
      </span>
    </div>
  );
};

export default Mode;
