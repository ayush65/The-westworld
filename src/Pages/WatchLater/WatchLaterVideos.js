/** @format */

import React from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../../firebase";
import WatchLaterCard from "./WatchLaterCard";

function WatchLaterVideos() {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "watchlater"), (snapshot) => {
      setvideos(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  return (
    <div className='like-component-container playlistcard-video '>
      {videos.length === 0 ? (
        <div className='empty-playlist-container'>
          <h1>You Have No Watch Later videos</h1>
          <img
            src='https://c.tenor.com/7zKZuIk31GEAAAAM/bird-dance.gif'
            alt='playlist-gif'
          />
        </div>
      ) : (
        videos.map(
          ({
            id,
            data: {
              name,
              imgsrc,
              channel,
              timestamp,
              views,
              channelimg,
              videoid,
            },
          }) => (
            <WatchLaterCard
              className='video'
              key={id}
              imgsrc={imgsrc}
              songName={name}
              value={id}
              channelname={channel}
              avatar={channelimg}
              views={views}
              timestamp={timestamp}
              videoid={videoid}
            />
          )
        )
      )}
    </div>
  );
}

export default WatchLaterVideos;
