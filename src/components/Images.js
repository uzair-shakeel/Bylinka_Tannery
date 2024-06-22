import React from "react";

const Images = () => {
  const imageUrls = [
    "/fwphotosforsheep/DSCF3213.jpg",
    "/fwphotosforsheep/DSCF3201.jpg",
    "/fwphotosforsheep/DSCF3216.jpg",
    "/fwphotosforsheep/DSCF3243.jpg",
    "/fwphotosforsheep/DSCF3436.jpg",
  ];

  return (
    <div className="p-4 w-[98%] mx-auto bg-white md:my-12">
      <h3 className="font-bold text-xl md:text-2xl py-2">Sheep Skin</h3>
      <div
        className="w-full overflow-x-auto md:overflow-x-hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex gap-1 md:gap-3 lg:gap-6 justify-between w-max md:w-full">
          {imageUrls.map((url, index) => (
            <div
              key={index}
              className="h-[170px] lg:w-auto lg:h-[250px] overflow-hidden"
            >
              <img
                src={url}
                alt={`Sheep Skin ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Images;
