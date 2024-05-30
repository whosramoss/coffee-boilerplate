import { MutableRefObject, useRef } from "react";
import {
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

type ItemMouseMoveValues = {
  ref: MutableRefObject<HTMLAnchorElement | null>;
  top: MotionValue<string>;
  left: MotionValue<string>;
  handleMouseMove: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

export const useAnimationItemMouseMove = (): ItemMouseMoveValues => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    const rect = ref.current!.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return { ref, top, left, handleMouseMove };
};
