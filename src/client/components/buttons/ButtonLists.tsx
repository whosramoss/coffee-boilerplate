"use client";

import React from "react";
import ChipButton from "@components/buttons/ChipButton";
import ProductCoffeeService from "@services/ProductCoffeeService";
import { testProductCoffeeSchema } from "@shared/types";

type ButtonListsProps = {
  isTestMode?: boolean;
};

export default function ButtonLists({ isTestMode = false }: ButtonListsProps) {
  const _service = new ProductCoffeeService();

  async function create() {
    await _service.createProductCoffee(testProductCoffeeSchema);
  }

  async function update() {
    await _service.updateProductCoffee(1, testProductCoffeeSchema);
  }

  async function deletep() {
    await _service.deleteProductCoffee(1);
  }

  if (isTestMode) {
    return (
      <>
        <ChipButton title="create" onClick={create} />
        <ChipButton title="update" onClick={update} />
        <ChipButton title="delete" onClick={deletep} />
      </>
    );
  }

  return (
    <>
      <ChipButton title="Aromatic" isSelected />
      <ChipButton title="Smooth" />
      <ChipButton title="Balanced" isSelected />
    </>
  );
}
