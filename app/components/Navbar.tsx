"use client";

import React from "react";
import Mode from "./Mode";
import Menu from "./Menu";
import Bag from "@/public/Bag";
import Link from "next/link";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="fixed top-0 left-0 w-full border-b border-stone-800 z-50 bg-white dark:bg-black">
        <Link
          href="https://www.temu.com/megneta--8-in-1-all--aid-supplement-for-adults-with-plus-ashwagandha-l-theanine-----sleeping-60-capsules-g-601099703179468.html?_oak_name_id=3139139780460737376&_oak_mp_inf=EMyxofKm1ogBGiBlN2Y2ZGQwMDgxY2Y0YjcxYjliNmM1Y2U3NjgyZjlkMCDRkMuh3DI%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Ffa12c091-18a3-4551-a0fd-27adb308802b.jpg&spec_gallery_id=601099703179468&refer_page_sn=10009&refer_source=0&freesia_scene=2&_oak_freesia_scene=2&_oak_rec_ext_1=ODIy&_oak_gallery_order=1711245405%2C1397490236%2C1781268706%2C1834789939%2C1015085479&search_key=Megneta%208-in-1%20Sleep%20Supplement&refer_page_el_sn=200049&_x_sessn_id=ngbefkw5fo&refer_page_name=search_result&refer_page_id=10009_1742753417652_hheuq958l6"
          className="flex justify-center w-full bg-linear-to-bl from-violet-400 to-violet-500 underline underline-offset-1 bg-opacity-10 px-3 py-1 text-xs sm:text-sm lg:text-[16px] text-center font-semibold text-slate-100 cursor-pointer"
        >
          Get Megneta 8-in-1 Sleep Supplement for 50% Off! 😱
        </Link>
        <div className="flex items-center justify-between px-4 sm:px-6 xl:px-0 max-w-[1200px] mx-auto py-3 sm:py-4">
          <div className="flex items-center gap-3">
            <p className="font-medium text-green-400 text-sm sm:text-lg">X//</p>
            <div className="flex sm:hidden text-stone-400 font-thin">|</div>
            <Menu />
          </div>
          <div className="hidden sm:flex items-center gap-4 lg:gap-6 text-black dark:text-white sm:text-sm lg:text-[16px]">
            <Link
              href="https://www.temu.com/megneta--8-in-1-all--aid-supplement-for-adults-with-plus-ashwagandha-l-theanine-----sleeping-60-capsules-g-601099703179468.html?_oak_name_id=3139139780460737376&_oak_mp_inf=EMyxofKm1ogBGiBlN2Y2ZGQwMDgxY2Y0YjcxYjliNmM1Y2U3NjgyZjlkMCDRkMuh3DI%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Ffa12c091-18a3-4551-a0fd-27adb308802b.jpg&spec_gallery_id=601099703179468&refer_page_sn=10009&refer_source=0&freesia_scene=2&_oak_freesia_scene=2&_oak_rec_ext_1=ODIy&_oak_gallery_order=1711245405%2C1397490236%2C1781268706%2C1834789939%2C1015085479&search_key=Megneta%208-in-1%20Sleep%20Supplement&refer_page_el_sn=200049&_x_sessn_id=ngbefkw5fo&refer_page_name=search_result&refer_page_id=10009_1742753417652_hheuq958l6"
              className="cursor-pointer hover:underline underline-offset-2"
            >
              Reviews
            </Link>
            <Link
              href="/#testimonials"
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("testimonials")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="cursor-pointer hover:underline underline-offset-2"
            >
              Testimonials
            </Link>
            <Link
              href="/#benefits"
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("benefits")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="cursor-pointer hover:underline underline-offset-2"
            >
              Benefits
            </Link>
            <Link
              href="https://www.temu.com/megneta--8-in-1-all--aid-supplement-for-adults-with-plus-ashwagandha-l-theanine-----sleeping-60-capsules-g-601099703179468.html?_oak_name_id=3139139780460737376&_oak_mp_inf=EMyxofKm1ogBGiBlN2Y2ZGQwMDgxY2Y0YjcxYjliNmM1Y2U3NjgyZjlkMCDRkMuh3DI%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Ffa12c091-18a3-4551-a0fd-27adb308802b.jpg&spec_gallery_id=601099703179468&refer_page_sn=10009&refer_source=0&freesia_scene=2&_oak_freesia_scene=2&_oak_rec_ext_1=ODIy&_oak_gallery_order=1711245405%2C1397490236%2C1781268706%2C1834789939%2C1015085479&search_key=Megneta%208-in-1%20Sleep%20Supplement&refer_page_el_sn=200049&_x_sessn_id=ngbefkw5fo&refer_page_name=search_result&refer_page_id=10009_1742753417652_hheuq958l6"
              className="flex items-center gap-2 cursor-pointer hover:underline underline-offset-2"
            >
              <div>Checkout</div>
              <Bag />
            </Link>
          </div>
          <Mode />
        </div>
      </div>
      <div className="h-[100px]" />
    </React.Fragment>
  );
};

export default Navbar;
