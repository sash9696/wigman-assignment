import React, { useState } from "react";

// helpers
import { truncateText } from "../../helpers";

// images
import earphones from "../../assets/images/earphones.png"; // Path to your image

// icons
import ArrowUpRightIcon from "../../assets/ArrowUpRightIcon";

// Sample product data (normally would be fetched or imported)
const headers = [
  "Product",
  "Date",
  "Time spent",
  "Order Value",
  "Commission",
  "",
];

const products = [
    {
      id: 1,
      productImage: earphones,
      productName: "Product Name 1",
      dateAndTime: {
        date: "24 April '2024",
        time: "10:24 AM",
      },
      timeSpent: "2h 5m",
      orderValue: "$120.21",
      commission: "$55",
    },
    {
      id: 2,
      productImage: earphones,
      productName: "Product Name 2",
      dateAndTime: {
        date: "23 April '2024",
        time: "1:15 PM",
      },
      timeSpent: "1h 30m",
      orderValue: "$150.00",
      commission: "$65",
    },
    {
      id: 3,
      productImage: earphones,
      productName: "Product Name 3",
      dateAndTime: {
        date: "25 April '2024",
        time: "5:30 PM",
      },
      timeSpent: "3h 10m",
      orderValue: "$90.10",
      commission: "$50",
    },
    {
      id: 4,
      productImage: earphones,
      productName: "Product Name 4",
      dateAndTime: {
        date: "26 April '2024",
        time: "9:45 AM",
      },
      timeSpent: "4h 20m",
      orderValue: "$200.00",
      commission: "$80",
    },
    {
      id: 5,
      productImage: earphones,
      productName: "Product Name 5",
      dateAndTime: {
        date: "27 April '2024",
        time: "11:00 AM",
      },
      timeSpent: "2h 50m",
      orderValue: "$210.50",
      commission: "$90",
    },
    {
      id: 6,
      productImage: earphones,
      productName: "Product Name 6",
      dateAndTime: {
        date: "28 April '2024",
        time: "12:15 PM",
      },
      timeSpent: "3h 5m",
      orderValue: "$180.30",
      commission: "$75",
    },
    {
      id: 7,
      productImage: earphones,
      productName: "Product Name 7",
      dateAndTime: {
        date: "29 April '2024",
        time: "2:30 PM",
      },
      timeSpent: "1h 45m",
      orderValue: "$160.00",
      commission: "$70",
    },
    {
      id: 8,
      productImage: earphones,
      productName: "Product Name 8",
      dateAndTime: {
        date: "30 April '2024",
        time: "4:10 PM",
      },
      timeSpent: "5h 0m",
      orderValue: "$250.00",
      commission: "$100",
    },
    {
      id: 9,
      productImage: earphones,
      productName: "Product Name 9",
      dateAndTime: {
        date: "1 May '2024",
        time: "10:00 AM",
      },
      timeSpent: "3h 30m",
      orderValue: "$175.00",
      commission: "$85",
    },
    {
      id: 10,
      productImage: earphones,
      productName: "Product Name 10",
      dateAndTime: {
        date: "2 May '2024",
        time: "9:00 AM",
      },
      timeSpent: "4h 15m",
      orderValue: "$220.00",
      commission: "$95",
    },
    {
      id: 11,
      productImage: earphones,
      productName: "Product Name 11",
      dateAndTime: {
        date: "3 May '2024",
        time: "5:45 PM",
      },
      timeSpent: "2h 0m",
      orderValue: "$130.00",
      commission: "$60",
    },
    {
      id: 12,
      productImage: earphones,
      productName: "Product Name 12",
      dateAndTime: {
        date: "4 May '2024",
        time: "11:30 AM",
      },
      timeSpent: "3h 15m",
      orderValue: "$140.00",
      commission: "$65",
    },
    {
      id: 13,
      productImage: earphones,
      productName: "Product Name 13",
      dateAndTime: {
        date: "5 May '2024",
        time: "1:00 PM",
      },
      timeSpent: "2h 30m",
      orderValue: "$155.50",
      commission: "$70",
    },
    {
      id: 14,
      productImage: earphones,
      productName: "Product Name 14",
      dateAndTime: {
        date: "6 May '2024",
        time: "3:00 PM",
      },
      timeSpent: "4h 40m",
      orderValue: "$230.00",
      commission: "$95",
    },
    {
      id: 15,
      productImage: earphones,
      productName: "Product Name 15",
      dateAndTime: {
        date: "7 May '2024",
        time: "2:00 PM",
      },
      timeSpent: "1h 20m",
      orderValue: "$100.00",
      commission: "$50",
    },
    {
      id: 16,
      productImage: earphones,
      productName: "Product Name 16",
      dateAndTime: {
        date: "8 May '2024",
        time: "4:50 PM",
      },
      timeSpent: "3h 25m",
      orderValue: "$210.00",
      commission: "$90",
    },
    {
      id: 17,
      productImage: earphones,
      productName: "Product Name 17",
      dateAndTime: {
        date: "9 May '2024",
        time: "9:10 AM",
      },
      timeSpent: "2h 10m",
      orderValue: "$160.50",
      commission: "$75",
    },
    {
      id: 18,
      productImage: earphones,
      productName: "Product Name 18",
      dateAndTime: {
        date: "10 May '2024",
        time: "12:00 PM",
      },
      timeSpent: "3h 0m",
      orderValue: "$180.00",
      commission: "$80",
    },
    {
      id: 19,
      productImage: earphones,
      productName: "Product Name 19",
      dateAndTime: {
        date: "11 May '2024",
        time: "10:30 AM",
      },
      timeSpent: "1h 50m",
      orderValue: "$140.00",
      commission: "$65",
    },
    {
      id: 20,
      productImage: earphones,
      productName: "Product Name 20",
      dateAndTime: {
        date: "12 May '2024",
        time: "3:15 PM",
      },
      timeSpent: "3h 0m",
      orderValue: "$170.00",
      commission: "$70",
    },
    {
      id: 21,
      productImage: earphones,
      productName: "Product Name 21",
      dateAndTime: {
        date: "13 May '2024",
        time: "9:20 AM",
      },
      timeSpent: "4h 10m",
      orderValue: "$220.00",
      commission: "$90",
    },
    {
      id: 22,
      productImage: earphones,
      productName: "Product Name 22",
      dateAndTime: {
        date: "14 May '2024",
        time: "11:15 AM",
      },
      timeSpent: "2h 40m",
      orderValue: "$210.00",
      commission: "$85",
    },
    {
      id: 23,
      productImage: earphones,
      productName: "Product Name 23",
      dateAndTime: {
        date: "15 May '2024",
        time: "1:30 PM",
      },
      timeSpent: "3h 10m",
      orderValue: "$180.00",
      commission: "$80",
    },
    {
      id: 24,
      productImage: earphones,
      productName: "Product Name 24",
      dateAndTime: {
        date: "16 May '2024",
        time: "4:00 PM",
      },
      timeSpent: "1h 25m",
      orderValue: "$110.00",
      commission: "$60",
    },
    {
      id: 25,
      productImage: earphones,
      productName: "Product Name 25",
      dateAndTime: {
        date: "17 May '2024",
        time: "10:50 AM",
      },
      timeSpent: "2h 50m",
      orderValue: "$200.00",
      commission: "$85",
    },
    {
      id: 26,
      productImage: earphones,
      productName: "Product Name 26",
      dateAndTime: {
        date: "18 May '2024",
        time: "5:30 PM",
      },
      timeSpent: "3h 30m",
      orderValue: "$230.00",
      commission: "$95",
    },
    {
      id: 27,
      productImage: earphones,
      productName: "Product Name 27",
      dateAndTime: {
        date: "19 May '2024",
        time: "9:10 AM",
      },
      timeSpent: "2h 40m",
      orderValue: "$215.00",
      commission: "$90",
    },
    {
      id: 28,
      productImage: earphones,
      productName: "Product Name 28",
      dateAndTime: {
        date: "20 May '2024",
        time: "3:00 PM",
      },
      timeSpent: "3h 0m",
      orderValue: "$185.00",
      commission: "$80",
    },
    {
      id: 29,
      productImage: earphones,
      productName: "Product Name 29",
      dateAndTime: {
        date: "21 May '2024",
        time: "1:00 PM",
      },
      timeSpent: "4h 20m",
      orderValue: "$245.00",
      commission: "$105",
    },
    {
      id: 30,
      productImage: earphones,
      productName: "Product Name 30",
      dateAndTime: {
        date: "22 May '2024",
        time: "2:50 PM",
      },
      timeSpent: "3h 40m",
      orderValue: "$260.00",
      commission: "$110",
    },
    {
      id: 31,
      productImage: earphones,
      productName: "Product Name 31",
      dateAndTime: {
        date: "23 May '2024",
        time: "11:30 AM",
      },
      timeSpent: "1h 0m",
      orderValue: "$100.00",
      commission: "$50",
    },
    {
      id: 32,
      productImage: earphones,
      productName: "Product Name 32",
      dateAndTime: {
        date: "24 May '2024",
        time: "4:15 PM",
      },
      timeSpent: "2h 20m",
      orderValue: "$150.00",
      commission: "$65",
    },
  ];

export default function Purchases() {
  // Sorting states for each column
  const [orderSortOrder, setOrderSortOrder] = useState("asc");
  const [commissionSortOrder, setCommissionSortOrder] = useState("asc");
  const [timeSpentSortOrder, setTimeSpentSortOrder] = useState("asc");
  const [dateSortOrder, setDateSortOrder] = useState("asc");

  // State to handle sorted products
  const [sortedProducts, setSortedProducts] = useState(products);
  
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Function to parse time in 'h m' format to minutes
  const parseTime = (time) => {
    const [hours, minutes] = time.split("h").map((str) => str.trim().replace("m", ""));
    return parseInt(hours) * 60 + (minutes ? parseInt(minutes) : 0); // Convert to total minutes
  };

  // Generalized sorting function
  const handleSort = (field, order, setOrder) => {
    const sorted = [...sortedProducts];
    sorted.sort((a, b) => {
      const valA = field === "orderValue" || field === "commission"
        ? parseFloat(a[field].replace(/[^\d.-]/g, ""))
        : field === "timeSpent"
        ? parseTime(a[field])
        : new Date(a.dateAndTime.date).getTime();
      const valB = field === "orderValue" || field === "commission"
        ? parseFloat(b[field].replace(/[^\d.-]/g, ""))
        : field === "timeSpent"
        ? parseTime(b[field])
        : new Date(b.dateAndTime.date).getTime();

      return order === "asc" ? valA - valB : valB - valA;
    });
    setSortedProducts(sorted);
    setOrder(order === "asc" ? "desc" : "asc");
  };

  // Paginate function
  const paginate = (items, pageNumber, itemsPerPage) => {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  return (
    <div>
      <p className="text-3xl font-medium">Orders</p>

      <div className="my-10">
        <div className="hidden sm:block">
          <table className="w-full border-collapse text-left font-sans border border-gray-300">
            <thead>
              <tr className="border-b border-gray-300 bg-gray-50 py-2.5">
                {headers.map((header, index) => (
                  <th
                    key={index}
                    className="p-2.5 text-sm font-normal text-gray-600 cursor-pointer"
                    onClick={() =>
                      header === "Order Value"
                        ? handleSort("orderValue", orderSortOrder, setOrderSortOrder)
                        : header === "Commission"
                        ? handleSort("commission", commissionSortOrder, setCommissionSortOrder)
                        : header === "Time spent"
                        ? handleSort("timeSpent", timeSpentSortOrder, setTimeSpentSortOrder)
                        : header === "Date"
                        ? handleSort("date", dateSortOrder, setDateSortOrder)
                        : null
                    }
                  >
                    {header}
                    {(header === "Order Value" ||
                      header === "Commission" ||
                      header === "Time spent" ||
                      header === "Date") && (
                      <span className="ml-1 cursor-pointer">
                        {header === "Order Value"
                          ? orderSortOrder === "asc"
                            ? "↑"
                            : "↓"
                          : header === "Commission"
                          ? commissionSortOrder === "asc"
                            ? "↑"
                            : "↓"
                          : header === "Time spent"
                          ? timeSpentSortOrder === "asc"
                            ? "↑"
                            : "↓"
                          : dateSortOrder === "asc"
                          ? "↑"
                          : "↓"}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginate(sortedProducts, currentPage, itemsPerPage).map((product, rowIndex) => (
                <tr key={rowIndex} className="h-20">
                  <td className="p-2.5 flex items-center gap-3">
                    <img src={product.productImage} alt={product.productName} className="w-10 h-auto" />
                    <p>{truncateText(product.productName, 12)}</p>
                  </td>
                  <td className="p-2.5">
                    <p>{product.dateAndTime.date}</p>
                    <p className="text-xs">{product.dateAndTime.time}</p>
                  </td>
                  <td className="p-2.5">{product.timeSpent}</td>
                  <td className="p-2.5">{product.orderValue}</td>
                  <td className="p-2.5 font-bold">{product.commission}</td>
                  <td className="p-2.5 flex items-center gap-2 cursor-pointer">
                    <p className="text-xs text-gray-400">View Chat</p>
                    <ArrowUpRightIcon />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 text-gray-600 rounded disabled:bg-gray-300"
            >
              Prev
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 text-gray-600 rounded disabled:bg-gray-300 bg-[#115E56]"
            >
              Next
            </button>
          </div>
        </div>

        {/* Mobile View */}
        <div className="block sm:hidden mt-5">
          {products.map((product) => (
            <div key={product.id} className="border border-gray-300 p-4 rounded-md mb-4">
              <div className="flex items-center gap-3 mb-3">
                <img src={product.productImage} alt={product.productName} className="w-10 h-auto" />
                <p>{truncateText(product.productName, 12)}</p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div><strong>Date:</strong> {product.dateAndTime.date}</div>
                <div><strong>Time:</strong> {product.dateAndTime.time}</div>
                <div><strong>Time Spent:</strong> {product.timeSpent}</div>
                <div><strong>Order Value:</strong> {product.orderValue}</div>
                <div><strong>Commission:</strong> {product.commission}</div>
                <div className="flex items-center gap-2 mt-3">
                  <p className="text-xs text-gray-400">View Chat</p>
                  <ArrowUpRightIcon />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
