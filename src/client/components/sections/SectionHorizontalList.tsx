"use client";

import Center from "@components/Center";
import SquareCard from "@components/card/SquareCard";
import IconCup from "@components/icons/IconCup";
import { useAnimationHoriozontalList } from "@hooks/useAnimationHoriozontalList";
import { useApiFetch } from "@hooks/useApiFetch";
import CoffeeService from "@services/CoffeeService";
import { TCoffee } from "@shared/types";
import { motion } from "framer-motion";

export default function SectionHorizontalList() {
  const { horizontalRef, x } = useAnimationHoriozontalList();
  const service = new CoffeeService();
  const { data, isLoading, error } = useApiFetch<TCoffee[]>({
    url: `${service.url}?filter=hot`,
  });

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

  if (data === null || data?.length === 0) {
    return (
      <Center>
        <h2>Nothing here</h2>
      </Center>
    );
  }

  return (
    <section ref={horizontalRef} className="relative h-[300vh] pt-12">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {data?.map((card, index) => (
            <SquareCard key={index} url={card.image} name={card.title} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
