"use client";

import { useAnimationTextScroll } from "@hooks/useAnimationTextScroll";
import { motion } from "framer-motion";

export default function ParallaxScrollText() {
  const { textRef, y, opacity } = useAnimationTextScroll();

  return (
    <motion.div
      ref={textRef}
      style={{ y, opacity }}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        Coffee Boilerplate
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">
        The fuel that ignites your code
      </p>
    </motion.div>
  );
}
