import React from "react";
import FrequentlyAsked from "@/components/FrequentlyAsked";
import About from "@/components/About";
import AboutMatter from "@/components/AboutMatter";
import Acheivement from "@/components/Acheivement";

const Page = () => {
  return (
    <div>
      <AboutMatter />
      <About />
      <FrequentlyAsked />
      <Acheivement />
    </div>
  );
};

export default Page;
