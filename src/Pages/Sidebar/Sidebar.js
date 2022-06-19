/** @format */

import React from "react";
import "./Sidebar.css";
import { BsHouse, BsWatch } from "react-icons/bs";
import { GoGlobe, GoThumbsup } from "react-icons/go";
import { RiPlayListAddLine } from "react-icons/ri";
import { MdWatchLater } from "react-icons/md";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className='sidebar-container'>
      <Link to='/' className='sidebar-icons'>
        <h1>
          <BsHouse />
        </h1>
      </Link>
      <Link to='/explore' className='sidebar-icons'>
        <h1>
          <GoGlobe />
        </h1>
      </Link>
      <Link to='/playlist' className='sidebar-icons'>
        <h1>
          <RiPlayListAddLine />
        </h1>
      </Link>
      <Link to='/like' className='sidebar-icons'>
        <h1>
          <GoThumbsup />
        </h1>
      </Link>
      <Link to='/' className='sidebar-icons'>
        <h1>
          <BsWatch />
        </h1>
      </Link>
      <Link to='/' className='sidebar-icons'>
        <h1>
          <MdWatchLater />
        </h1>
      </Link>
    </div>
  );
}

export default Sidebar;
