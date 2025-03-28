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
          <Link href="/contact">
            <button className="bg-violet-400 z-40 hover:bg-violet-400/90  text-white px-6 py-2 rounded-full font-semibold cursor-pointer">
              Get your Megneta for $99 ONLY!
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
        <div className="relative h-[300px] w-[300px]">
          <Image
            src="/product.png"
            fill
            alt="product_image"
            className="rotate-45 object-contain"
          />
        </div>
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
      <div className="flex sm:hidden justify-center items-center mt-12 space-x-4 p-4 bg-[#242424]">
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
                <Link href="/" className="hover:underline underline-offset-2">
                  Megneta 8-in-1
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline underline-offset-2">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline underline-offset-2">
                  Ingredients
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline underline-offset-2">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline underline-offset-2">
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
                  href="tel:+123456789"
                  className="hover:underline underline-offset-2"
                >
                  Phone Support
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline underline-offset-2">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-semibold">Resources</span>
            <ul className="mt-4 space-y-1">
              <li>
                <Link href="/" className="hover:underline underline-offset-2">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline underline-offset-2">
                  Research & Studies
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline underline-offset-2">
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
