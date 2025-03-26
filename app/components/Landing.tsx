"use client";

import React from "react";
import Image from "next/image";
import Truck from "@/public/Truck";
import Bag from "@/public/Bag";
import { useTheme } from "next-themes";

const Landing = () => {
  const { theme } = useTheme();

  return (
    <section className="flex flex-col-reverse  lg:flex-none lg:grid lg:grid-cols-2 items-center lg:mt-12 mx-4 sm:mx-5 lg:mx-6 xl:mx-0">
      <div>
        <div
          className={`p-1 px-2 mt-6 text-center text-xs font-medium mb-2 max-w-max rounded-full
             ${
               theme === "light"
                 ? "text-violet-800 bg-violet-800/10"
                 : "text-violet-400 dark:bg-violet-500/30 "
             }
            `}
        >
          🩺 clinically reviewed formula
        </div>
        <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold sm:leading-8 lg:leading-10 xl:leading-12">
          Sleep deeper and wake up refreshed with{" "}
          <span className="text-violet-500">Megneta 8-in-1</span>.{" "}
          <span className="text-violet-500">Natural</span> , non-groggy support
          for better rest—starting tonight!
        </h1>
        <div className="flex w-full px-2 py-2 gap-2 justify-center mt-3 lg:hidden bg-violet-500 text-white rounded-md font-semibold">
          <p>Checkout</p>
          <Bag />
          <p>{"->"}</p>
        </div>
        <div className="flex flex-col w-full justify-start mt-6 lg:mt-8">
          <div className="flex items-center gap-3 lg:gap-2 text-xs sm:text-lg lg:text-lg font-medium">
            <Truck width={40} height={40} />
            <p className="w-full cursor-pointer hover:underline underline-offset-1">
              Free shipping guaranteed
              <span className="text-green-500 ml-1">
                (only 12 left for this offer)
              </span>
              <span className="hidden lg:inline ml-1">{"->"}</span>
            </p>
          </div>
          <div className="relative h-6 w-62 ml-8 lg:mt-0">
            <Image
              src="/payments.png"
              alt="supported payments method"
              fill
              loading="lazy"
              className="object-contain flex justify-start"
            />
          </div>
          <div className="flex flex-col w-full items-center lg:items-start">
            <div className="p-1 px-2 mt-6 ml-2 text-start text-[10px]">
              certified product by:
            </div>
            <div className="flex w-full items-center justify-center lg:justify-start">
              <div className="relative h-12 w-20">
                <Image
                  src="/who.png"
                  alt="supported payments method"
                  fill
                  loading="lazy"
                  className="object-contain flex justify-start grayscale"
                />
              </div>
              <div className="relative h-12 w-[80px]">
                <Image
                  src="/amazon.png"
                  alt="supported payments method"
                  fill
                  loading="lazy"
                  className="object-contain flex justify-start grayscale"
                />
              </div>
              <div className="relative h-12 w-[80px]">
                <Image
                  src="/temu.jpg"
                  alt="supported payments method"
                  fill
                  loading="lazy"
                  className="object-contain flex justify-start grayscale"
                />
              </div>
              <div className="relative h-12 w-[80px]">
                <Image
                  src="/google.png"
                  alt="supported payments method"
                  fill
                  loading="lazy"
                  className="object-contain flex justify-start grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="h-[360px] w-[360px] sm:h-80 sm:w-80 lg:h-100 lg:w-100 xl:h-120 xl:w-120 relative">
          <Image
            src="/Megneta 8-in-1 Sleep Supplement.png"
            alt="Megneta 8-in-1 Sleep Supplement"
            fill
            loading="lazy"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
