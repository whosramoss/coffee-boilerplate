"use client";

import React from "react";
import ProductCoffeeCard from "@components/card/ProductCoffeeCard";
import IconCup from "@components/icons/IconCup";
import ProductCoffeeService from "@services/ProductCoffeeService";
import Center from "@components/Center";
import { useAnimationFadeIn } from "@hooks/useAnimationFadeIn";
import { useApiFetch } from "@hooks/useApiFetch";
import { motion } from "framer-motion";
import { TProductCoffee } from "@shared/types";

export default function SectionProductsCoffeeList() {
  const service = new ProductCoffeeService();
  const { data, isLoading, error } = useApiFetch<TProductCoffee[]>({
    url: service.url,
  });

  const { animateRef, animate, initial } = useAnimationFadeIn(0.1);

  const variants = {
    hidden: { opacity: 0, y: `4em` },
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

  if (isLoading) {
    return (
      <Center>
        <IconCup />
      </Center>
    );
  }

  if (error) {
    return (
      <Center>
        <h2>Sorry, we're closed</h2>
      </Center>
    );
  }

  return (
    <motion.section
      className="flex flex-col items-center justify-center pb-[20px] pt-28 lg:pb-10 lg:pt-72"
      ref={animateRef}
    >
      <motion.div
        className="grid w-[92%] max-w-[1320px] grid-cols-1 grid-rows-12 place-content-center place-items-center gap-x-5 gap-y-7 md:grid-cols-3 md:grid-rows-6 md:gap-y-10"
        aria-hidden="true"
        initial={initial}
        animate={animate}
        variants={variants}
      >
        {data?.map((coffee, index) => (
          <ProductCoffeeCard
            key={index}
            coffeeName={coffee.name}
            coffeeImage={coffee.image_url}
            coffeeOptons={coffee.grind_option}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}
