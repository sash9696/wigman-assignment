import React from "react";

// internal components
import { Summary,Analytics,Purchases } from "../components";
function MainContent() {
  return (
    <div className="shadow-[0px_5px_22px_0px_#0000000A,0px_0px_0px_1px_#0000000F] rounded-2xl p-7 px-6 my-7">
      <Summary />
      <Analytics />
      <Purchases />
    </div>
  );
}

export default MainContent;
