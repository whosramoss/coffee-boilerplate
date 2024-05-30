"use client";

import IconHeart from "@components/icons/IconHeart";
import IconOpen from "@components/icons/IconOpen";
import ImageOverlay from "@components/image/ImageOverlay";
import { cn } from "@shared/utils";
import { useState } from "react";

type ProductCoffeeCardProps = {
  coffeeName: string;
  coffeeImage: string;
  coffeeOptons: string[];
};

export default function ProductCoffeeCard({
  coffeeImage,
  coffeeName,
  coffeeOptons,
}: ProductCoffeeCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setisSelected] = useState(false);
  const textIngredients = coffeeOptons.join(", ");

  function handleSelected() {
    setisSelected((prev) => !prev);
  }

  return (
    <div
      className="relative flex w-full cursor-pointer flex-col gap-2 duration-[0.5s] ease-[ease-in-out] hover:opacity-[100] hover:transition-opacity"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleSelected}
    >
      <div
        className={cn(
          "item absolute bottom-0 left-0 z-30 hidden w-full items-start justify-between px-5 pb-5 opacity-0 transition-opacity duration-300 ease-in-out md:flex lg:px-5 lg:pb-5",
          { "opacity-100": isHovered },
        )}
      >
        <div>
          <h4 className="text-[14px] text-white lg:text-[30px]">
            {coffeeName}
          </h4>
          <h4 className="inline text-[14px] text-white lg:text-[18px]">
            {textIngredients}
          </h4>
        </div>

        <div
          className={cn(
            "flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-black transition-transform duration-300 lg:h-[50px] lg:w-[50px]",
            { "bg-white": !isSelected },
          )}
          style={{
            transform: isHovered ? "translate(0)" : "translate(-20px, 20px)",
          }}
        >
          {isSelected ? <IconHeart /> : <IconOpen />}
        </div>
      </div>
      <ImageOverlay isHovered={isHovered} image={coffeeImage} />
      <div className="flex justify-between text-[14px] md:hidden">
        <p className="text-primary dark:text-white">{coffeeName}</p>
      </div>
      <div className="flex justify-between text-[14px] md:hidden">
        <p className="block text-primary dark:text-white"> {textIngredients}</p>
      </div>
    </div>
  );
}
