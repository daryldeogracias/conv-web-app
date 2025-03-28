"use client";

import React from "react";
import { motion } from "framer-motion";

const Headline = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold sm:leading-8 lg:leading-10 xl:leading-12"
    >
      Sleep deeper and wake up refreshed with{" "}
      <span className="text-violet-500">Megneta 8-in-1</span>.{" "}
      <span className="text-violet-500">Natural</span>, non-groggy support for
      better rest—starting tonight!
    </motion.h1>
  );
};

export default Headline;
