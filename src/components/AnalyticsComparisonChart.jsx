"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineController,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// icons
import ChartBar from "../assets/ChartBar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineController
);

export default function AnalyticsComparisonChart() {
  const data = {
    labels: ["This week", "Last week"],
    datasets: [
      {
        data: [20, 15],
        backgroundColor: "#A7F3D0",
        borderRadius: 6,
        barPercentage: 0.8,
        categoryPercentage: 0.5,
      },
      {
        data: [18, 14],
        backgroundColor: "#064E3B",
        borderRadius: 6,
        barPercentage: 0.8,
        categoryPercentage: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#6B7280",
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          color: "#E5E7EB",
        },
        ticks: {
          color: "#6B7280",
          font: {
            size: 12,
          },
          stepSize: 5,
        },
        min: 0,
        max: 25,
      },
    },
  };

  return (
    <div className="w-full max-w-sm mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
      <div className="py-2.5 pb-6 flex items-center gap-2.5">
        <ChartBar />
        <p className="text-xs font-semibold text-gray-500">VS PAST PERIOD</p>
      </div>

      <div className="h-80">
        <Bar data={data} options={options} />
      </div>

      <div className="mt-4 flex justify-center space-x-6 text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-1 bg-[#A7F3D0]"></div>
          <span>Consultations</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-1 bg-[#064E3B]"></div>
          <span>Orders closed</span>
        </div>
      </div>
    </div>
  );
}
