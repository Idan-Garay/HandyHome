import React from "react";
import Logo from "./components/Logo";
import SmallNav from "./components/SmallNav";
import BigNav from "./components/BigNav";

function General({ children }) {
  return (
    <div className="flex flex-col text-black h-screen w-screen">
      <div
        className="grow-0 grid items-center"
        style={{ gridTemplate: "100% / 1fr 5fr 2fr" }}
      >
        <Logo />
        
        <SmallNav />
        <BigNav />
        
      </div>

      <div className="content grow flex flex-col">{children}</div>

      {/* insert footer if existing */}
    </div>
  );
}

export default General;
