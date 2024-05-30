"use client";

import Center from "@components/Center";
import { CardItem } from "@components/card/CardItem";
import IconCup from "@components/icons/IconCup";
import { useApiFetch } from "@hooks/useApiFetch";
import CoffeeService from "@services/CoffeeService";
import { TCoffee } from "@shared/types";
import React from "react";

export default function SectionList() {
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
    <section className="p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        {data?.map((item, index) => (
          <CardItem
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}
