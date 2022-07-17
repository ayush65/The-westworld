/** @format */

import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Explore,
  History,
  Homepage,
  Like,
  Login,
  Playlist,
  PlaylistVideos,
  VideoRendering,
  Signup,
  WatchLater,
} from "../index";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/history' element={<History />} />
        <Route path='/' element={<Login />} />
        <Route path='/watchlater' element={<WatchLater />} />
        <Route path='/like' element={<Like />} />
        <Route path='/playlistvideos' element={<PlaylistVideos />} />
        <Route path='/playlist' element={<Playlist />} />
        <Route path='/showvideo' element={<VideoRendering />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/homepage' element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
