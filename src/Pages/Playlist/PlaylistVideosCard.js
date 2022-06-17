import React, { useState } from 'react'
import "../VideoCard/VideoCard.css"
import "./Playlist.css"
import db  from "../../firebase"
import { MdDelete } from "react-icons/md";
import { useVideo } from '../Context/VideoContext';
import { deleteDoc, doc } from 'firebase/firestore';

function PlaylistVideosCard({id, imgsrc ,value, avatar , songName , channelname , views , timestamp }) {
  const { statetotal} = useVideo();

  const [playlists ] = useState(statetotal.playlistvideo);

    
  const handleDelete = async (idle) => {
    const docRef = doc(db, playlists, idle);
    await deleteDoc(docRef);
   

  };
  
  return (
    <div>
            <div className="videocard-container" >
        <img  src={imgsrc} alt="" />
        <div className="video-info" >
            <div className="videocard-header">
            <img src={avatar} alt={id} className="video-avatar" />
            <h2>{songName}</h2>

            </div>
            <p className="channel-name">{channelname}</p>
            <div className="video-card-footer">
                <p className="footer-margin ">{views}</p>
                <p>{timestamp}</p>
            </div>
        </div>
        <div className="delete-icon" onClick={() => handleDelete(value)}><h5><MdDelete /></h5></div>
        </div>
    </div>
  )
}

export default PlaylistVideosCard