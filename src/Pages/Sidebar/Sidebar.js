import React from 'react'
import "./Sidebar.css"
import SidebarRows from './SidebarRows/SidebarRows'
import { BsHouse , BsWatch } from "react-icons/bs";
import { GoGlobe , GoThumbsup } from "react-icons/go";
import { RiPlayListAddLine } from "react-icons/ri";
import { MdWatchLater } from "react-icons/md";




function Sidebar() {
  return (
    <div className="sidebar-container">
        <SidebarRows title="Home" Icon={<BsHouse />}/>
        <SidebarRows title="Explore" Icon={<GoGlobe />}/>
        <SidebarRows title="Playlist" Icon={<RiPlayListAddLine />} />
        <SidebarRows title="Liked" Icon={<GoThumbsup />}/>
        <SidebarRows title="History" Icon={<BsWatch />}/>
        <SidebarRows title="Watch Later" Icon={<MdWatchLater />}/>
    </div>
  )
}

export default Sidebar