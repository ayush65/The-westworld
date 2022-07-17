/** @format */

import React from "react";
import { Routes, Route } from "react-router-dom";
import Explore from "../Explore/Explore";
import History from "../History/History";
import Homepage from "../Homepage/Homepage";
import Like from "../Like/Like";
import Login from "../Login/Login";
import Playlist from "../Playlist/Playlist";
import PlaylistVideos from "../Playlist/PlaylistVideos";
import VideoRendering from "../ShowVideo/VideoRendering";
import Signup from "../Signup/Signup";
import WatchLater from "../WatchLater/WatchLater";

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
