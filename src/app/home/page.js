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
import Footer from "@/components/Footer";

const Page = () => {
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
    </div>
  );
};

export default Page;
