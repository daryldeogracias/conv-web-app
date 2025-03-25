import React from "react";
import Image from "next/image";
import Truck from "@/public/Truck";

const Home = () => {
  return (
    <div className="h-full">
      <section className="grid grid-cols-2 items-center mt-12 lg:mx-6 xl:mx-0">
        <div>
          <div className="p-1 px-2 mt-6 text-center text-xs text-violet-800 font-medium  bg-violet-800/10 dark:text-violet-400 dark:bg-violet-500/30 mb-2 max-w-max rounded-full">
            🩺 clinically reviewed formula
          </div>
          <h1 className="text-4xl font-bold leading-12">
            Sleep deeper and wake up refreshed with{" "}
            <span className="text-violet-500">Megneta 8-in-1</span>.{" "}
            <span className="text-violet-500">Natural</span> , non-groggy
            support for better rest—starting tonight!
          </h1>
          <div className="flex flex-col w-full justify-start mt-8">
            <div className="flex items-center gap-2 text-lg font-medium">
              <Truck width={40} height={40} />
              <p className="cursor-pointer hover:underline underline-offset-1">
                Free shippping guaranteed{" "}
                <span className="text-green-500">
                  {"(only 12 left for this offer)"}
                </span>{" "}
                {"->"}
              </p>
            </div>
            <div className="relative h-6 w-62 ml-8">
              <Image
                src="/payments.png"
                alt="supported payments method"
                fill
                loading="lazy"
                className="object-contain flex justify-start"
              />
            </div>
            <div className="flex flex-col">
              <div className="p-1 px-2 mt-6 ml-2 text-start text-[10px]">
                certified product by:
              </div>
              <div className="flex w-full items-center">
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
          <div className="h-120 w-120 relative">
            <Image
              src="/product.png"
              alt="Megneta 8-in-1 Sleep Supplement"
              fill
              loading="lazy"
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
