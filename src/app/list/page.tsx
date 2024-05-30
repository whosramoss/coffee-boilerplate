import SectionMain from "@components/sections/SectionMain";
import SectionList from "@components/sections/SectionList";
import React from "react";
import SectionHorizontalList from "@components/sections/SectionHorizontalList";

export default function ListPage() {
  return (
    <>
      <SectionMain title="Lots of options, choose wisely" />
      <SectionList />
      <SectionHorizontalList />
    </>
  );
}
