"use client";

import { useAnimationSplash } from "@hooks/useAnimationSplash";
import { motion } from "framer-motion";
import React from "react";

type SplashProps = {
  title: string;
};

export default function Splash({ title }: SplashProps) {
  const { textControls, containerControls, containerVariants, charVariants } =
    useAnimationSplash(title);

  return (
    <motion.div
      className="fixed inset-0 z-[99] flex cursor-none items-center justify-center overflow-hidden bg-third text-[#D8AE7E]"
      variants={containerVariants}
      initial={"initial"}
      animate={containerControls}
    >
      <div className="absolute flex w-[50vw] items-center justify-center text-[20vw] font-extrabold lowercase ">
        {title.split("").map((char, index) => (
          <motion.div
            key={index}
            custom={index}
            animate={textControls}
            variants={charVariants}
            initial={"initial"}
          >
            {char}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
