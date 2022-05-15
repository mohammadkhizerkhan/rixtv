import React from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  DarkChecked,
  DarkDislike,
  DarkHistory,
  DarkHome,
  DarkLike,
  DarkLink,
  DarkPlaylist,
  DarkWatchlater,
  LighLink,
  LightChecked,
  LightDislike,
  LightHistory,
  LightHome,
  LightLike,
  LightPlaylist,
  LightWatchlater,
} from "../assets";
import { useAuth, useLike, useTheme, useWatchLater } from "../context";
import {
  addToLike,
  removeFromLike,
  addToWatchLater,
  removeFromWatchLater,
  CallToast,
} from "../services";
import PlaylistForm from "./PlaylistForm";

function SingleVideo() {
  const { videoId } = useParams();
  const { like, setLike } = useLike();
  const { watchLater, setWatchLater } = useWatchLater();
  const { token } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useTheme();
  const [video, setVideo] = useState({});
  const [playlistForm, setPlaylistForm] = useState(false);
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
              {theme === "dark" ? <LightDislike /> : <DarkDislike />}

              <span class="margin-l-1 font-2">Dislike</span>
            </button>
          ) : (
            <button
              class="btn btn-s flex-row-center single-video-btn"
              onClick={() =>
                token
                  ? addToLike(token, video, setLike)
                  : navigate("/login", {
                      replace: true,
                      state: { from: location.pathname },
                    })
              }
            >
              {theme === "dark" ? <LightLike /> : <DarkLike />}
              <span class="margin-l-1  font-2">Like</span>
            </button>
          )}
          {watchLater.some((watchlater) => watchlater._id === video._id) ? (
            <button
              class="btn btn-s flex-row-center single-video-btn"
              onClick={() => removeFromWatchLater(token, video, setWatchLater)}
            >
              {theme === "dark" ? <LightChecked /> : <DarkChecked />}
              <span class="margin-l-1 font-2">Watchlater</span>
            </button>
          ) : (
            <button
              class="btn btn-s flex-row-center single-video-btn inactive-btn"
              onClick={() =>
                token
                  ? addToWatchLater(token, video, setWatchLater)
                  : navigate("/login", {
                      replace: true,
                      state: { from: location.pathname },
                    })
              }
            >
              {theme === "dark" ? <LightWatchlater /> : <DarkWatchlater />}
              <span class="margin-l-1 font-2">Watchlater</span>
            </button>
          )}
          <button
            class="btn btn-s flex-row-center single-video-btn inactive-btn"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              CallToast("success","Link copied to clipboard")
            }}
          >
            {theme === "dark" ? <LighLink /> : <DarkLink />}
            <span class="margin-l-1 font-2">Share</span>
          </button>
          <button class="btn btn-s flex-row-center single-video-btn"  onClick={() => setPlaylistForm(!playlistForm)}>
            {theme === "dark" ? <LightPlaylist /> : <DarkPlaylist />}
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

export default SingleVideo;
