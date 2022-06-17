import React from 'react'
import {
    Routes,
    Route
  } from "react-router-dom";
import Homepage from '../Homepage/Homepage';
import Playlist from '../Playlist/Playlist';
import PlaylistVideos from '../Playlist/PlaylistVideos';
import ShowVideo from '../ShowVideo/ShowVideo';



function AllRoutes() {
  return (
    <div>
      <Routes>
      <Route   path="/playlistvideo" element={<PlaylistVideos />} /> 
      <Route   path="/playlist" element={<Playlist />} />  
      <Route   path="/showvideo" element={<ShowVideo />} />
      <Route   path="/" element={<Homepage />} />
    </Routes>

    </div>
  )
}

export default AllRoutes