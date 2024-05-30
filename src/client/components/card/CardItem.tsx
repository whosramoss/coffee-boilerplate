import { useAnimationItemMouseMove } from "@hooks/useAnimationItemMouseMove";
import { motion } from "framer-motion";
import React from "react";

type CardItemProps = {
  title: string;
  image: string;
  description: string;
};

export const CardItem = ({ title, image, description }: CardItemProps) => {
  const { ref, left, top, handleMouseMove } = useAnimationItemMouseMove();

  return (
    <motion.a
      href={"/"}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-third py-4 transition-colors duration-500  md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-primary transition-colors duration-500 group-hover:text-secondary dark:text-third md:text-6xl"
        >
          {title.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base  text-primary transition-colors duration-500 group-hover:text-secondary dark:text-third">
          {description}
        </span>
      </div>

      <motion.img
        style={{ top, left, translateX: "-50%", translateY: "-50%" }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={image}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`image ${title}`}
      />

      <motion.div
        variants={{
          initial: { x: "25%", opacity: 0 },
          whileHover: { x: "0%", opacity: 1 },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      ></motion.div>
    </motion.a>
  );
};
