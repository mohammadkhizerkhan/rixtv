import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useLike } from "../context";
import { addToLike, removeFromLike } from "../services/LikedServices";

function VideoCard({ video }) {
  const [moreBtn, setMoreBtn] = useState(false);
  const { token } = useAuth();
  const { likeState, likeDispatch } = useLike();
  const navigate = useNavigate();
  const {
    _id,
    title,
    views,
    channelName,
    channelImg,
    channelLink,
    likes,
    uploaded,
  } = video;
  return (
    <>
      <div class="video-card" onMouseLeave={() => setMoreBtn(false)}>
        <Link to={`/video/${_id}`}>
          <div className="thumbnail-div">
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
            <Link class="channel-name white-color font-bold" to={channelLink}>
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
              <svg width="3rem" height="3rem" viewBox="0 0 24 24">
                <path
                  fill="#d6d6d6"
                  d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"
                ></path>
              </svg>
            </button>
            {moreBtn && (
              <div className="dropdown-label-btns">
                {likeState.liked.some((like) => like._id === video._id) ? (
                  <button
                    className="btn btn-m dropdown-btn text-left font-bold font-15"
                    onClick={() => removeFromLike(token, video, likeDispatch)}
                  >
                    Dislike
                  </button>
                ) : (
                  <button
                    className="btn btn-m dropdown-btn text-left font-bold font-15"
                    onClick={() => addToLike(token, video, likeDispatch)}
                  >
                    Like
                  </button>
                )}
                <button className="btn btn-m dropdown-btn text-left font-bold font-15">
                  wathlater
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoCard;
