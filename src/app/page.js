import Image from "next/image";

import { Button, NextUIProvider } from "@nextui-org/react";
import Products from "@/components/Products";
import FrequentlyAsked from "@/components/FrequentlyAsked";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <div>
      <NextUIProvider>
        {/* <Carousel /> */}
        <Products />
        <FrequentlyAsked />
        <Gallery />
      </NextUIProvider>
    </div>
  );
}
