"use client";

import React from "react";
import Carousel from "@/components/Carousel";
import NavBar from "@/components/NavBar";
import Images from "@/components/Images";
import Reindeer from "@/components/Reindeer";
import Categories from "@/components/Categories";
import Contact from "@/components/Contact";
import ThreeGrid from "@/components/ThreeGrid";
import Banner from "@/components/Banner";
import GetinTouch from "@/components/GetinTouch";
import { RiArrowUpDoubleLine } from "react-icons/ri";
import Contactgrids from "@/components/Contactgrids";

const Page = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <Carousel />
      <ThreeGrid />
      <Images />
      <Reindeer />
      <Categories />
      <Banner />
      <Contact />
      <GetinTouch />
      <Contactgrids />
      <button
        onClick={scrollToTop}
        className="hidden md:block p-3 cursor-pointer bg-white/40 hover:border-none hover:p-4 duration-500  text-white right-10 border-[#4F3727] border backdrop-blur-md rounded-full fixed bottom-6 animate-bounce z-[100]"
      >
        <RiArrowUpDoubleLine size={25} className="text-[#4F3727]" />
      </button>
    </div>
  );
};

export default Page;
