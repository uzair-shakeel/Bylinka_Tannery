import React from "react";

const Reindeer = () => {
  const imageUrls = [
    "/fwreindeerphotos/DSCF3237.jpg",
    "/fwreindeerphotos/DSCF3238.jpg",
    "/fwreindeerphotos/DSCF3241.jpg",
    "/fwreindeerphotos/DSCF3242.jpg",
  ];

  return (
    <div className="p-4 w-[98%] mx-auto bg-white mb-4 md:mb-12">
      <h3 className="font-bold text-xl md:text-2xl py-2">Reindeer Skin</h3>
      <div
        className="w-full overflow-x-auto md:overflow-x-hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex gap-1 md:gap-3 lg:gap-6 justify-between w-max md:w-full">
          {imageUrls.map((url, index) => (
            <div
              key={index}
              className="h-[170px] lg:h-[250px] w-auto overflow-hidden"
            >
              <img
                src={url}
                alt={`Reindeer Skin ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reindeer;
