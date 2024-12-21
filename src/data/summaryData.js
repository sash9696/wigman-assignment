import { ChatIcon, TagIcon, CheckIcon, CoinsIcon, CoinIcon, PiggyBankIcon } from "../assets"; // Importing icons

export const summaryData = [
  {
    id: 1,
    icon: ChatIcon,  // Use the component itself, not the JSX
    title: "Consultations",
    count: "24",
    percent: "15",
    type: "increase",
  },
  {
    id: 2,
    icon: TagIcon,  // Use the component itself
    title: "Orders Placed",
    count: "12",
    percent: "15",
    type: "decrease",
  },
  {
    id: 3,
    icon: CheckIcon,  // Use the component itself
    title: "Conversion",
    count: "50",
    percent: "15",
    type: "decrease",
  },
  {
    id: 4,
    icon: CoinsIcon,  // Use the component itself
    title: "Total Sales Value",
    count: "$2,400",
    percent: "15",
    type: "increase",
  },
  {
    id: 5,
    icon: CoinIcon,  // Use the component itself
    title: "AVG Order Value",
    count: "$240",
    percent: "15",
    type: "increase",
  },
  {
    id: 6,
    icon: PiggyBankIcon,  // Use the component itself
    title: "Commission Paid",
    count: "$240",
    percent: "15",
    type: "increase",
  },
];
