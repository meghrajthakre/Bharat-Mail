import { Inbox, Megaphone, Users, RefreshCw } from "lucide-react";

const categoriesData = [
  {
    id: 1,
    name: "Primary",
    icon: Inbox,
    color: "#1A73E8", // Blue
  },
  {
    id: 2,
    name: "Promotions",
    icon: Megaphone,
    color: "#188038", // Green
  },
  {
    id: 3,
    name: "Social",
    icon: Users,
    color: "#C5221F", // Red
  },
  {
    id: 4,
    name: "Updates",
    icon: RefreshCw,
    color: "#F9AB00", // Yellow
  },
];

export default categoriesData;
