"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import "../app/globals.css";
import { useTranslation, I18nextProvider } from "react-i18next";
import i18n from "../context/i18n";

export default function App() {
  const { t } = useTranslation();
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <I18nextProvider i18n={i18n}>
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title={<span className="accordion-title">{t("faq.q1")}</span>}
          className="text-neutral-500 text-sm  md:text-md  leading-6"
        >
          {t("faq.a1")}
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title={<span className="accordion-title">{t("faq.q2")}</span>}
          className="text-neutral-500 text-sm md:text-md leading-6"
        >
          {t("faq.a2")}
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title={<span className="accordion-title">{t("faq.q3")}</span>}
          className="text-neutral-500 text-sm md:text-md leading-6 "
        >
          {t("faq.a3")}
        </AccordionItem>

        <AccordionItem
          key="6"
          aria-label="Accordion 6"
          title={<span className="accordion-title">{t("faq.q4")}</span>}
          className="text-neutral-500 text-sm md:text-md leading-6 "
        >
          {t("faq.a4")}
        </AccordionItem>
        <AccordionItem
          key="7"
          aria-label="Accordion 7"
          title={<span className="accordion-title">{t("faq.q5")}</span>}
          className="text-neutral-500 text-sm md:text-md leading-6 "
        >
          {t("faq.a5")}
        </AccordionItem>
        <AccordionItem
          key="8"
          aria-label="Accordion 8"
          title={<span className="accordion-title">{t("faq.q6")}</span>}
          className="text-neutral-500 text-sm md:text-md leading-6 "
        >
          {t("faq.a6")}
        </AccordionItem>
      </Accordion>
    </I18nextProvider>
  );
}
