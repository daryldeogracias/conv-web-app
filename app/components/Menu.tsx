"use client";

import React, { useState } from "react";
import X from "@/public/X";
import Burger from "@/public/Buger";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [logo, setLogo] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setLogo(false);

    setTimeout(() => {
      setLogo(true);
    }, 500);
  };

  const handleClose = () => {
    setOpen(false);
    setLogo(false);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="flex items-center cursor-pointer  gap-1 sm:hidden dark:text-white text-sm relative"
      >
        <Burger />
        <p>Menu</p>
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-full bg-neutral-900 text-white z-40 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <button
            onClick={handleClose}
            className="flex items-center cursor-pointer text-right ml-auto text-sm"
          >
            Close <X />
          </button>
          <div className="flex flex-col gap-2 mt-8 text-xl">
            <p>Reviews</p>
            <p>Testimonials</p>
            <p>Benefits</p>
            <p>Checkout {"->"}</p>
          </div>
        </div>
        <div
          className={`flex justify-end p-10 mt-40 text-8xl text-green-400 transition-opacity duration-700 ${
            logo ? "opacity-40" : "opacity-0"
          }`}
        >
          X//
        </div>
        <div className="fixed bottom-0 left-0 w-full underline underline-offset-1 bg-linear-to-bl from-violet-400 to-violet-500 bg-opacity-10 px-3 py-1 text-xs text-center font-semibold text-slate-100 cursor-pointer">
          Get Megneta 8-in-1 Sleep Supplement for 35% Off! 😱
        </div>
      </div>
    </>
  );
};

export default Menu;
