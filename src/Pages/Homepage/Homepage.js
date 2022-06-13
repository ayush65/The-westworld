import React from 'react'
import RecommendedVideos from '../Recommendedvideos/RecommendedVideos'
import "./Homepage.css"
import Sidebar from '../Sidebar/Sidebar'

function Homepage() {
  return (
    <div className="homepage-components">
        <Sidebar />
        <RecommendedVideos />
    </div>
  )
}

export default Homepage