import React from "react";
import SummaryTile from "./SummaryTile"; // Import the tile component
import CaretDown from "../assets/CaretDown";
import { summaryData } from "../data/summaryData";

function Summary() {
  return (
    <div className="summary-container">
      <div className="flex items-center justify-between">
        <p className="text-3xl font-medium">At a glance</p>
        <div className="border border-[#DCDFE4] shadow-[0px_1px_2px_0px_#00000014] flex items-center justify-between w-fit rounded-md p-2.5">
          7 days
          <div className="ml-1 cursor-pointer">
            <CaretDown />
          </div>
        </div>
      </div>

      <div className="summary-tiles-container flex items-center lg:justify-between flex-wrap gap-5 my-10 sm:justify-evenly md:justify-between">
        {summaryData.map((item) => (
          <SummaryTile key={item.id} summary={item} />
        ))}
      </div>
    </div>
  );
}

export default Summary;
