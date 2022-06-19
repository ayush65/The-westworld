/** @format */

import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import LikeComponent from "./LikeComponent";
import "./Like.css";

function Like() {
  return (
    <div className='like-clomponent'>
      <Sidebar />
      <LikeComponent />
    </div>
  );
}

export default Like;
