"use client";

import React from "react";
import Mode from "./Mode";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="fixed top-0 left-0 w-full border-b border-stone-800 z-50 bg-white dark:bg-black">
        <div className=" bg-linear-to-bl from-violet-400 to-violet-500 p-3"></div>
        <div className="flex items-center justify-between max-w-[1200px] mx-auto py-4">
          <p className="font-bold text-yellow-400 text-lg">X//</p>
          <div className="flex items-center gap-6 text-black dark:text-white">
            <div className="cursor-pointer hover:underline underline-offset-2">
              Reviews
            </div>
            <div className="cursor-pointer hover:underline underline-offset-2">
              Testimonials
            </div>
            <div className="cursor-pointer hover:underline underline-offset-2">
              Benefits
            </div>
            <div className="cursor-pointer hover:underline underline-offset-2">
              Checkout
            </div>
          </div>
          <Mode />
        </div>
      </div>
      <div className="h-[100px]" />
    </React.Fragment>
  );
};

export default Navbar;
