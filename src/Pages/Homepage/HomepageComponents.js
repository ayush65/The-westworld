/** @format */

import React from "react";
import { Link } from "react-router-dom";

function HomepageComponents() {
  return (
    <div className='homepage-components app'>
      <h1 className='home-logo'>The West World</h1>
      <h1 className='home-h1'>Welcome to The West World video Library</h1>
      <p className='home-para'>
        This video is the one stop destination for you fav songs and you can
        access the videos as well as make your own playlist and much more .
      </p>
      <div>
        {" "}
        <Link to='/explore' className='home-btn'>
          Explore
        </Link>
      </div>
      <div>
        <img
          src='https://i.gifer.com/8QEy.gif'
          alt='home-logo'
          className='home-img'
        />
      </div>
    </div>
  );
}

export default HomepageComponents;
