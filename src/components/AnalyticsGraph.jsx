"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  BarController,
  LineController,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// icons
import ChatIcon from "../assets/overview/ChatIcon";

// Register the necessary chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  LineElement,
  LineController,
  BarController,
  Tooltip
);

const AnalyticsGraph = () => {
  // Chart data
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        type: "line",
        label: "Incoming",
        data: [30, 35, 40, 50, 45, 50, 55],
        borderColor: "#6366F1",
        borderWidth: 2,
        borderDash: [5, 5],
        fill: false,
        tension: 0.4,
        yAxisID: "y1",
      },
      {
        type: "line",
        label: "Answered",
        data: [30, 32, 33, 45, 42, 43, 44],
        borderColor: "#10B981",
        borderWidth: 2,
        fill: false,
        tension: 0.4,
        yAxisID: "y1",
      },
      {
        type: "bar",
        label: "Experts Online",
        data: [10, 12, 15, 20, 18, 19, 20],
        backgroundColor: "rgba(250, 204, 21, 0.5)",
        borderColor: "#FACC15",
        borderWidth: 1,
        yAxisID: "y2",
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            if (context.dataset.label === "Experts Online") {
              return `${context.raw} Experts`;
            }
            return `${context.raw} Consultations`;
          },
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y1: {
        type: "linear",
        position: "left",
        title: {
          display: true,
          text: "CONSULTATIONS",
          color: "#9CA3AF",
          font: {
            size: 12,
          },
        },
        ticks: {
          color: "#6B7280",
        },
        grid: {
          drawOnChartArea: true,
        },
      },
      y2: {
        type: "linear",
        position: "right",
        title: {
          display: true,
          text: "EXPERTS ONLINE",
          color: "#9CA3AF",
          font: {
            size: 12,
          },
        },
        ticks: {
          color: "#6B7280",
        },
        grid: {
          drawOnChartArea: false,
        },
      },
      x: {
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          color: "#6B7280",
        },
      },
    },
  };

  return (
    <div className="w-full max-w-xl mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
      <div className="py-2.5 pb-6 flex items-center gap-2.5">
        <ChatIcon />
        <p className="text-xs font-semibold text-gray-500">CONSULTATIONS</p>
      </div>

      <div className="relative h-80">
        <Bar data={data} options={options} />
      </div>

      <div className="mt-4 flex justify-center space-x-6 text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-1 bg-blue-500"></div>
          <span>Incoming</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-1 bg-green-500"></div>
          <span>Answered</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-1 bg-yellow-400"></div>
          <span>Experts Online</span>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsGraph;
