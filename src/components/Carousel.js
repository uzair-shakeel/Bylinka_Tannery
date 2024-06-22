"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Styles.css";

export default function Carousel() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "none",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="h-[400px]">
      <div className="flex flex-col md:flex-row relative bg-green-50 h-[400px] overflow-hidden">
        <img
          src="/9.webp"
          alt="bg"
          className=" h-[60%] w-full md:h-full md:w-[65%] object-cover clip-path"
        />
        <div className="hidden absolute xl:px-[5%] ml-[40%] w-[40%] text-black top-20 right-0 h-full md:flex flex-col items-center ">
          <h1 className="text-5xl  top-12 text-center py-6 font-bold w-full">
            Bylinka Tannery!
          </h1>
          <p className=" top-24  py-4 px-8 text-justify text-brown-200 ">
            We warmly welcome you to the official website of Bylinka Tannery - a
            place where tradition meets modernity in the art of leather tanning.
            <span className="hidden lg:block py-3">
              We are proud to continue the craftsmanship that has been our
              passion for generations.
            </span>
          </p>
        </div>

        <div className="md:hidden absolute mt-[40%] w-full text-black top-20 right-0 h-full flex flex-col items-center ">
          <h1 className="text-2xl  text-center py-3 font-bold w-full">
            Bylinka Tannery!
          </h1>
          <p className=" px-8 text-justify text-tiny ">
            We warmly welcome you to the official website of Bylinka Tannery - a
            place where tradition meets modernity in the art of leather tanning.
            We are proud to continue the craftsmanship that has been our passion
            for generations.
          </p>
        </div>
      </div>

      <div className="flex relative bg-blue-100 h-[400px] overflow-hidden">
        <img
          src="/10.jpg"
          alt="bg"
          className=" h-full  w-[65%] object-cover clip-path"
        />
        <div className="absolute  w-[40%] text-black top-20 right-0  h-full flex flex-col items-center ">
          <h1 className="text-5xl  top-12 text-center text-blue-800 py-6 font-bold w-full">
            Bylinka Tannery!
          </h1>
          <p className=" top-24  py-4 px-8 text-justify text-brown-200 ">
            We warmly welcome you to the official website of Bylinka Tannery - a
            place where tradition meets modernity in the art of leather tanning.
            We are proud to continue the craftsmanship that has been our passion
            for generations. We invite you to explore our wide range of products
            and exceptional services.
          </p>
        </div>
      </div>

      <div className="flex relative h-[400px] bg-red-100 overflow-hidden">
        <img
          src="/11.jpg"
          alt="bg"
          className=" h-full w-[65%] object-cover clip-path"
        />
        <div className="absolute w-[40%] text-black top-20 right-0 h-full flex flex-col items-center ">
          <h1 className="text-5xl  top-12 text-center py-6 font-bold w-full">
            Bylinka Tannery!
          </h1>
          <p className=" top-24  py-4 px-8 text-justify text-brown-200 ">
            We warmly welcome you to the official website of Bylinka Tannery - a
            place where tradition meets modernity in the art of leather tanning.
            We are proud to continue the craftsmanship that has been our passion
            for generations. We invite you to explore our wide range of products
            and exceptional services.
          </p>
        </div>
      </div>

      <div className="flex bg-blue-100 relative h-[400px] overflow-hidden">
        <img
          src="/12.jpeg"
          alt="bg"
          className=" h-full w-[65%] object-cover  clip-path"
        />
        <div className="absolute w-[40%] text-black top-20 right-0  h-full flex flex-col items-center ">
          <h1 className="text-5xl  top-12 text-center text-blue-800 py-6 font-bold w-full">
            Bylinka Tannery!
          </h1>
          <p className=" top-24  py-4 px-8 text-justify text-brown-200 ">
            We warmly welcome you to the official website of Bylinka Tannery - a
            place where tradition meets modernity in the art of leather tanning.
            We are proud to continue the craftsmanship that has been our passion
            for generations. We invite you to explore our wide range of products
            and exceptional services.
          </p>
        </div>
      </div>

      <div className="flex relative h-[400px] bg-red-100 overflow-hidden">
        <img
          src="/8.jpg"
          alt="bg"
          className=" h-full w-[65%] object-cover clip-path"
        />
        <div className="absolute w-[40%] text-black top-20 right-0 h-full flex flex-col items-center ">
          <h1 className="text-5xl  top-12 text-center py-6 font-bold w-full">
            Bylinka Tannery!
          </h1>
          <p className=" top-24  py-4 px-8 text-justify text-brown-200 ">
            We warmly welcome you to the official website of Bylinka Tannery - a
            place where tradition meets modernity in the art of leather tanning.
            We are proud to continue the craftsmanship that has been our passion
            for generations. We invite you to explore our wide range of products
            and exceptional services.
          </p>
        </div>
      </div>
    </Slider>
  );
}
