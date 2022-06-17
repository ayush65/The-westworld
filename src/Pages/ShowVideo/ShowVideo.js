import React from 'react'
import YouTube from 'react-youtube';
import "./ShowVideo.css"
import { AiFillLike , AiOutlineDislike } from 'react-icons/ai';
import { useVideo } from '../Context/VideoContext';
import { Link } from 'react-router-dom';



function ShowVideo() {
    const { statetotal} = useVideo();


    const opts = {
        height: "700",
        width: "100%",
        playerVars: {
          autoplay: 1,
        },
      };

  return (
    <div className="show-video-container">
         <Link to="/" 
                      className="text btn-margin-youtube">Back</Link>
    <div><YouTube videoId={statetotal.count} opts={opts} /> 
    <div className="video-container">
      <div><AiFillLike /> Like</div>
      <div><AiOutlineDislike /> DisLike</div>
    </div>
                
        </div>
 </div>
  )
}

export default ShowVideo