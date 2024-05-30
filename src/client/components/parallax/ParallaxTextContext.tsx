import React from "react";

export default function ParallaxTextContext() {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
        More than just a drink, it's an experience.
      </h2>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
          Coffee, the beloved beverage that fuels millions of mornings around
          the world, boasts a rich and fascinating history that spans centuries
          and continents. Its journey from humble origins to global ubiquity is
          a testament to its captivating flavor, invigorating effects, and
          unique ability to bring people together.
        </p>
        <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
          Despite its global popularity, some coffee connoisseurs prefer the
          subtle flavors of single-origin beans
        </p>
      </div>
    </div>
  );
}
