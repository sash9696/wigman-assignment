import React from "react";

// icons
import Logo from "../assets/sidebar/Logo";
import HomeIcon from "../assets/sidebar/HomeIcon";
import ChatIcon from "../assets/sidebar/ChatIcon";
import ConversationsIcon from "../assets/sidebar/MessagesIcon";
import SettingsIcon from "../assets/sidebar/SettingsIcon";

function NavigationPanel() {
  return (
    <div className="bg-[#115E56] flex flex-col justify-between items-center p-4 fixed h-full sm:block hidden">
      <div className="flex flex-col justify-between items-center">
        <Logo />

        <div className="flex flex-col items-center justify-center my-12 gap-5">
          <HomeIcon />
          <ChatIcon />
          <ConversationsIcon />
        </div>
      </div>

      <SettingsIcon />
    </div>
  );
}

export default NavigationPanel;
