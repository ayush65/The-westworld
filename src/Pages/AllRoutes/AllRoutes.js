/** @format */

import React from "react";
import { Routes, Route } from "react-router-dom";
import Explore from "../Explore/Explore";
import Homepage from "../Homepage/Homepage";
import Like from "../Like/Like";
import Playlist from "../Playlist/Playlist";
import PlaylistVideos from "../Playlist/PlaylistVideos";
import ShowVideo from "../ShowVideo/ShowVideo";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/like' element={<Like />} />
        <Route path='/playlistvideos' element={<PlaylistVideos />} />
        <Route path='/playlist' element={<Playlist />} />
        <Route path='/showvideo' element={<ShowVideo />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
