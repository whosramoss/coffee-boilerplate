"use client";

import React from "react";
import { motion } from "framer-motion";
import { useAnimationFadeIn } from "@hooks/useAnimationFadeIn";
import { useTheme } from "next-themes";
import { ThemeEnum } from "@shared/enums";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const { animateRef, animate, initial } = useAnimationFadeIn(0.1);

  const variants = {
    hidden: { opacity: 0, y: `4em` },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        delay: 0.8,
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  function handleTheme(e: any) {
    e.preventDefault();
    if (theme === ThemeEnum.system) {
      setTheme(ThemeEnum.light);
    } else {
      setTheme(theme === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light);
    }
  }

  return (
    <motion.div
      className="fixed bottom-5 left-[50%] z-50 mx-auto translate-x-[-50%]"
      ref={animateRef}
    >
      <motion.button
        className="inline-flex h-[40px] w-[93px] cursor-pointer items-center justify-center gap-3 rounded-full bg-primary px-2 text-center text-[12px] font-semibold text-white dark:bg-primary md:bottom-[30px]"
        initial={initial}
        animate={animate}
        variants={variants}
        onClick={handleTheme}
      >
        Switch Theme
      </motion.button>
    </motion.div>
  );
}
