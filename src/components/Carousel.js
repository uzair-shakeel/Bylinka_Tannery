"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,

    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="h-[400px]">
      <div>
        <div className="relative h-[400px] w-full oveflow-hidden">
          <img src="/9.webp" alt="bg" className=" h-full w-full object-cover" />
          <div className="absolute top-12 w-full h-full flex flex-col items-center ">
            <h1 className="text-5xl text-white top-12 text-center py-6 font-bold w-full">
              Bylinka Tannery!
            </h1>
            <p className=" top-24 mx-[15%]  py-4 px-4 border-white border bg-white/20 rounded-xl backdrop-blur-md text-lg  text-white ">
              We warmly welcome you to the official website of Bylinka Tannery -
              a place where tradition meets modernity in the art of leather
              tanning. We are proud to continue the craftsmanship that has been
              our passion for generations. We invite you to explore our wide
              range of products and exceptional services.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="relative h-[400px] w-full oveflow-hidden">
          <img src="/10.jpg" alt="bg" className=" h-full w-full object-cover" />
          <div className="absolute top-12 w-full h-full flex flex-col items-center ">
            <h1 className="text-5xl text-white top-12 text-center py-6 font-bold w-full">
              Bylinka Tannery!
            </h1>
            <p className=" top-24 mx-[15%]  py-4 px-4 border-white border bg-white/20 rounded-xl backdrop-blur-md text-lg  text-white ">
              We warmly welcome you to the official website of Bylinka Tannery -
              a place where tradition meets modernity in the art of leather
              tanning. We are proud to continue the craftsmanship that has been
              our passion for generations. We invite you to explore our wide
              range of products and exceptional services.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="relative h-[400px] w-full oveflow-hidden">
          <img src="/11.jpg" alt="bg" className=" h-full w-full object-cover" />
          <div className="absolute top-12 w-full h-full flex flex-col items-center ">
            <h1 className="text-5xl text-white top-12 text-center py-6 font-bold w-full">
              Bylinka Tannery!
            </h1>
            <p className=" top-24 mx-[15%]  py-4 px-4 border-white border bg-white/20 rounded-xl backdrop-blur-md text-lg  text-white ">
              We warmly welcome you to the official website of Bylinka Tannery -
              a place where tradition meets modernity in the art of leather
              tanning. We are proud to continue the craftsmanship that has been
              our passion for generations. We invite you to explore our wide
              range of products and exceptional services.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="relative h-[400px] w-full oveflow-hidden">
          <img
            src="/12.jpeg"
            alt="bg"
            className=" h-full w-full object-cover"
          />
          <div className="absolute top-12 w-full h-full flex flex-col items-center ">
            <h1 className="text-5xl text-white top-12 text-center py-6 font-bold w-full">
              Bylinka Tannery!
            </h1>
            <p className=" top-24 mx-[15%]  py-4 px-4 border-white border bg-white/20 rounded-xl backdrop-blur-md text-lg  text-white ">
              We warmly welcome you to the official website of Bylinka Tannery -
              a place where tradition meets modernity in the art of leather
              tanning. We are proud to continue the craftsmanship that has been
              our passion for generations. We invite you to explore our wide
              range of products and exceptional services.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="relative h-[400px] w-full oveflow-hidden">
          <img src="/5.webp" alt="bg" className=" h-full w-full object-cover" />
          <div className="absolute top-12 w-full h-full flex flex-col items-center ">
            <h1 className="text-5xl text-white top-12 text-center py-6 font-bold w-full">
              Bylinka Tannery!
            </h1>
            <p className=" top-24 mx-[15%]  py-4 px-4 border-white border bg-white/20 rounded-xl backdrop-blur-md text-lg  text-white ">
              We warmly welcome you to the official website of Bylinka Tannery -
              a place where tradition meets modernity in the art of leather
              tanning. We are proud to continue the craftsmanship that has been
              our passion for generations. We invite you to explore our wide
              range of products and exceptional services.
            </p>
          </div>
        </div>
      </div>
    </Slider>
  );
}
