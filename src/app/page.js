import { Button, NextUIProvider, Slider } from "@nextui-org/react";
import Page from "./home/Page";

export default function Home() {
  return (
    <div>
      <NextUIProvider>
        <Page />
      </NextUIProvider>
    </div>
  );
}
