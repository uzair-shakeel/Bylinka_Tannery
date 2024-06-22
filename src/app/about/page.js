"use client";
import React from "react";
import FrequentlyAsked from "@/components/FrequentlyAsked";
import About from "@/components/About";
import AboutMatter from "@/components/AboutMatter";
import Acheivement from "@/components/Acheivement";
import Gallery from "@/components/Gallery";
import { RiArrowUpDoubleLine } from "react-icons/ri";

const Page = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <AboutMatter />
      <Gallery />
      <About />
      <FrequentlyAsked />
      <Acheivement />
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
