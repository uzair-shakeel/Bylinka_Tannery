import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const NavBar = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["english"]));

  // Mapping of key to image source and display text
  const languageMap = {
    english: { image: "/English.png", text: "English" },
    polski: { image: "/polski.jpeg", text: "Polski" },
    german: { image: "/german.avif", text: "German" },
    french: { image: "/french.avif", text: "French" },
    swedish: { image: "/swedish.avif", text: "Swedish" },
  };

  const selectedValue = React.useMemo(() => {
    // Get the selected key from selectedKeys set
    const selectedKey = Array.from(selectedKeys)[0];
    // Get the image and text based on selected key
    const { image, text } = languageMap[selectedKey];
    // Return JSX combining image and text
    return (
      <div className="flex items-center gap-3">
        <img src={image} alt={selectedKey} className="h-7 w-7 rounded-full" />
        {text}
      </div>
    );
  }, [selectedKeys]);

  return (
    <div className="px-[5%] fixed backdrop-blur-lg top-0 flex justify-between items-center z-[1000] text-white bg-header-color/20 w-full">
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
