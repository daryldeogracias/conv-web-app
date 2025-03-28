"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="relative bg-black rounded-t-4xl text-white">
      <div className="h-full mb-4 sm:my-33 mt-12 md:mt-44 px-6 md:px-16 lg:px-40">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center text-[38px] md:text-[56px] text-white font-semibold pt-12"
        >
          Your{" "}
          <span className="underline decoration-violet-400">best sleep</span>{" "}
          starts now.
        </motion.h2>
        <div className="flex justify-center mt-12">
          <Link href="/https://www.temu.com/megneta--8-in-1-all--aid-supplement-for-adults-with-plus-ashwagandha-l-theanine-----sleeping-60-capsules-g-601099703179468.html?_oak_name_id=3139139780460737376&_oak_mp_inf=EMyxofKm1ogBGiBlN2Y2ZGQwMDgxY2Y0YjcxYjliNmM1Y2U3NjgyZjlkMCDRkMuh3DI%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Ffa12c091-18a3-4551-a0fd-27adb308802b.jpg&spec_gallery_id=601099703179468&refer_page_sn=10009&refer_source=0&freesia_scene=2&_oak_freesia_scene=2&_oak_rec_ext_1=ODIy&_oak_gallery_order=1711245405%2C1397490236%2C1781268706%2C1834789939%2C1015085479&search_key=Megneta%208-in-1%20Sleep%20Supplement&refer_page_el_sn=200049&_x_sessn_id=ngbefkw5fo&refer_page_name=search_result&refer_page_id=10009_1742753417652_hheuq958l6">
            <button className="bg-violet-500 z-40 hover:bg-violet-500/90  text-white px-6 py-2 rounded-full font-semibold cursor-pointer">
              Get your Megneta for $49 ONLY!
            </button>
          </Link>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex justify-center overflow-hidden sm:hidden"
      >
        <Link href="/https://www.temu.com/megneta--8-in-1-all--aid-supplement-for-adults-with-plus-ashwagandha-l-theanine-----sleeping-60-capsules-g-601099703179468.html?_oak_name_id=3139139780460737376&_oak_mp_inf=EMyxofKm1ogBGiBlN2Y2ZGQwMDgxY2Y0YjcxYjliNmM1Y2U3NjgyZjlkMCDRkMuh3DI%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Ffa12c091-18a3-4551-a0fd-27adb308802b.jpg&spec_gallery_id=601099703179468&refer_page_sn=10009&refer_source=0&freesia_scene=2&_oak_freesia_scene=2&_oak_rec_ext_1=ODIy&_oak_gallery_order=1711245405%2C1397490236%2C1781268706%2C1834789939%2C1015085479&search_key=Megneta%208-in-1%20Sleep%20Supplement&refer_page_el_sn=200049&_x_sessn_id=ngbefkw5fo&refer_page_name=search_result&refer_page_id=10009_1742753417652_hheuq958l6">
          <div className="relative h-[300px] w-[300px]">
            <Image
              src="/product.png"
              fill
              alt="product_image"
              className="rotate-45 object-contain"
            />
          </div>
        </Link>
      </motion.div>
      <div className="hidden sm:absolute inset-0 sm:flex justify-center items-center xl:justify-end xl:items-start xl:top-20 xl:right-16 opacity-10 xl:opacity-100 pointer-events-none z-0">
        <div className="relative h-[500px] w-[500px] xl:h-[300px] xl:w-[300px]">
          <Image
            src="/product.png"
            fill
            alt="product_image"
            className="rotate-45 object-contain"
          />
        </div>
      </div>
      <div className="flex sm:hidden justify-center items-center mt-12 space-x-4 p-4 bg-[#0c0c0c]">
        <p className="font-medium text-green-400 text-sm">X//</p>
        <div className="text-stone-400 text-xs">©️ 2024 Megneta</div>
      </div>

      <div className="hidden sm:flex flex-col justify-center lg:justify-between md:flex-row md:space-x-36 w-full px-6 md:px-16 lg:px-40 h-[400px]">
        <div className="sm:w-[16%] text-sm">
          <p className="font-medium text-green-400 text-lg mb-6">X//</p>
          <span className="">Follow us</span>
          <div className="flex gap-3 mt-2 font-semibold">
            <Link href="/" className="hover:underline underline-offset-2">
              LinkedIn
            </Link>
            <Link href="/" className="hover:underline underline-offset-2">
              Twitter
            </Link>
            <Link href="/" className="hover:underline underline-offset-2">
              GitHub
            </Link>
            <Link href="/" className="hover:underline underline-offset-2">
              Reddit
            </Link>
          </div>
          <div className=" mt-3">©️ 2024 Megneta</div>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 sm:w-[84%] mt-12 md:mt-2">
          <div>
            <span className="font-semibold">Products</span>
            <ul className="mt-4 space-y-1">
              <li>
                <Link
                  href="https://www.temu.com/megneta--8-in-1-all--aid-supplement-for-adults-with-plus-ashwagandha-l-theanine-----sleeping-60-capsules-g-601099703179468.html?_oak_name_id=3139139780460737376&_oak_mp_inf=EMyxofKm1ogBGiBlN2Y2ZGQwMDgxY2Y0YjcxYjliNmM1Y2U3NjgyZjlkMCDRkMuh3DI%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Ffa12c091-18a3-4551-a0fd-27adb308802b.jpg&spec_gallery_id=601099703179468&refer_page_sn=10009&refer_source=0&freesia_scene=2&_oak_freesia_scene=2&_oak_rec_ext_1=ODIy&_oak_gallery_order=1711245405%2C1397490236%2C1781268706%2C1834789939%2C1015085479&search_key=Megneta%208-in-1%20Sleep%20Supplement&refer_page_el_sn=200049&_x_sessn_id=ngbefkw5fo&refer_page_name=search_result&refer_page_id=10009_1742753417652_hheuq958l6"
                  className="hover:underline underline-offset-2"
                >
                  Megneta 8-in-1
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.temu.com/megneta--8-in-1-all--aid-supplement-for-adults-with-plus-ashwagandha-l-theanine-----sleeping-60-capsules-g-601099703179468.html?_oak_name_id=3139139780460737376&_oak_mp_inf=EMyxofKm1ogBGiBlN2Y2ZGQwMDgxY2Y0YjcxYjliNmM1Y2U3NjgyZjlkMCDRkMuh3DI%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Ffa12c091-18a3-4551-a0fd-27adb308802b.jpg&spec_gallery_id=601099703179468&refer_page_sn=10009&refer_source=0&freesia_scene=2&_oak_freesia_scene=2&_oak_rec_ext_1=ODIy&_oak_gallery_order=1711245405%2C1397490236%2C1781268706%2C1834789939%2C1015085479&search_key=Megneta%208-in-1%20Sleep%20Supplement&refer_page_el_sn=200049&_x_sessn_id=ngbefkw5fo&refer_page_name=search_result&refer_page_id=10009_1742753417652_hheuq958l6"
                  className="hover:underline underline-offset-2"
                >
                  Benefits
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.temu.com/megneta--8-in-1-all--aid-supplement-for-adults-with-plus-ashwagandha-l-theanine-----sleeping-60-capsules-g-601099703179468.html?_oak_name_id=3139139780460737376&_oak_mp_inf=EMyxofKm1ogBGiBlN2Y2ZGQwMDgxY2Y0YjcxYjliNmM1Y2U3NjgyZjlkMCDRkMuh3DI%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Ffa12c091-18a3-4551-a0fd-27adb308802b.jpg&spec_gallery_id=601099703179468&refer_page_sn=10009&refer_source=0&freesia_scene=2&_oak_freesia_scene=2&_oak_rec_ext_1=ODIy&_oak_gallery_order=1711245405%2C1397490236%2C1781268706%2C1834789939%2C1015085479&search_key=Megneta%208-in-1%20Sleep%20Supplement&refer_page_el_sn=200049&_x_sessn_id=ngbefkw5fo&refer_page_name=search_result&refer_page_id=10009_1742753417652_hheuq958l6"
                  className="hover:underline underline-offset-2"
                >
                  Ingredients
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.temu.com/megneta--8-in-1-all--aid-supplement-for-adults-with-plus-ashwagandha-l-theanine-----sleeping-60-capsules-g-601099703179468.html?_oak_name_id=3139139780460737376&_oak_mp_inf=EMyxofKm1ogBGiBlN2Y2ZGQwMDgxY2Y0YjcxYjliNmM1Y2U3NjgyZjlkMCDRkMuh3DI%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Ffa12c091-18a3-4551-a0fd-27adb308802b.jpg&spec_gallery_id=601099703179468&refer_page_sn=10009&refer_source=0&freesia_scene=2&_oak_freesia_scene=2&_oak_rec_ext_1=ODIy&_oak_gallery_order=1711245405%2C1397490236%2C1781268706%2C1834789939%2C1015085479&search_key=Megneta%208-in-1%20Sleep%20Supplement&refer_page_el_sn=200049&_x_sessn_id=ngbefkw5fo&refer_page_name=search_result&refer_page_id=10009_1742753417652_hheuq958l6"
                  className="hover:underline underline-offset-2"
                >
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.temu.com/megneta--8-in-1-all--aid-supplement-for-adults-with-plus-ashwagandha-l-theanine-----sleeping-60-capsules-g-601099703179468.html?_oak_name_id=3139139780460737376&_oak_mp_inf=EMyxofKm1ogBGiBlN2Y2ZGQwMDgxY2Y0YjcxYjliNmM1Y2U3NjgyZjlkMCDRkMuh3DI%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Ffa12c091-18a3-4551-a0fd-27adb308802b.jpg&spec_gallery_id=601099703179468&refer_page_sn=10009&refer_source=0&freesia_scene=2&_oak_freesia_scene=2&_oak_rec_ext_1=ODIy&_oak_gallery_order=1711245405%2C1397490236%2C1781268706%2C1834789939%2C1015085479&search_key=Megneta%208-in-1%20Sleep%20Supplement&refer_page_el_sn=200049&_x_sessn_id=ngbefkw5fo&refer_page_name=search_result&refer_page_id=10009_1742753417652_hheuq958l6"
                  className="hover:underline underline-offset-2"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-semibold ">Support</span>
            <ul className="mt-4 space-y-1">
              <li>
                <Link
                  href="mailto:support@megneta.com"
                  className="hover:underline underline-offset-2"
                >
                  Email Support
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.temu.com/megneta--8-in-1-all--aid-supplement-for-adults-with-plus-ashwagandha-l-theanine-----sleeping-60-capsules-g-601099703179468.html?_oak_name_id=3139139780460737376&_oak_mp_inf=EMyxofKm1ogBGiBlN2Y2ZGQwMDgxY2Y0YjcxYjliNmM1Y2U3NjgyZjlkMCDRkMuh3DI%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Ffa12c091-18a3-4551-a0fd-27adb308802b.jpg&spec_gallery_id=601099703179468&refer_page_sn=10009&refer_source=0&freesia_scene=2&_oak_freesia_scene=2&_oak_rec_ext_1=ODIy&_oak_gallery_order=1711245405%2C1397490236%2C1781268706%2C1834789939%2C1015085479&search_key=Megneta%208-in-1%20Sleep%20Supplement&refer_page_el_sn=200049&_x_sessn_id=ngbefkw5fo&refer_page_name=search_result&refer_page_id=10009_1742753417652_hheuq958l6"
                  className="hover:underline underline-offset-2"
                >
                  Phone Support
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.temu.com/megneta--8-in-1-all--aid-supplement-for-adults-with-plus-ashwagandha-l-theanine-----sleeping-60-capsules-g-601099703179468.html?_oak_name_id=3139139780460737376&_oak_mp_inf=EMyxofKm1ogBGiBlN2Y2ZGQwMDgxY2Y0YjcxYjliNmM1Y2U3NjgyZjlkMCDRkMuh3DI%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Ffa12c091-18a3-4551-a0fd-27adb308802b.jpg&spec_gallery_id=601099703179468&refer_page_sn=10009&refer_source=0&freesia_scene=2&_oak_freesia_scene=2&_oak_rec_ext_1=ODIy&_oak_gallery_order=1711245405%2C1397490236%2C1781268706%2C1834789939%2C1015085479&search_key=Megneta%208-in-1%20Sleep%20Supplement&refer_page_el_sn=200049&_x_sessn_id=ngbefkw5fo&refer_page_name=search_result&refer_page_id=10009_1742753417652_hheuq958l6"
                  className="hover:underline underline-offset-2"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-semibold">Resources</span>
            <ul className="mt-4 space-y-1">
              <li>
                <Link
                  href="https://www.temu.com/megneta--8-in-1-all--aid-supplement-for-adults-with-plus-ashwagandha-l-theanine-----sleeping-60-capsules-g-601099703179468.html?_oak_name_id=3139139780460737376&_oak_mp_inf=EMyxofKm1ogBGiBlN2Y2ZGQwMDgxY2Y0YjcxYjliNmM1Y2U3NjgyZjlkMCDRkMuh3DI%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Ffa12c091-18a3-4551-a0fd-27adb308802b.jpg&spec_gallery_id=601099703179468&refer_page_sn=10009&refer_source=0&freesia_scene=2&_oak_freesia_scene=2&_oak_rec_ext_1=ODIy&_oak_gallery_order=1711245405%2C1397490236%2C1781268706%2C1834789939%2C1015085479&search_key=Megneta%208-in-1%20Sleep%20Supplement&refer_page_el_sn=200049&_x_sessn_id=ngbefkw5fo&refer_page_name=search_result&refer_page_id=10009_1742753417652_hheuq958l6"
                  className="hover:underline underline-offset-2"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.temu.com/megneta--8-in-1-all--aid-supplement-for-adults-with-plus-ashwagandha-l-theanine-----sleeping-60-capsules-g-601099703179468.html?_oak_name_id=3139139780460737376&_oak_mp_inf=EMyxofKm1ogBGiBlN2Y2ZGQwMDgxY2Y0YjcxYjliNmM1Y2U3NjgyZjlkMCDRkMuh3DI%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Ffa12c091-18a3-4551-a0fd-27adb308802b.jpg&spec_gallery_id=601099703179468&refer_page_sn=10009&refer_source=0&freesia_scene=2&_oak_freesia_scene=2&_oak_rec_ext_1=ODIy&_oak_gallery_order=1711245405%2C1397490236%2C1781268706%2C1834789939%2C1015085479&search_key=Megneta%208-in-1%20Sleep%20Supplement&refer_page_el_sn=200049&_x_sessn_id=ngbefkw5fo&refer_page_name=search_result&refer_page_id=10009_1742753417652_hheuq958l6"
                  className="hover:underline underline-offset-2"
                >
                  Research & Studies
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.temu.com/megneta--8-in-1-all--aid-supplement-for-adults-with-plus-ashwagandha-l-theanine-----sleeping-60-capsules-g-601099703179468.html?_oak_name_id=3139139780460737376&_oak_mp_inf=EMyxofKm1ogBGiBlN2Y2ZGQwMDgxY2Y0YjcxYjliNmM1Y2U3NjgyZjlkMCDRkMuh3DI%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Ffa12c091-18a3-4551-a0fd-27adb308802b.jpg&spec_gallery_id=601099703179468&refer_page_sn=10009&refer_source=0&freesia_scene=2&_oak_freesia_scene=2&_oak_rec_ext_1=ODIy&_oak_gallery_order=1711245405%2C1397490236%2C1781268706%2C1834789939%2C1015085479&search_key=Megneta%208-in-1%20Sleep%20Supplement&refer_page_el_sn=200049&_x_sessn_id=ngbefkw5fo&refer_page_name=search_result&refer_page_id=10009_1742753417652_hheuq958l6"
                  className="hover:underline underline-offset-2"
                >
                  Sleep Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
