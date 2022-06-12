import React from 'react'
import "./VideoCard.css"

function VideoCard({imgsrc , avatar , songName , channelname , views , timestamp}) {
  return (
    <div className="videocard-container">
        <img src={imgsrc} alt="" />
        <div className="video-info">
            <div className="videocard-header">
            <img src={avatar} alt="" className="video-avatar" />
            <h2>{songName}</h2>
            </div>
            <p className="channel-name">{channelname}</p>
            <div className="video-card-footer">
                <p className="footer-margin">{views}</p>
                <p>{timestamp}</p>
            </div>

        </div>
    </div>
  )
}

export default VideoCard