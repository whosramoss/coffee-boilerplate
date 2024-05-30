import { MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type AnimationParallaxImageProps = {
  imageRef: React.RefObject<HTMLDivElement>;
  scale: MotionValue<number>;
  opacity: MotionValue<number>;
};

export const useAnimationParallaxImage = (): AnimationParallaxImageProps => {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return { imageRef, scale, opacity };
};
