import axios from "axios";

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
  } catch (error) {
    console.log("error in creater playlist", error);
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
  } catch (error) {
    console.log("error in delete playlist", error);
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

const addToPlaylist = async (token, video, playlistId,setPlaylistData,setPlaylists) => {
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
    setPlaylistData(data.playlist.videos)
  } catch (error) {
    console.log("error in add video to playlist",error)
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
    setPlaylistData(data.videos)
  } catch (error) {
    console.log("error in delete video to playlist",error)
  }
};

const isVideoInPlaylist=(playlistData,video)=>{
  console.log(playlistData)
  console.log(playlistData?.videos?.some(item=>item._id===video._id))
  return playlistData?.videos?.some(item=>item._id===video._id)
}

export { createPlaylists, getPlaylists, deletePlaylist, getSinglePlaylist,addToPlaylist,removeFromPlaylist ,isVideoInPlaylist};
