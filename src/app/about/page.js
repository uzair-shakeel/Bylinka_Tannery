import React from "react";
import FrequentlyAsked from "@/components/FrequentlyAsked";
import About from "@/components/About";
import AboutMatter from "@/components/AboutMatter";
import Acheivement from "@/components/Acheivement";
import Gallery from "@/components/Gallery";

const Page = () => {
  return (
    <div>
      <AboutMatter />
      <Gallery />
      <About />
      <FrequentlyAsked />
      <Acheivement />
    </div>
  );
};

export default Page;
