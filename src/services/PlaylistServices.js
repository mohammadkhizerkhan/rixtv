import axios from "axios";
import { CallToast } from "./CallToast";

const createPlaylists = async (token, playlistName, setPlaylists) => {
  try {
    const { data } = await axios.post(
      "/api/user/playlists",
      {
        playlist: {
          title: playlistName,
          description: "",
        },
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    setPlaylists(data.playlists);
    CallToast("success","Created a Playlist")
  } catch (error) {
    console.log("error in creater playlist", error);
    CallToast("error",error.message)
  }
};

const getPlaylists = async (token, setPlaylists) => {
  try {
    const { data } = await axios.get("/api/user/playlists", {
      headers: {
        authorization: token,
      },
    });
    setPlaylists(data.playlists);
  } catch (error) {
    console.log("error in get playlist", error);
    
  }
};

const deletePlaylist = async (token, playlistId, setPlaylists) => {
  try {
    const { data } = await axios.delete(`/api/user/playlists/${playlistId}`, {
      headers: {
        authorization: token,
      },
    });
    setPlaylists(data.playlists);
    CallToast("success","Playlist Deleted")
  } catch (error) {
    console.log("error in delete playlist", error);
    CallToast("error",error.message)
  }
};

const getSinglePlaylist = async(token,playlistId,setPlaylistData) => {
  try {
    const { data } =await axios.get(`/api/user/playlists/${playlistId}`, {
      headers: {
        authorization: token,
      },
    });
    setPlaylistData(data.playlist);
  } catch (error) {
    console.log("error in get playlist", error);
  }
};

const addToPlaylist = async (token, video, playlistId,setPlaylistData) => {
  try {
    const { data } = await axios.post(
      `/api/user/playlists/${playlistId}`,
      {
        video,
      },
      {
        headers: {
          authorization: token,
        },
      }
      );
      setPlaylistData(data.playlist)
      CallToast("success","Added to Playlist")
    } catch (error) {
      console.log("error in add video to playlist",error)
      CallToast("error",error.message)
  }
};
const removeFromPlaylist = async (token, playlistId,videoId,setPlaylistData) => {
  try {
    const { data } = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
      {
        headers: {
          authorization: token,
        },
      }
      );
      setPlaylistData(data.playlist)
      CallToast("success","Removed from Playlist")
  } catch (error) {
    console.log("error in delete video to playlist",error)
    CallToast("error",error.message)
  }
};

const isVideoInPlaylist=(playlistData,video)=>{
  return playlistData?.videos?.some(item=>item._id===video._id)
}

export { createPlaylists, getPlaylists, deletePlaylist, getSinglePlaylist,addToPlaylist,removeFromPlaylist ,isVideoInPlaylist};
