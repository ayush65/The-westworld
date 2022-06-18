import React from 'react'
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import "./Playlist.css"
import db  from "../../firebase"
import { useVideo } from '../Context/VideoContext';
import { deleteDoc, doc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PlaylistCard({value ,name , imgsrc }) {

    const { stateDispatch} = useVideo();

    
    const handleDelete = async (idle) => {
      toast("Playlist deleted");
      const docRef = doc(db, "playlist", idle);
      await deleteDoc(docRef);
    };

    
  return (
    <div className="playlistcard-container">
       <ToastContainer />
        <Link to="/playlistvideos" className="playlist-name" onClick={() =>
                      { stateDispatch({ type : 'addplaylist' , payload : name})} }>
        <h1 >{name}</h1>
        <img src={imgsrc} alt="" />
        </Link>
        <div className="delete-icon" onClick={() => handleDelete(value)}><MdDelete /></div>
    </div>
  )
}

export default PlaylistCard