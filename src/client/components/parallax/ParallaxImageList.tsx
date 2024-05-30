"use client";
import React from "react";
import { TCoffee } from "@shared/types";
import CoffeeService from "@services/CoffeeService";
import Center from "@components/Center";
import IconCup from "@components/icons/IconCup";
import { useApiFetch } from "@hooks/useApiFetch";
import { useAnimationParallax } from "@hooks/useAnimationParallax";
import { PARALLAX_IMAGE_CLASS } from "@shared/meta";

export default function ParallaxImageList() {
  useAnimationParallax();

  const service = new CoffeeService();
  const { data, isLoading, error } = useApiFetch<TCoffee[]>({
    url: service.url,
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

  const parallaxList = setParallaxValues(data!);

  return (
    <section className="relative w-full">
      {parallaxList?.map((coffeeSample, index) => (
        <img
          key={index}
          className={`${PARALLAX_IMAGE_CLASS} ${coffeeSample.classImage} object-cover`}
          src={coffeeSample.image}
          data-u-speed={coffeeSample.speed}
          data-u-scale={coffeeSample.scale}
        />
      ))}
    </section>
  );
}

const setParallaxValues = (data: TCoffee[]) => {
  const lst = [
    {
      classImage: "parallax-img-size-1 parallax-img-position-l rounded-[30px]",
      speed: "1.3",
    },
    {
      classImage: "parallax-img-size-2 parallax-img-position-r rounded-[30px]",
    },
    {
      classImage: "parallax-img-size-1 parallax-img-position-l rounded-[30px]",
    },
    { classImage: "parallax-img-size-full" },
    {
      classImage: "parallax-img-size-1 parallax-img-position-r rounded-[30px]",
    },
    {
      classImage:
        "parallax-img-size-2 parallax-img-position-l rounded-r-[30px]",
    },
    {
      classImage: "parallax-img-size-2 parallax-img-position-r rounded-[30px]",
    },
    { classImage: "parallax-img-size-full", scale: "1.25" },
    {
      classImage: "parallax-img-size-1 parallax-img-position-l rounded-[30px]",
      scale: "1.35",
    },
    {
      classImage: "parallax-img-size-2 parallax-img-position-r rounded-[30px]",
    },
  ];

  return lst.map((v, index) => {
    return { ...data[index], ...v };
  });
};
