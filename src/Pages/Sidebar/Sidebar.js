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
        <h3>
          <BsHouse />
        </h3>
        <h2>Home</h2>
      </Link>
      <Link to='/' className='sidebar-icons'>
        <h3>
          <GoGlobe />
        </h3>
        <h2>Explore</h2>
      </Link>
      <Link to='/playlist' className='sidebar-icons'>
        <h3>
          <RiPlayListAddLine />
        </h3>
        <h2>Playlist</h2>
      </Link>
      <Link to='/' className='sidebar-icons'>
        <h3>
          <GoThumbsup />
        </h3>
        <h2>Liked</h2>
      </Link>
      <Link to='/' className='sidebar-icons'>
        <h3>
          <BsWatch />
        </h3>
        <h2>History</h2>
      </Link>
      <Link to='/' className='sidebar-icons'>
        <h3>
          <MdWatchLater />
        </h3>
        <h2>Watch Later</h2>
      </Link>
    </div>
  );
}

export default Sidebar;
