import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth, usePlaylist, useTheme } from "../context";
import { getPlaylists, deletePlaylist } from "../services";

function Playlist() {
  const { token } = useAuth();
  const {theme}=useTheme();
  const { playlists, setPlaylists, setPlaylistData, playlistData } =
    usePlaylist();
  useEffect(() => {
    getPlaylists(token, setPlaylists);
  }, []);
  return (
    <>
      {playlists.length ? (
        <></>
      ) : (
        <h1 className="text-center text-color">
          you have not added any playlist
        </h1>
      )}
      <section class="video-listing flex-row-wrap">
        {playlists.map((playlist) => {
          return (
            <div className='bg1 border-color playlist-card'>
              <Link
                to={`/playlists/${playlist._id}`}
                key={playlist._id}
                className="font-15 clr-white"
              >
                <div className="playlist-img-wrapper">
                  <img
                    src={`${
                      playlist.videos.length > 0
                        ? `https://i.ytimg.com/vi/${playlist.videos[0]._id}/0.jpg`
                        : "https://picsum.photos/270/150"
                    }`}
                    className="img-responsive playlist-img"
                    alt="playlist-tile"
                  />
                </div>
                <h1 className="text-color text-center">{playlist.title} ({playlist.videos.length})</h1>
              </Link>
              <button
                onClick={() =>
                  deletePlaylist(token, playlist._id, setPlaylists)
                }
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
