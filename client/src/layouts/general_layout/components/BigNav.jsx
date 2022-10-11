import React from "react";
import AvatarMenu from "./AvatarMenu";

function BigNav() {
  return (
    <>
      <nav className="nav-bar hidden sm:block">
      </nav>
      <div className="profile-nav hidden sm:block  pr-[8px] text-right">
        <div className="relative inline-block text-left ">
          <AvatarMenu />
        </div>
      </div>
    </>
  );
}

export default BigNav;
