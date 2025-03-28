"use client";

import React from "react";
import Quotes from "@/public/Quotes";
import testimonials from "@/public/testimonials.json";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const directions = [
  { x: -50, y: 0 },
  { x: 0, y: 50 },
  { x: 50, y: 0 },
];

const Testimonial = () => {
  const { theme } = useTheme();

  return (
    <div className="mt-22">
      <h3 className="flex justify-center text-lg text-center sm:text-xl lg:text-2xl font-semibold">
        Trusted by individuals for deep, restful - healthy sleep 😍
      </h3>
      <div className="grid sm:grid-rows-2 gap-4 lg:gap-6 mt-8 lg:mt-12 px-4 lg:px-0">
        {[0, 1].map((row) => (
          <div key={row} className="grid sm:grid-cols-3 gap-4 lg:gap-6">
            {testimonials
              .slice(row * 3, row * 3 + 3)
              .map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, ...directions[idx] }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`flex gap-2 p-4 shadow-sm rounded ${
                    theme === "light"
                      ? "bg-stone-50"
                      : "bg-stone-900 text-gray-100"
                  }`}
                >
                  <div className="flex shrink-0">
                    <Quotes />{" "}
                  </div>
                  <div className="flex flex-col">
                    <h6>{testimonial.quote}</h6>
                    <em className="text-end mt-2">- {testimonial.author}</em>
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
