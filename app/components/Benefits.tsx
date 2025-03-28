"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Heart from "@/public/Heart";
import Natural from "@/public/Natural";
import Stress from "@/public/Stress";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const Benefits = () => {
  const noteRef = useRef(null);
  const isInView = useInView(noteRef, { once: true, margin: "-50px" });

  return (
    <section className="w-full mt-12 lg:mt-22">
      <h3 className="flex justify-center text-lg text-center sm:text-xl lg:text-2xl font-semibold">
        Your journey to restful <br className="flex sm:hidden" /> sleep starts
        here 😴
      </h3>
      <div className="grid sm:grid-cols-2 gap-4 mt-5">
        <div className="image-container">
          <Image
            src="/benefits.png"
            alt="benefits"
            fill
            className="object-contain pt-3"
          />
        </div>
      </div>
      <div className="hidden sm:grid grid-cols-2 items-center mt-12">
        <div className="h-[400px] relative">
          <Image
            src="/SLEEP_BOTTOM.svg"
            alt="benefits"
            fill
            className="object-cover p-1 bg-stone-200 border-6 border-violet-400 rounded"
          />
        </div>

        <div className="ml-12">
          <div className="flex flex-col gap-6">
            <div className="flex gap-3.5">
              <Natural width={40} height={40} scale={12} />
              <div>
                <h4 className="text-lg lg:text-xl font-semibold">
                  Natural & Safe Formula
                </h4>
                <p className="text-sm lg:text-lg">
                  Clinically tested ingredients you can trust.
                </p>
              </div>
            </div>

            <div className="flex gap-3.5">
              <Heart width={40} height={40} scale={12} />
              <div>
                <h4 className="text-lg lg:text-xl font-semibold">
                  Supports Immune Health
                </h4>
                <p className="text-sm lg:text-lg">
                  Boost your body’s defenses while you rest.
                </p>
              </div>
            </div>

            <div className="flex gap-3.5">
              <Stress width={40} height={40} scale={12} />
              <div>
                <h4 className="text-lg lg:text-xl font-semibold">
                  Reduces Stress & Anxiety
                </h4>
                <p className="text-sm lg:text-lg">
                  Feel calm and relaxed with soothing Ashwagandha.
                </p>
              </div>
            </div>
          </div>

          <motion.div
            ref={noteRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-green-200/90 p-4 rounded mt-4"
          >
            <h6 className="text-green-900 text-sm lg:text-[16px] text-left font-medium">
              Note: This product should be taken as directed. Consult with a
              healthcare provider before use if pregnant, nursing, taking
              medications, or if you have a medical condition.
            </h6>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
