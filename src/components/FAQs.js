"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function App() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion>
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        title="What types of skins do you offer?"
        className="text-neutral-500"
      >
        We offer four main types of skins: Sheep Skin, Deer Skin, Reindeer Skin,
        and Medical Grade Skins. Each type has unique qualities and uses.
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        title="How do I choose the right type of skin for my needs?"
        className="text-neutral-500"
      >
        Consider the specific qualities and intended use of each type of skin.
        Sheep Skin is soft and versatile, Deer Skin is known for its durability
        and suppleness, Reindeer Skin offers unique aesthetics and warmth, and
        Medical Grade Skins are specifically designed for therapeutic use.
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Accordion 3"
        title="What are the benefits of Sheep Skin?"
        className="text-neutral-500"
      >
        Sheep Skin is renowned for its luxurious softness, natural warmth, and
        durability. It’s perfect for creating cozy blankets, stylish apparel, or
        enhancing home decor.
      </AccordionItem>

      <AccordionItem
        key="6"
        aria-label="Accordion 6"
        title="What are the unique features of Reindeer Skin?"
        className="text-neutral-500"
      >
        Reindeer Skin is known for its distinctive appearance, warmth, and
        softness. It’s often used for decorative purposes, such as rugs or wall
        hangings.
      </AccordionItem>
      <AccordionItem
        key="7"
        aria-label="Accordion 7"
        title="Are your skins ethically sourced?"
        className="text-neutral-500"
      >
        Yes, all our skins are sourced from ethical and sustainable practices.
        We prioritize animal welfare and environmental responsibility in our
        sourcing processes.
      </AccordionItem>
      <AccordionItem
        key="8"
        aria-label="Accordion 8"
        title="Do you offer customization options?"
        className="text-neutral-500"
      >
        Yes, we offer customization options for certain products. Please contact
        us with your specific requirements, and we will do our best to
        accommodate your needs.
      </AccordionItem>
    </Accordion>
  );
}
