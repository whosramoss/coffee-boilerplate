import React from "react";
import Splash from "@components/Splash";
import ParallaxHeader from "@components/parallax/ParallaxHeader";
import ParallaxImageList from "@components/parallax/ParallaxImageList";

export default function ParallaxPage() {
  return (
    <>
      <Splash title="Coffee" />
      <div className="relative z-[2]">
        <ParallaxHeader image="../coffee-main.webp" />
        <ParallaxImageList />
      </div>
    </>
  );
}
