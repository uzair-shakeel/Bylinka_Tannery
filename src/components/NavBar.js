import React, { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollY, scrollTimeout]);

  return (
    <div
      className={`px-[5%] fixed backdrop-blur-lg top-0 flex justify-between items-center z-[1000] text-white bg-header-color/20 w-full transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <ul className="flex gap-6 py-2 items-center justify-start h-full font-light">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Services</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <Dropdown>
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
  );
};

export default NavBar;
