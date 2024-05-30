import React from "react";
import ButtonLists from "@components/buttons/ButtonLists";
import SectionMain from "@components/sections/SectionMain";
import SectionProductsCoffeeList from "@components/sections/SectionProductsCoffeeList";

export default function GridPage() {
  return (
    <>
      <SectionMain title="Which coffee do you want today?">
        <ButtonLists
        // isTestMode
        />
      </SectionMain>
      <SectionProductsCoffeeList />
    </>
  );
}
