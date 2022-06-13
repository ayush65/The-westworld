import React from 'react'
import "./SidebarRows.css"

function SidebarRows({title , Icon}) {
  return  (
    <div className="sidebar-row">
        <div className="sidebar-icons"><h3>{Icon}</h3></div>
        <h2>{title}</h2>
    </div>
  )
}

export default SidebarRows