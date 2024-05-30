import { MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type AnimationTextScrollValues = {
  textRef: React.RefObject<HTMLDivElement>;
  y: MotionValue<number>;
  opacity: MotionValue<number>;
};

export const useAnimationTextScroll = (): AnimationTextScrollValues => {
  const textRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return { textRef, y, opacity };
};
