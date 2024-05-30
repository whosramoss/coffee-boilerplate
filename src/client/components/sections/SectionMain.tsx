"use client";

import React from "react";
import { motion } from "framer-motion";
import { useAnimationFadeIn } from "@hooks/useAnimationFadeIn";

type SectionMainProps = {
  title: string;
  children?: React.ReactNode;
};

export default function SectionMain({ title, children }: SectionMainProps) {
  const { animateRef, animate, initial } = useAnimationFadeIn(0.1);

  const titleVariant = {
    hidden: { opacity: 0, y: `2em` },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        delay: 0,
        duration: 1.3,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, y: `6em` },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        delay: 0.25,
        duration: 1.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.section className="lg:pt-50 flex h-[50vh] flex-col items-center justify-center pt-[190px] md:h-[50vh]">
      <motion.div
        className="flex flex-col items-center justify-center gap-[40px]"
        aria-hidden="true"
        ref={animateRef}
        initial={initial}
        animate={animate}
      >
        <motion.h1
          className="z-30 w-[85%] text-center text-[36px] font-bold leading-[43.2px] tracking-[0.2px] text-primary dark:text-third md:w-[75%] md:max-w-[800px] md:text-[48px] md:leading-[57.6px] lg:max-w-[900px] lg:text-[72px] lg:leading-[86.4px]"
          variants={titleVariant}
        >
          {title}
        </motion.h1>
        <motion.div
          className="hidden gap-[10px] text-[14px] font-light md:flex"
          variants={tagVariants}
        >
          {" "}
          {children}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
