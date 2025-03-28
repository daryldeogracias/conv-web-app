"use client";

import React from "react";
import Image from "next/image";
import Star from "@/public/Star";
import testimonials from "@/public/testimonials.json";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const directions = [
  { x: -30, y: 0 },
  { x: 0, y: 30 },
  { x: 30, y: 0 },
];

const Testimonial = () => {
  const { theme } = useTheme();

  return (
    <div className="mt-18 lg:mt-22" id="testimonials">
      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center">
        Trusted by individuals for deep, restful, healthy sleep 😍
      </h3>
      <div className="grid gap-4 lg:gap-6 mt-8 lg:mt-12 px-4 lg:px-0">
        {[0, 1, 2].map((row) => (
          <div key={row} className="grid sm:grid-cols-3 gap-4 lg:gap-6">
            {testimonials
              .slice(row * 3, row * 3 + 3)
              .map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{
                    opacity: 0,
                    ...directions[idx % directions.length],
                  }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  style={{
                    boxShadow:
                      "rgba(14, 63, 126, 0.06) 0px 0px 0px 1px, rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 2px 2px -1px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px, rgba(42, 51, 70, 0.03) 0px 10px 10px -5px, rgba(42, 51, 70, 0.03) 0px 24px 24px -8px",
                  }}
                  className={`relative flex items-start gap-2 p-4 lg:p-6  rounded ${
                    theme === "light" ? "" : "bg-stone-900 text-gray-100"
                  }`}
                >
                  <div className="flex-shrink-0 h-[34px] w-[34px]">
                    <Image
                      src="/profile.png"
                      alt="profile"
                      width={34}
                      height={34}
                      className="object-cover rounded-full brightness-80"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h6>{testimonial.quote}</h6>
                    <em className="text-end mt-2">- {testimonial.author}</em>
                  </div>
                  <div className="absolute bottom-4 left-6 flex gap-0.5">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                </motion.div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
