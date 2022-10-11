import React from "react";
import AvatarMenu from "./AvatarMenu";

function SmallNav() {
  return (
    <nav className="nav-bar col-span-2 sm:hidden flex justify-end items-center pr-[8px]">
      <div className="relative inline-block text-left">
        <AvatarMenu/>
      </div>
    </nav>
  );
}

export default SmallNav;
