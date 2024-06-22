import React from "react";

const ServiceDescription = () => {
  const breeds = [
    { name: "Merino", bg: "bg-header-color/20" },
    { name: "Dorper", bg: "bg-header-color/20" },
    { name: "Suffolk", bg: "bg-header-color/20" },
    { name: "Hampshire", bg: "bg-header-color/20" },
    { name: "Texel", bg: "bg-header-color/20" },
    { name: "Corriedale", bg: "bg-header-color/20" },
    { name: "Romney", bg: "bg-header-color/20" },
    { name: "Cheviot", bg: "bg-header-color/20" },
    { name: "Loncoln", bg: "bg-header-color/20" },
    { name: "Rambouillet", bg: "bg-header-color/20" },
  ];

  return (
    <div className="pb-4 md:pb-14 px-[5%]">
      <h1 className="text-2xl md:text-3xl font-bold py-5 text-center">
        Available Breeds:
      </h1>
      <div className="w-full grid grid-cols-5 grid-rows-2 items-center justify-center ">
        {breeds.map((option, index) => (
          <span
            key={index}
            className={`bg-header-color/10 w-full border text-center text-header-color border-header-color py-4   text-sm md:text-lg`}
          >
            {option.name}
          </span>
        ))}
      </div>
      <h1 className="text-2xl md:text-3xl font-bold py-5 text-center md:mt-12">
        Product Processing
      </h1>
      <p className="leading-6 md:leading-8 py-3 text-justify text-sm md:text-md">
        <span className="font-bold">Preparation and Cleaning:</span> The tanning
        process starts with the thorough cleaning of raw skins. All contaminants
        and residual tissue are removed, which is crucial for ensuring the
        quality of the final product.
      </p>

      <p className="leading-6 md:leading-8 py-3 text-justify text-sm md:text-md">
        <span className="font-bold">Preparation and Cleaning:</span> This is a
        key stage where the skin is permanently altered. We use natural and
        synthetic tanning agents that provide the skin with flexibility and
        durability. Our tanning methods are eco-friendly and environmentally
        safe.
      </p>
      <p className="leading-6 md:leading-8 py-3 text-justify text-sm md:text-md">
        <span className="font-bold">Preparation and Cleaning:</span> After
        tanning, the skin is dyed, dried, and then subjected to various
        finishing processes such as grinding, polishing, or impregnation. These
        stages define the appearance, texture, and color of the skin.
      </p>
      <p className="leading-6 md:leading-8 py-6 text-justify text-sm md:text-md">
        Thanks to these processes and attention to detail, Bylinka Tannery
        delivers top-quality products that meet the expectations of even the
        most demanding clients. Our skins are prepared with the utmost care,
        respecting both traditional craftsmanship and the latest trends in
        tannery, allowing us to provide exceptional products to domestic and
        international markets.{" "}
      </p>
    </div>
  );
};

export default ServiceDescription;
