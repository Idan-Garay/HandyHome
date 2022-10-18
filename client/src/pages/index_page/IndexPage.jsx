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
      </section>
      <div
        className=" flex-1 grow flex flex-col sm:flex-row" 
      >
        <IndexSidebar/>
        <IndexContent/>
      </div>
    </General>
  );
}

export default IndexPage;
