"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="flex justify-end"
  >
    <div className="h-[360px] w-[360px] sm:h-80 sm:w-80 lg:h-100 lg:w-100 xl:h-120 xl:w-120 relative">
      <Image
        src="/Megneta 8-in-1 Sleep Supplement.png"
        alt="Megneta 8-in-1 Sleep Supplement"
        fill
        loading="lazy"
        className="object-contain"
      />
    </div>
  </motion.div>
);

export default Hero;
