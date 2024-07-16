import { RiHome5Fill } from "react-icons/ri";
import { FaRegCompass } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
export const SIDEBAR_LINKs = [
  {
    icon: <RiHome5Fill size={24} />,
    label: "Home",
    link: "/",
  },
  {
    icon: <FaRegCompass size={24} />,
    label: "Discover",
    link: "/discover",
  },
  {
    icon: <FaMicrophone size={24} />,
    label: "Create Podcast",
    link: "/create-podcast",
  },
  {
    icon: <IoPerson size={24} />,
    label: "My Profile",
    link: "/my-profile",
  },
];
