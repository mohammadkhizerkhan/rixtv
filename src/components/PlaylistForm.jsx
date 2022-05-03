import { React, useState, useEffect } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth, usePlaylist } from "../context";
import {
  createPlaylists,
  addToPlaylist,
  removeFromPlaylist,
  getPlaylists,
  isVideoInPlaylist,
  getSinglePlaylist,
} from "../services";

function PlaylistForm({ closeForm, video }) {
  const [playlistName, setPlaylistName] = useState("");
  const location=useLocation();
  const navigate=useNavigate();
  const { token } = useAuth();
  const { playlists, setPlaylists, setPlaylistData, playlistData } =
    usePlaylist();
  const submitPlaylist = (e) => {
    e.preventDefault();
    if(token){
      playlistName && createPlaylists(token, playlistName, setPlaylists)
      setPlaylistName("")
    }
    else{
      navigate("/login", {
        replace: true,
        state: { from: location.pathname },
      })
    }
  };

  useEffect(() => {
    getPlaylists(token, setPlaylists);
  }, [playlistData]);

  return (
    <>
      <div className="playlistForm">
        <form action="" className="flex-column-center align-center">
          <input
            type="text"
            className="input-style playlist-input margin-b-1"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
          />
          <button className="btn btn-s primary-btn font-15 font-bold margin-b-1" onClick={(e) => submitPlaylist(e)}>
            Add Playlist
          </button>
        {playlists.map((playlist) => {
          return (
            <label htmlFor={playlist._id} key={playlist._id} className="flex-row-center playlist-label-checkbox">
              <input
                type="checkbox"
                id={playlist._id}
                className="input playlist-checkbox"
                checked={playlist?.videos?.some(
                  (item) => item._id === video._id
                )}
                onChange={() =>
                  playlist?.videos?.some((item) => item._id === video._id)
                    ? removeFromPlaylist(
                        token,
                        playlist._id,
                        video._id,
                        setPlaylistData
                      )
                    : addToPlaylist(token, video, playlist._id, setPlaylistData)
                }
              />
              <span className="font-17">{playlist.title}</span>
            </label>
          );
        })}
        </form>
      </div>
      <div className="overlay playlistForm-overlay" onClick={closeForm}></div>
    </>
  );
}

export default PlaylistForm;
