import { MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type AnimationHoriozontalListValue = {
  horizontalRef: React.RefObject<HTMLDivElement>;
  scrollYProgress: MotionValue<number>;
  x: MotionValue<string>;
};

export const useAnimationHoriozontalList =
  (): AnimationHoriozontalListValue => {
    const horizontalRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
      target: horizontalRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return { horizontalRef, scrollYProgress, x };
  };
