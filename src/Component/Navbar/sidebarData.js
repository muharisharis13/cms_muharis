import { FaBoxOpen, FaHome, FaDiceD6, FaDropbox } from "react-icons/fa";

export const DataSidebar = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <FaHome />
  },
  {
    path: "/barang",
    name: "Barang",
    icon: <FaBoxOpen />
  },
  {
    path: "/barangmasuk",
    name: "Barang Masuk",
    icon: <FaDiceD6 />
  },
  {
    path: "/barangkeluar",
    name: "Barang Keluar",
    icon: <FaDropbox />
  },
]