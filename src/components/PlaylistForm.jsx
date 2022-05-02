import { React, useState, useEffect } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
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
  const { token } = useAuth();
  const { playlists, setPlaylists, setPlaylistData, playlistData } =
    usePlaylist();
  const submitPlaylist = (e) => {
    e.preventDefault();
    playlistName && createPlaylists(token, playlistName, setPlaylists);
  };

  useEffect(() => {
    getPlaylists(token, setPlaylists);
  }, [playlists]);

  return (
    <>
      <div className="playlistForm">
        <form action="" className="flex-row-center justify-around">
          <input
            type="text"
            className="input-style playlist-input"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
          />
          <button className="btn btn-icon" onClick={(e) => submitPlaylist(e)}>
            <MdOutlineAddCircleOutline />
          </button>
        </form>
        {playlists.map((playlist) => {
          // console.log(playlist.videos)
          return (
            <label htmlFor="">
              <input
                type="checkbox"
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
              {playlist.title}
            </label>
          );
        })}
      </div>
      <div className="overlay playlistForm-overlay" onClick={closeForm}></div>
    </>
  );
}

export default PlaylistForm;
