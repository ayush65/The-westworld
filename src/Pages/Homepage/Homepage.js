import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import HomepageComponents from "./HomepageComponents";
import "./Homepage.css"

function Homepage() {
  return (
    <div className="homepage-container">
      <Sidebar />
      <HomepageComponents />
    </div>
  );
}

export default Homepage;
