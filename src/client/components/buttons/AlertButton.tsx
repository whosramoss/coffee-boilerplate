"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAnimationFadeIn } from "@hooks/useAnimationFadeIn";
import Alert, { AlertActionProps } from "@components/alert/Alert";

type AlertProps = {
  title: string;
  alertTitle: string;
  alertDescription: string;
  alertActions: AlertActionProps[];
};

export default function AlertButton({
  title,
  alertTitle,
  alertDescription,
  alertActions,
}: AlertProps) {
  const { animateRef, animate, initial } = useAnimationFadeIn(0.1);
  const [isOpen, setIsOpen] = useState(false);

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

  function handleAlert(e: any) {
    e.preventDefault();
    setIsOpen(true);
  }

  return (
    <>
      <motion.div
        className="fixed left-[95%] top-5 z-50 mx-auto flex max-w-[280px] translate-x-[-50%] gap-[4px] rounded-full bg-third px-1 py-1 text-[14px] backdrop-blur-lg dark:bg-primary lg:top-8 lg:max-w-[300px] "
        ref={animateRef}
      >
        <motion.button
          className="inline-flex h-[40px] w-[40px] cursor-pointer items-center justify-center gap-3 rounded-full  bg-primary px-2 text-center text-[12px] font-semibold text-white dark:bg-third md:bottom-[30px]"
          initial={initial}
          animate={animate}
          variants={variants}
          onClick={handleAlert}
        >
          {title}
        </motion.button>
      </motion.div>
      <Alert
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        alertTitle={alertTitle}
        alertDescription={alertDescription}
        alertActions={alertActions}
      />
    </>
  );
}
