import { cn } from "@/lib/utils";
import React from "react";
import { GoHome } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";
import { Link, useLocation } from "react-router";
import { IoSearch } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { PiMonitorPlayLight } from "react-icons/pi";
import { PiMonitorPlayFill } from "react-icons/pi";
import { RiTelegram2Line } from "react-icons/ri";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BsPlusSquareFill } from "react-icons/bs";
import { BsPlusSquare } from "react-icons/bs";

interface AppSidebarProps {}

const menu = [
  {
    title: "Home",
    icon: GoHome,
    activeIcon: GoHomeFill,
    link: "/",
  },
  {
    title: "Search",
    icon: IoSearch,
    activeIcon: IoSearch,
    link: "/Search",
  },
  {
    title: "Explore",
    icon: MdOutlineExplore,
    activeIcon: MdOutlineExplore,
    link: "/Explore",
  },
  {
    title: "Reels",
    icon: PiMonitorPlayLight,
    activeIcon: PiMonitorPlayFill,
    link: "/Reels",
  },
  {
    title: "Messages",
    icon: RiTelegram2Line,
    activeIcon: RiTelegram2Fill,
    link: "/Messages",
  },
  {
    title: "Notifications",
    icon: FaRegHeart,
    activeIcon: FaHeart,
    link: "/Notifications",
  },
  {
    title: "Create",
    icon: BsPlusSquare,
    activeIcon: BsPlusSquareFill,
    link: "/Create",
  },
];

const AppSidebar: React.FC<AppSidebarProps> = ({}) => {
  const { pathname } = useLocation();

  return (
    <>
      <aside className="flex flex-col gap-8 w-full border-r-1 border-stone-900 border-solid p-8 px-3">
        <div className="flex items-center gap-5">
          <h1 className="text-5xl font-extrabold  text-gray-200 leading-tight drop-shadow-md dynapuff">
            VISTA
          </h1>
          <img src="../../../public/logos/logo.webp" className="w-10 h-10" />
        </div>
        <div className="flex flex-col gap-3 w-full">
          {menu.map((Item) => (
            <Link
              key={Item.title}
              to={Item.link}
              className={cn(
                "w-full flex Items-center gap-4 rounded-xl cursor-pointer p-3    text-gray-200 text-2xl hover:bg-stone-900",
                pathname.includes(Item.link) &&
                  pathname.endsWith(Item.link) &&
                  "font-bold"
              )}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                {pathname.includes(Item.link) &&
                pathname.endsWith(Item.link) ? (
                  <Item.activeIcon />
                ) : (
                  <Item.icon />
                )}
              </div>
              <p className="text-base ">{Item.title}</p>
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
};

export default AppSidebar;
