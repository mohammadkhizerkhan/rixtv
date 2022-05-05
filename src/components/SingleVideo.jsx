import React from "react";
import { Link, useParams, useNavigate,useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { DarkChecked, DarkHistory, DarkHome, DarkLike, DarkLink, DarkPlaylist, DarkWatchlater, LighLink, LightChecked, LightHistory, LightHome, LightLike, LightPlaylist, LightWatchlater } from "../assets";
import { useAuth, useLike, useTheme, useWatchLater } from "../context";
import { addToLike, removeFromLike,addToWatchLater,removeFromWatchLater } from "../services";

function SingleVideo() {
  const { videoId } = useParams();
  const { like, setLike } = useLike();
  const { watchLater, setWatchLater } = useWatchLater();
  const { token } = useAuth();
  const navigate = useNavigate();
  const location=useLocation();
  const {theme}=useTheme();
  const [video, setVideo] = useState({});
  const {
    _id,
    title,
    views,
    desc,
    channelName,
    channelImg,
    channelLink,
    likes,
    uploaded,
  } = video;

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`/api/video/${videoId}`);
        setVideo(data.video);
      } catch (error) {
        console.log("single video eroor", error);
      }
    })();
  }, [videoId]);
  

  return (
    <>
      <div class="iframe-div">
        <iframe
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <section class="single-video-details">
        <div class="video-card-desc">
          <h2 class="video-card-title">{title}</h2>
          <div class="video-views">
            {views} views &nbsp; {uploaded}
          </div>
        </div>
        <div class="single-video-btns flex-row-center">
          {like.some((like) => like._id === video._id) ? (
            <button
              class="btn btn-s flex-row-center single-video-btn"
              onClick={() => removeFromLike(token, video, setLike)}
            >
              <svg width="2rem" height="2rem" viewBox="0 0 1024 1024">
                <path
                  fill="#d6d6d6"
                  d="M885.9 490.3c3.6-12 5.4-24.4 5.4-37c0-28.3-9.3-55.5-26.1-77.7c3.6-12 5.4-24.4 5.4-37c0-28.3-9.3-55.5-26.1-77.7c3.6-12 5.4-24.4 5.4-37c0-51.6-30.7-98.1-78.3-118.4a66.1 66.1 0 0 0-26.5-5.4H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h129.3l85.8 310.8C372.9 889 418.9 924 470.9 924c29.7 0 57.4-11.8 77.9-33.4c20.5-21.5 31-49.7 29.5-79.4l-6-122.9h239.9c12.1 0 23.9-3.2 34.3-9.3c40.4-23.5 65.5-66.1 65.5-111c0-28.3-9.3-55.5-26.1-77.7zM184 456V172h81v284h-81zm627.2 160.4H496.8l9.6 198.4c.6 11.9-4.7 23.1-14.6 30.5c-6.1 4.5-13.6 6.8-21.1 6.7a44.28 44.28 0 0 1-42.2-32.3L329 459.2V172h415.4a56.85 56.85 0 0 1 33.6 51.8c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4l21.9 19a56.76 56.76 0 0 1 19.6 43c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4l21.9 19a56.76 56.76 0 0 1 19.6 43c0 9.7-2.3 18.9-6.9 27.3l-14 25.5l21.9 19a56.76 56.76 0 0 1 19.6 43c0 19.1-11 37.5-28.8 48.4z"
                ></path>
              </svg>
              <span class="margin-l-1 font-2">Dislike</span>
            </button>
          ) : (
            <button
              class="btn btn-s flex-row-center single-video-btn"
              onClick={() => (token?addToLike(token, video, setLike):navigate("/login",{replace:true,state:{from:location.pathname}}))}
            >
              {theme === "dark" ? (
              <LightLike/>
            ) : (
              <DarkLike/>
            )}
              <span class="margin-l-1  font-2">Like</span>
            </button>
          )}
          {watchLater.some(
            (watchlater) => watchlater._id === video._id
          ) ? (
            <button
              class="btn btn-s flex-row-center single-video-btn"
              onClick={() =>
                removeFromWatchLater(token, video, setWatchLater)
              }
            >
              {theme === "dark" ? (
              <LightChecked/>
            ) : (
              <DarkChecked/>
            )}
              <span class="margin-l-1 font-2">Watchlater</span>
            </button>
          ) : (
            <button
              class="btn btn-s flex-row-center single-video-btn inactive-btn"
              onClick={() => (token?addToWatchLater(token, video, setWatchLater):navigate("/login",{replace:true,state:{from:location.pathname}}))}
            >
              {theme === "dark" ? (
              <LightWatchlater/>
            ) : (
              <DarkWatchlater/>
            )}
              <span class="margin-l-1 font-2">Watchlater</span>
            </button>
          )}
          <button class="btn btn-s flex-row-center single-video-btn inactive-btn">
          {theme === "dark" ? (
              <LighLink/>
            ) : (
              <DarkLink/>
            )}
            <span class="margin-l-1 font-2">Share</span>
          </button>
          <button class="btn btn-s flex-row-center single-video-btn">
          {theme === "dark" ? (
              <LightPlaylist/>
            ) : (
              <DarkPlaylist/>
            )}
            <span class="margin-l-1 font-2">SAVE</span>
          </button>
        </div>
        <div class="channel-div flex-row-center">
          {/* <Link to={channelLink} target="_blank"> */}
          <img
            src={channelImg}
            alt=""
            class="img-responsive video-channel-avatar"
          />
          {/* </Link> */}
          <div class="channel-name font-2 font-bold">{channelName}</div>
        </div>
        <div class="video-desc flex-column-center">
          <h3 className="text-color">Description:</h3>
          <p class="line-height-m text-color">{desc}</p>
        </div>
      </section>
    </>
  );
}

export default SingleVideo;
