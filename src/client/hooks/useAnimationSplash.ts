import { useAnimation } from "framer-motion";
import { useEffect } from "react";

export const useAnimationSplash = (title: string) => {
  const textControls = useAnimation();
  const containerControls = useAnimation();

  useEffect(() => {
    const animateSplash = async () => {
      await textControls.start("step1");
      textControls.start("step2");
      await containerControls.start("hide");
      await containerControls.start("none");
    };

    animateSplash();
  }, [title]);

  const containerVariants = {
    initial: {
      clipPath: `inset(0% 0 0% 0)`,
    },
    hide: {
      clipPath: `inset(0% 0 100% 0)`,
      transition: { duration: 1, ease: [0.77, 0, 0.175, 1], delay: 0.2 },
    },
    none: {
      display: "none",
    },
  };

  const charVariants = {
    initial: (index: number) => ({
      y: index % 2 === 0 ? "80%" : "-80%",
      opacity: 0,
    }),
    step1: (delay: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: delay * 0.1,
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    }),
    step2: (delay: number) => ({
      y: 200,
      opacity: 0,
      transition: {
        delay: delay * 0.1,
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    }),
  };

  return { textControls, containerControls, containerVariants, charVariants };
};
