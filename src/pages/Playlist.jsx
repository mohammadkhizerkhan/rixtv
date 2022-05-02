import {React,useEffect,useState} from 'react'
import axios from "axios";
import { useAuth } from '../context';
import { getPlaylists } from '../services';


function Playlist() {
    const {token}=useAuth();
    const [playlists, setPlaylists] = useState([])
    useEffect(() => {
        getPlaylists(token,setPlaylists)
    }, [])
    console.log(playlists)
    return (
        <>
        <h1>this is Playlist page</h1>
        </>
    )
}

export default Playlist
