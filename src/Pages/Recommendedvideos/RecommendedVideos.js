import React from 'react'
import VideoCard from '../VideoCard/VideoCard'
import "./RecommendedVideos.css"

import { onSnapshot, collection  } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../../firebase";

function RecommendedVideos() {

    const [likedposts , setLikedPosts] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, "videos"), (snapshot) => {
             console.log(snapshot.docs)
             setLikedPosts(snapshot.docs.map((doc) => ({

                       id: doc.id,
                       data: doc.data(),
                     })))
            })
            },[]);

            console.log(likedposts);
    

  return (
    <div className="recommendedvideo-container">
        <h2>Recommended</h2>
        <div className="recommended-video">
        {likedposts.map(({ id , data : { name , imgsrc , channel , timestamp , views , channelimg}})  =>  (

                            <VideoCard
                            key={id} 
                            imgsrc={imgsrc}
                            songName={name}
                            channelname={channel}
                            avatar={channelimg}
                            views={views}
                            timestamp={timestamp}
                            />
        ))
        }
        </div>
        </div>
  )
}

export default RecommendedVideos