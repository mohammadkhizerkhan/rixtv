import {React,useState} from 'react'
import {
    MdOutlineAddCircleOutline,
  } from "react-icons/md";
import { useAuth } from '../context';
import {createPlaylist} from "../services"

function PlaylistForm({closeForm,video}) {
    const [playlistName, setPlaylistName] = useState("")
    const {token}=useAuth();
    const submitPlaylist=(e)=>{
        e.preventDefault();
        playlistName && createPlaylist(token,playlistName)
    }
    return (
        <>
        <div className="playlistForm">
            <form action="" className='flex-row-center justify-around'>
                <input type="text" className='input-style playlist-input' value={playlistName} onChange={(e)=>setPlaylistName(e.target.value)}/>
                <button
                      className="btn btn-icon"
                      onClick={(e) => submitPlaylist(e)}
                    >
                      <MdOutlineAddCircleOutline />
                    </button>
            </form>
        </div>
        <div className="overlay playlistForm-overlay" onClick={closeForm}></div>
        </>
    )
}

export default PlaylistForm
