"use client";
import React, { useState } from "react";

const ReindeerService = () => {
  const [zoomIn, setZoomIn] = useState(false);
  const [selectedImage, setSelectedImage] = useState(
    "/fwaboutusphotos/DSCF3310.jpg"
  );

  const images = [
    "/fwaboutusphotos/DSCF3310.jpg",
    "/fwaboutusphotos/DSCF3345.jpg",
    "/fwaboutusphotos/DSCF3381.jpg",
    "/fwaboutusphotos/DSCF3382.jpg",
    "/fwaboutusphotos/DSCF3436.jpg",
  ];

  const colorOptions = [
    { color: "bg-header-color", border: "border-white" },
    { color: "bg-white", border: "border-white" },
    { color: "bg-black", border: "border-white" },
  ];

  const patternOptions = [
    { name: "Straight", bg: "bg-header-color/20" },
    { name: "Curly", bg: "bg-header-color/20" },
    { name: "Short", bg: "bg-header-color/20" },
  ];



  return (
    <div className="grid lg:grid-cols-2 gap-6 md:px-[5%] py-8 md:py-20">
      {/* Image Gallery */}
      <div className="flex flex-col mx-[3%] md:mx-0 md:flex-row gap-2">
        <div className="justify-between w-[20%] md:space-y-2 flex md:flex-col items-center">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`cursor-pointer w-full border-2 ${
                selectedImage === image
                  ? "border-header-color"
                  : "border-transparent"
              } hover:border-header-color`}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
        <div className="w-full md:w-[80%] h-full overflow-hidden flex justify-center items-center">
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={selectedImage}
              alt="Selected"
              onClick={() => setZoomIn(!zoomIn)}
              className={`w-full h-full object-cover rounded-lg transition-transform duration-300 transform ${
                zoomIn
                  ? "scale-[180%] cursor-zoom-out"
                  : "scale-100 cursor-zoom-in"
              } `}
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="flex flex-col mx-[3%] md:mx-0 justify-center">
        <h3 className="text-2xl md:text-3xl font-bold">Deer Skin</h3>
        <p className="py-4 md:leading-7 text-justify leading-5 md:text-md text-sm">
          At Bylinka Tannery, we are proud to present our deer skin tanning
          services, synonymous with refinement and natural beauty. Belonging to
          the deer family, these skins provide materials that find use in the
          most luxurious leather products.
        </p>
        <h4 className="text-md md:text-lg font-bold my-2">Available Color:</h4>
        <div className="w-full flex gap-3">
          {colorOptions.map((option, index) => (
            <span
              key={index}
              className={`md:h-14 md:w-14 w-8 h-8 rounded-full shadow-md border ${option.border} ${option.color}`}
            ></span>
          ))}
        </div>
        <h4 className="text-md md:text-lg font-bold mt-6 mb-2 md:my-2">
          Available Patterns:
        </h4>
        <div className="w-full flex ">
          {patternOptions.map((option, index) => (
            <span
              key={index}
              className={`bg-${option.bg} w-full border text-center text-header-color border-header-color py-2 px-7 md:px-10 text-sm md:text-md`}
            >
              {option.name}
            </span>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default ReindeerService;
