"use client";

import React from "react";
import Mode from "./Mode";
import Bag from "@/public/Bag";
import Burger from "@/public/Buger";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="fixed top-0 left-0 w-full border-b border-stone-800 z-50 bg-white dark:bg-black">
        <div className="bg-linear-to-bl from-violet-400 to-violet-500 p-3"></div>
        <div className="flex items-center justify-between px-3 sm:px-6 max-w-[1200px] mx-auto py-3 sm:py-4">
          <div className="flex items-center gap-3">
            <p className="font-medium text-green-400 text-sm sm:text-lg">X//</p>
            <div className="flex sm:hidden text-stone-400 font-thin">|</div>
            <div className="flex items-center gap-1 sm:hidden dark:text-white text-xs">
              <Burger />
              <p>Menu</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4 lg:gap-6 text-black dark:text-white sm:text-sm lg:text-[16px]">
            <div className="cursor-pointer hover:underline underline-offset-2">
              Reviews
            </div>
            <div className="cursor-pointer hover:underline underline-offset-2">
              Testimonials
            </div>
            <div className="cursor-pointer hover:underline underline-offset-2">
              Benefits
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:underline underline-offset-2">
              <div>Checkout</div>
              <Bag />
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
