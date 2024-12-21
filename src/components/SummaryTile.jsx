import React from "react";

function SummaryTile({ summary }) {
  const { icon: Icon, title, count, percent, type } = summary; // Destructure the icon component

  const increaseClass = type === "increase" ? "text-green-500" : "text-red-500";

  return (
    <div className="summary-tile">
      <div className="flex items-center gap-3 p-4 border rounded-lg shadow-md w-72">
        {/* Icon Container with fixed size */}
        <div className="icon-container flex justify-center items-center">
          {/* Pass width and height directly to the icon or adjust within the container */}
          <Icon/> {/* Small fixed size for the icon */}
        </div>

        <div className="text-container">
          <p className="text-sm font-semibold">{title}</p>
          <p className="text-xl font-medium">{count}</p>
          <p className={`text-sm ${increaseClass}`}>{percent}%</p>
        </div>
      </div>
    </div>
  );
}

export default SummaryTile;
