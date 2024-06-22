"use client";
import React, { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { MdOutlineImportContacts } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import { RiArrowUpDoubleLine } from "react-icons/ri";

const NavBar = () => {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["english"]));
  const [isVisible, setIsVisible] = useState(true);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Mapping of key to image source and display text
  const languageMap = {
    english: { image: "/English.png", text: "English" },
    polski: { image: "/polski.jpeg", text: "Polski" },
    german: { image: "/german.avif", text: "German" },
    french: { image: "/french.avif", text: "French" },
    swedish: { image: "/swedish.avif", text: "Swedish" },
  };

  const selectedValue = React.useMemo(() => {
    const selectedKey = Array.from(selectedKeys)[0];
    const { image, text } = languageMap[selectedKey];
    return (
      <div className="flex items-center gap-3">
        <img src={image} alt={selectedKey} className="h-7 w-7 rounded-full" />
        {text}
      </div>
    );
  }, [selectedKeys]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;

  //     if (currentScrollY < lastScrollY) {
  //       // Scrolling up
  //       setIsVisible(true);
  //     } else if (currentScrollY > lastScrollY) {
  //       // Scrolling down
  //       setIsVisible(false);
  //     }

  //     setLastScrollY(currentScrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     if (scrollTimeout) {
  //       clearTimeout(scrollTimeout);
  //     }
  //   };
  // }, [lastScrollY, scrollTimeout]);

  return (
    <>
      <div
        className={`px-[5%] hidden fixed backdrop-blur-md  top-4  mx-[2%] border border-header-color rounded-md shadow-lg md:flex justify-between items-center z-[1000] text-white bg-header-color/40 w-[96%] transition-transform duration-500 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex gap-5 md:gap-6 uppercase py-2 items-center text-sm md:text-md justify-start h-full font-light">
          <Link href={"home"}>
            <li className="cursor-pointer ">Home</li>
          </Link>
          <Link href={"services"}>
            <li className="cursor-pointer">Services</li>
          </Link>
          <Link href={"about"}>
            <li className="cursor-pointer">About</li>
          </Link>
        </ul>

        <Dropdown className="text-sm md:text-md">
          <DropdownTrigger>
            <Button
              variant="ghost"
              color="white"
              className="capitalize border-none text-md"
            >
              {selectedValue}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Single selection example"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
          >
            {Object.keys(languageMap).map((key) => (
              <DropdownItem key={key}>
                <div className="flex items-center gap-3">
                  <img
                    src={languageMap[key].image}
                    alt={key}
                    className="h-6 w-8"
                  />
                  {languageMap[key].text}
                </div>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>

      <div
        className={`px-[3%] fixed backdrop-blur-md bottom-4 md:hidden mx-[4%] border border-header-color rounded-md shadow-lg flex justify-center items-center z-[1000] text-white bg-header-color/40 w-[92%] transition-transform duration-500 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex w-full justify-between uppercase py-2 items-center text-sm md:text-md  h-full font-light">
          <Link href={"home"}>
            <li className="cursor-pointer px-4">
              <FaHome size={28} />
            </li>
          </Link>
          <Link href={"services"}>
            <li className="cursor-pointer">
              <AiFillProduct size={28} />
            </li>
          </Link>
          <button
            onClick={scrollToTop}
            className="px-3 cursor-pointer text-white  animate-bounce z-[100]"
          >
            <RiArrowUpDoubleLine size={35} />
          </button>
          <Link href={"about"}>
            <li className="cursor-pointer">
              <MdOutlineImportContacts size={28} />
            </li>
          </Link>
          <li>
            <Dropdown className="text-sm md:text-md">
              <DropdownTrigger>
                <Button
                  variant="ghost"
                  color="white"
                  className="capitalize border-none text-md"
                >
                  <GrLanguage size={28} />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Single selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
              >
                {Object.keys(languageMap).map((key) => (
                  <DropdownItem key={key}>
                    <div className="flex items-center gap-3">
                      <img
                        src={languageMap[key].image}
                        alt={key}
                        className="h-6 w-8"
                      />
                      {languageMap[key].text}
                    </div>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
