import React from "react";
import FAQs from "./FAQs";
import Image from "next/image";
const FrequentlyAsked = () => {
  return (
    <div className="px-[4%] py-8 grid grid-cols-2 gap-4">
      <div className="rounded-3xl overflow-hidden h-full w-full">
        <img src="/8.jpg" alt="img" className="h-full w-full object-cover" />
      </div>
      <div>
        <h1 className="text-3xl font-bold py-6 text-center">
          Frequently Asked Questions
        </h1>
        <div className="px-[5%]">
          <FAQs />
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAsked;
