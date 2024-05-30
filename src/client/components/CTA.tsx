"use client";

import React from "react";
import { motion } from "framer-motion";
import { useAnimationFadeIn } from "@hooks/useAnimationFadeIn";

export default function CTA() {
  const { animateRef, animate, initial } = useAnimationFadeIn();

  const contactVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: `2em` },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        delay: 0.5,
        duration: 1.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const subTitleVariants = {
    hidden: { opacity: 0, y: `2em` },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        delay: 0.55,
        duration: 1.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.section
      className="flex flex-col items-center justify-center pb-[114px] pt-[114px] text-[25px] font-bold md:pb-[67px] md:pt-[67px] md:text-[38px] lg:py-[144px]"
      ref={animateRef}
      initial={initial}
      animate={animate}
      variants={contactVariants}
    >
      <motion.h2
        variants={titleVariants}
        className="text-primary dark:text-secondary"
      >
        There are many options
      </motion.h2>
      <motion.h2
        className="hover:text-secondary/50 -mt-2 cursor-pointer text-secondary dark:text-third"
        variants={subTitleVariants}
      >
        Shall we have a coffee later?
      </motion.h2>
    </motion.section>
  );
}
