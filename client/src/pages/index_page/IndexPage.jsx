import React from "react";
import General from "../../layouts/general_layout/General";
import IndexSearchHeadline from "./IndexSearchHeadline";
import IndexSearchInput from "./IndexSearchInput";
import IndexSidebar from "./IndexSidebar";
import IndexContent from "./IndexContent";

function IndexPage() {
  return (
    <General>
      <section
        className="border flex-0 flex-col "
      >
      
        {/* <div className="searchbar-title  ">
          <IndexSearchHeadline/>
        </div>
        <div className="searchbar  h-24">
          <IndexSearchInput/>
        </div> */}
      </section>
      <div
        className=" flex-1 grow flex flex-col sm:flex-row" 
        // style={{ display: "grid", gridTemplate: "100% / 1fr 3fr" }}
      >
        <IndexSidebar/>
        <IndexContent/>
      </div>
    </General>
  );
}

export default IndexPage;
