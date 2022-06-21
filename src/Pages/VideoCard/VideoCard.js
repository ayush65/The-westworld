/** @format */

import React, { useEffect, useState } from "react";
import "./VideoCard.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsWatch } from "react-icons/bs";
import { GoThumbsup } from "react-icons/go";
import { RiPlayListAddLine } from "react-icons/ri";
import { MdWatchLater } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import db from "../../firebase";
import { useVideo } from "../Context/VideoContext";
import { onSnapshot, collection, doc, setDoc } from "firebase/firestore";
import uuid from "react-uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const reducerFunc = (statetotal, action) => {
  switch (action.type) {
    case "videoshow": {
      return {
        ...statetotal,
        count: action.payload,
      };
    }
    case "addplaylist": {
      return {
        ...statetotal,
        playlistvideo: action.payload,
      };
    }
    default:
      return statetotal;
  }
};

export const initialstate = {
  count: "",
  playlistvideo: "",
};

function VideoCard({
  imgsrc,
  avatar,
  songName,
  channelname,
  views,
  timestamp,
  videoid,
}) {
  const [modal, setModal] = useState(false);
  const [playlistmodal, setplaylistmodal] = useState(false);
  const [videoId] = useState(videoid);

  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    onSnapshot(collection(db, "playlist"), (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const sendpost = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "playlist", uuid());
    const payload = {
      name: input,
      imgsrc: imgsrc,
    };
    await setDoc(docRef, payload);
    setInput("");
    toast("Playlist created");
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleplaylistModal = () => {
    setplaylistmodal(!playlistmodal);
  };

  const { stateDispatch } = useVideo();

  const handlechange = (e) => {
    const { value } = e.target;
    toast("Added to Playlist");
    const docRef = doc(db, value, uuid());
    const payload = {
      imgsrc: imgsrc,
      avatar: avatar,
      songName: songName,
      channelname: channelname,
      views: views,
      timestamp: timestamp,
    };
    setDoc(docRef, payload);
  };

  const handleLikechange = () => {
    const docRef = doc(db, "like", uuid());
    const payload = {
      imgsrc: imgsrc,
      avatar: avatar,
      songName: songName,
      channelname: channelname,
      views: views,
      timestamp: timestamp,
    };
    setDoc(docRef, payload);
    toast("Video is been Liked");
  };

  const handleWatchlaterchange = () => {
    const docRef = doc(db, "watchlater", uuid());
    const payload = {
      imgsrc: imgsrc,
      avatar: avatar,
      songName: songName,
      channelname: channelname,
      views: views,
      timestamp: timestamp,
    };
    setDoc(docRef, payload);
    toast("Video is been Added to Watch Later");
  };

  return (
    <div>
      <div className='videocard-container'>
        <div className='model-icon'>
          <BsThreeDotsVertical onClick={toggleModal} />{" "}
        </div>
        <img src={imgsrc} alt='' />
        <Link
          to='/showvideo'
          onClick={() => {
            stateDispatch({ type: "videoshow", payload: videoId });
          }}
          className='text watch-now-button '>
          Watch Now
        </Link>
        <div className='video-info'>
          <div className='videocard-header'>
            <img src={avatar} alt='' className='video-avatar' />
            <h2>{songName}</h2>
          </div>
          <p className='channel-name'>{channelname}</p>
          <div className='video-card-footer'>
            <p className='footer-margin '>{views}</p>
            <p>{timestamp}</p>
          </div>
        </div>
      </div>
      {modal && (
        <div className='modal-container'>
          <div onClick={toggleModal} className='overlays'></div>
          <div className='modal-contents'>
            <div className='modal-header-icon' onClick={toggleplaylistModal}>
              <RiPlayListAddLine />
              <p>Add To Playlist</p>
            </div>
            <div className='modal-header-icon' onClick={handleLikechange}>
              <GoThumbsup />
              <p>Like</p>
            </div>
            <div className='modal-header-icon' onClick={handleWatchlaterchange}>
              <BsWatch />
              <p>Watch Later</p>
            </div>
            <div className='modal-header-icon'>
              <MdWatchLater />
              <p>History</p>
            </div>
          </div>
        </div>
      )}
      {playlistmodal && (
        <div className='modal-container'>
          <div onClick={toggleModal} className='overlays'></div>
          <div className='modal-contents'>
            <div className='modal-header-icon' onClick={toggleplaylistModal}>
              <AiFillCloseCircle />
              <p>Close</p>
            </div>
            <div className='modala'>
              <div onClick={toggleModal} className='overlay'></div>
              <div className='modal-content'>
                <h2>Playlists</h2>
                <form>
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type='text'
                  />
                  <button onClick={sendpost} type='submit'>
                    create playlist
                  </button>
                </form>

                <button className='close-modal' onClick={toggleplaylistModal}>
                  CLOSE <AiFillCloseCircle />
                </button>
                {posts.map(({ id, data: { name } }) => (
                  <div className='addtoplaylist-container' key={id}>
                    <input
                      type='checkbox'
                      name='db-names'
                      value={name}
                      id='flexCheckDefault'
                      onChange={handlechange}></input>
                    <p>{name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default VideoCard;
