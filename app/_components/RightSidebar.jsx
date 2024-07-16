import Image from "next/image";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import RightCarousl from "./RightCarousl";
const user = {
  id: "sdsff",
  profilePic: "/image/avatar.png",
  name: "Marvin James",
};

function RightSidebar() {
  return (
    <div className="basis-[25%] px-4 py-8">
      <div className="user-info flex items-center gap-3">
        <Image
          src={user.profilePic}
          width={36}
          height={36}
          className="rounded-full"
          alt={`${user.name} profile image`}
        />
        <p className="text-white-1">{user.name}</p>
        <button className="ml-auto">
          <MdOutlineKeyboardArrowRight className="text-orange-1 " size={32} />
        </button>
      </div>
      <RightCarousl />
    </div>
  );
}

export default RightSidebar;
