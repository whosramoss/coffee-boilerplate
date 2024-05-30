"use client";

import React from "react";
import { motion } from "framer-motion";
import { useAnimationParallaxImage } from "@hooks/useAnimationParallaxImage";
import ParallaxTextContext from "@components/parallax/ParallaxTextContext";
import ParallaxScrollText from "@components/parallax/ParallaxScrollText";

type ParallaxHeaderProps = {
  image: string;
};

export default function ParallaxHeader({ image }: ParallaxHeaderProps) {
  const padding = 20;
  const { imageRef, scale, opacity } = useAnimationParallaxImage();
  const style = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: `calc(100vh - ${padding * 2}px)`,
    top: padding,
    scale,
  };

  return (
    <div style={{ paddingLeft: padding, paddingRight: padding }}>
      <div className="relative h-[150vh]">
        <motion.div
          ref={imageRef}
          style={style}
          className="sticky z-0 overflow-hidden rounded-3xl"
        >
          <motion.div
            className="absolute inset-0 bg-neutral-950/70"
            style={{ opacity }}
          />
        </motion.div>
        <ParallaxScrollText />
      </div>
      <ParallaxTextContext />
    </div>
  );
}
