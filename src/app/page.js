"use client";
import { Button, NextUIProvider, Slider } from "@nextui-org/react";
import { RiArrowUpDoubleLine } from "react-icons/ri";
import Page from "./home/page";

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <NextUIProvider>
        <Page />
        <button
          onClick={scrollToTop}
          className="p-3 cursor-pointer bg-[#4F3727]/20 hover:border-none hover:p-4 duration-500 text-black text-white right-10 border-[#4F3727] border backdrop-blur-md rounded-full fixed bottom-6 animate-bounce z-[100]"
        >
          <RiArrowUpDoubleLine size={25} className="text-[#4F3727]" />
        </button>
      </NextUIProvider>
    </div>
  );
}
