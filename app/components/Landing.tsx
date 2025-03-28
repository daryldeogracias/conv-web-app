"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Truck from "@/public/Truck";
import Bag from "@/public/Bag";
import Headline from "./Headline";
import Hero from "./Hero";
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
        <Headline />
        <div className="flex w-full px-2 py-2 gap-2 justify-center mt-3 lg:hidden bg-violet-500 text-white rounded-md font-semibold">
          <p>Checkout</p>
          <Bag />
          <p>{"->"}</p>
        </div>
        <div className="flex flex-col w-full justify-start mt-6 lg:mt-8">
          <div className="flex items-center gap-3 lg:gap-2 text-xs sm:text-lg lg:text-lg font-medium">
            <Truck width={40} height={40} />
            <Link
              href="https://www.temu.com/megneta--8-in-1-all--aid-supplement-for-adults-with-plus-ashwagandha-l-theanine-----sleeping-60-capsules-g-601099703179468.html?_oak_name_id=3139139780460737376&_oak_mp_inf=EMyxofKm1ogBGiBlN2Y2ZGQwMDgxY2Y0YjcxYjliNmM1Y2U3NjgyZjlkMCDRkMuh3DI%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Ffa12c091-18a3-4551-a0fd-27adb308802b.jpg&spec_gallery_id=601099703179468&refer_page_sn=10009&refer_source=0&freesia_scene=2&_oak_freesia_scene=2&_oak_rec_ext_1=ODIy&_oak_gallery_order=1711245405%2C1397490236%2C1781268706%2C1834789939%2C1015085479&search_key=Megneta%208-in-1%20Sleep%20Supplement&refer_page_el_sn=200049&_x_sessn_id=ngbefkw5fo&refer_page_name=search_result&refer_page_id=10009_1742753417652_hheuq958l6"
              className="w-full cursor-pointer hover:underline underline-offset-1"
            >
              Free shipping guaranteed
              <span className="text-green-500 ml-1">
                (only 12 left for this offer)
              </span>
              <span className="hidden lg:inline ml-1">{"->"}</span>
            </Link>
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
      <Hero />
    </section>
  );
};

export default Landing;
