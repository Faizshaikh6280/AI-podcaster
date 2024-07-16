"use client";

import React from "react";
import Logo from "./Logo";
import { SIDEBAR_LINKs } from "@/constants/SidebarLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

function LeftSidebar() {
  const pathname = usePathname();

  return (
    <div className="basis-[15%] py-4 flex flex-col gap-10">
      <div className="px-4">
        <Logo />
      </div>

      {/* navlinks */}

      <ul className="list-none flex flex-col gap-4">
        {SIDEBAR_LINKs.map((link) => (
          <li
            key={link.label}
            className={`p-4 ${
              pathname === link.link
                ? "bg-gradient-to-r from-black-5 to-black-2 text-white-1 border-r-4 border-orange-1"
                : ""
            }`}
          >
            <Link href={link.link} className="flex gap-2 items-center">
              {link.icon}
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-auto px-4">
        <button className="p-2 rounded-lg hover:bg-orange-600 bg-orange-1 text-white-1 ">
          Logout
        </button>
      </div>
    </div>
  );
}

export default LeftSidebar;
