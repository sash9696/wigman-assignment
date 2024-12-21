
import React, { useState } from "react";

// icons
import SummaryIcon from "../assets/navbar/ChartPieIcon";
import SalesIcon from "../assets/navbar/TagIcon";
import ChatsIcon from "../assets/navbar/ChatIcon";

const navItems = [
  {
    icon: <SummaryIcon />,
    label: "Summary",
  },
  {
    icon: <SalesIcon />,
    label: "Sales",
  },
  {
    icon: <ChatsIcon />,
    label: "Chats",
  },
];

function Header() {
  const [activeItem, setActiveItem] = useState(navItems[0].label);

  const handleNavItemClick = (item) => {
    setActiveItem(item.label);
  };

  return (
    <div className="flex items-center gap-6 lg:gap-10">
      {navItems.map((item, index) => (
        <div
          key={index}
          className={`flex items-center justify-center gap-2.5 p-3 mx-0.5 cursor-pointer 
            ${
              activeItem === item.label
                ? "bg-[#CCFBEF] rounded-full font-bold"
                : ""
            } 
            lg:flex-row
            sm:flex-col sm:items-center sm:gap-1`}
          onClick={() => handleNavItemClick(item)}
        >
          {item.icon}
          {/* Hide label on small screens (425px and below) */}
          <p className="hidden sm:block">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export default Header;
