import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { DarkMore, LightMore } from "../assets";
import { useAuth, useHistory, useLike, useWatchLater,useTheme } from "../context";
import {
  addToLike,
  removeFromLike,
  addToWatchLater,
  removeFromWatchLater,
  addToHistory,
  removeFromHistory,
} from "../services";
import PlaylistForm from "./PlaylistForm";
function VideoCard({ video }) {
  const [moreBtn, setMoreBtn] = useState(false);
  const [playlistForm, setPlaylistForm] = useState(false);
  const location = useLocation();
  const { token } = useAuth();
  const { theme } = useTheme();
  const { history, setHistory } = useHistory();
  const { like, setLike } = useLike();
  const { watchLater, setWatchLater } = useWatchLater();
  const navigate = useNavigate();
  const { _id, title, views, channelName, channelImg, channelLink, uploaded } =
    video;
  return (
    <>
      <div class="video-card" onMouseLeave={() => setMoreBtn(false)}>
        <Link to={`/video/${_id}`}>
          <div
            className="thumbnail-div"
            onClick={() =>
              history.every((item) => item._id !== video._id) &&
              addToHistory(token, video, setHistory)
            }
          >
            <img
              src={`https://i.ytimg.com/vi/${_id}/0.jpg`}
              class="img-responsive video-img"
              alt=""
            />
            <span class="video-time">09:30</span>
          </div>
        </Link>
        <div class="video-card-details">
          <a href={channelLink}>
            <img
              src={channelImg}
              alt=""
              class="img-responsive video-channel-avatar"
            />
          </a>
          <div class="video-card-desc">
            <h3 class="video-card-title">{title}</h3>
            <Link class="channel-name font-bold" to={channelLink}>
              {channelName}
            </Link>
            <div class="video-views">
              {views} views &nbsp; {uploaded}
            </div>
          </div>
          <div className="dropdown-label-div">
            <button
              className="btn btn-icon btn-4"
              onClick={() => setMoreBtn(!moreBtn)}
            >
              {
                theme==="dark"?<LightMore/>:<DarkMore/>
              }
            </button>
            {moreBtn && (
              <div className="dropdown-label-btns">
                {like?.some((item) => item._id === video._id) ? (
                  <button
                    className="btn btn-m dropdown-btn text-left font-bold font-15 text-color"
                    onClick={() => removeFromLike(token, video, setLike)}
                  >
                    Dislike
                  </button>
                ) : (
                  <button
                    className="btn btn-m dropdown-btn text-left font-bold font-15 text-color"
                    onClick={() =>
                      token
                        ? addToLike(token, video, setLike)
                        : navigate("/login", {
                            replace: true,
                            state: { from: location.pathname },
                          })
                    }
                  >
                    Like
                  </button>
                )}
                {watchLater.some(
                  (watchLater) => watchLater._id === video._id
                ) ? (
                  <button
                    className="btn btn-m dropdown-btn text-left font-bold font-15 text-color"
                    onClick={() =>
                      removeFromWatchLater(token, video, setWatchLater)
                    }
                  >
                    Remove from watchLater
                  </button>
                ) : (
                  <button
                    className="btn btn-m dropdown-btn text-left font-bold font-15 text-color"
                    onClick={() =>
                      token
                        ? addToWatchLater(token, video, setWatchLater)
                        : navigate("/login", {
                            replace: true,
                            state: { from: location.pathname },
                          })
                    }
                  >
                    Add to watchLater
                  </button>
                )}
                {
                  <button
                    class="btn btn-m dropdown-btn text-left font-bold font-15 text-color"
                    onClick={() => setPlaylistForm(!playlistForm)}
                  >
                    Add to Playlist
                  </button>
                }
                {history.some((item) => item._id === video._id) && (
                  <button
                    className="btn btn-m dropdown-btn text-left font-bold font-15"
                    onClick={() => removeFromHistory(token, video, setHistory)}
                  >
                    Remove from History
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {playlistForm && (
        <div className="playlistForm-div">
          <PlaylistForm
            closeForm={() => setPlaylistForm(false)}
            video={video}
          />
        </div>
      )}
    </>
  );
}

export default VideoCard;
