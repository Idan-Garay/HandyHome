import React from "react";
import AvatarMenu from "./AvatarMenu";

function BigNav() {
  return (
    <>
      <nav className="nav-bar hidden sm:block text-right"></nav>
      <div className="profile-nav hidden sm:block ">
        <div className="relative flex justify-end items-center gap-5">
          <a href="#" className=" text-lg font-">Discover</a>
          <AvatarMenu />
        </div>
      </div>
    </>
  );
}

export default BigNav;
