import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth, usePlaylist } from "../context";
import { getPlaylists, deletePlaylist } from "../services";

function Playlist() {
  const { token } = useAuth();
  const { playlists, setPlaylists,setPlaylistData,playlistData } = usePlaylist();
  useEffect(() => {
    getPlaylists(token, setPlaylists);
  }, []);
  return (
    <>
      {(playlists.length)?<></>:<h1 className="text-center text-color">you have not added any playlist</h1>}
      <section class="video-listing flex-row-wrap">
      {playlists.map((playlist) => {
        return (
          <div className="playlist-card">
            <Link to={`/playlists/${playlist._id}`} key={playlist._id} className="font-15 clr-white">
            <h1 className="text-color">{playlist.title}</h1>
            </Link>
            <button
              onClick={() => deletePlaylist(token, playlist._id, setPlaylists)}
              className="btn btn-s primary-btn font-15 font-bold"
            >
              delete
            </button>
          </div>
        );
      })}
      </section>
    </>
  );
}

export default Playlist;
