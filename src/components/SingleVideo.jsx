import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth, useLike } from "../context";
import { addToLike,removeFromLike } from "../services/LikedServices";

function SingleVideo() {
  const { videoId } = useParams();
  const { likeState, likeDispatch } = useLike();
  console.log(likeState.liked)
  const { token } = useAuth();
  const navigate = useNavigate();
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
          {likeState.liked.some((like) => like._id === video._id) ? (
            <button class="btn btn-s flex-row-center single-video-btn" onClick={()=>removeFromLike(token,video,likeDispatch)}>
            <svg width="2rem" height="2rem" viewBox="0 0 1024 1024">
              <path
                fill="#d6d6d6"
                d="M885.9 490.3c3.6-12 5.4-24.4 5.4-37c0-28.3-9.3-55.5-26.1-77.7c3.6-12 5.4-24.4 5.4-37c0-28.3-9.3-55.5-26.1-77.7c3.6-12 5.4-24.4 5.4-37c0-51.6-30.7-98.1-78.3-118.4a66.1 66.1 0 0 0-26.5-5.4H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h129.3l85.8 310.8C372.9 889 418.9 924 470.9 924c29.7 0 57.4-11.8 77.9-33.4c20.5-21.5 31-49.7 29.5-79.4l-6-122.9h239.9c12.1 0 23.9-3.2 34.3-9.3c40.4-23.5 65.5-66.1 65.5-111c0-28.3-9.3-55.5-26.1-77.7zM184 456V172h81v284h-81zm627.2 160.4H496.8l9.6 198.4c.6 11.9-4.7 23.1-14.6 30.5c-6.1 4.5-13.6 6.8-21.1 6.7a44.28 44.28 0 0 1-42.2-32.3L329 459.2V172h415.4a56.85 56.85 0 0 1 33.6 51.8c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4l21.9 19a56.76 56.76 0 0 1 19.6 43c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4l21.9 19a56.76 56.76 0 0 1 19.6 43c0 9.7-2.3 18.9-6.9 27.3l-14 25.5l21.9 19a56.76 56.76 0 0 1 19.6 43c0 19.1-11 37.5-28.8 48.4z"
              ></path>
            </svg>
            <span class="margin-l-1 white-color font-2">Dislike</span>
          </button>
          ) : (
            <button
              class="btn btn-s flex-row-center single-video-btn"
              onClick={() => addToLike(token, video, likeDispatch)}
            >
              <svg width="2rem" height="2rem" viewBox="0 0 1024 1024">
                <path
                  fill="#d6d6d6"
                  d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7c0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4c47.6-20.3 78.3-66.8 78.3-118.4c0-12.6-1.8-25-5.4-37c16.8-22.2 26.1-49.4 26.1-77.7c0-12.6-1.8-25-5.4-37c16.8-22.2 26.1-49.4 26.1-77.7c-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19l13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19l13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19l13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7c9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"
                ></path>
              </svg>
              <span class="margin-l-1 white-color font-2">Like</span>
            </button>
          )}

          <button class="btn btn-s flex-row-center single-video-btn inactive-btn">
            <svg width="2rem" height="2rem" viewBox="0 0 24 24">
              <path
                fill="#d6d6d6"
                d="M4.222 19.778a4.983 4.983 0 0 0 3.535 1.462a4.986 4.986 0 0 0 3.536-1.462l2.828-2.829l-1.414-1.414l-2.828 2.829a3.007 3.007 0 0 1-4.243 0a3.005 3.005 0 0 1 0-4.243l2.829-2.828l-1.414-1.414l-2.829 2.828a5.006 5.006 0 0 0 0 7.071zm15.556-8.485a5.008 5.008 0 0 0 0-7.071a5.006 5.006 0 0 0-7.071 0L9.879 7.051l1.414 1.414l2.828-2.829a3.007 3.007 0 0 1 4.243 0a3.005 3.005 0 0 1 0 4.243l-2.829 2.828l1.414 1.414l2.829-2.828z"
              ></path>
              <path
                fill="currentColor"
                d="m8.464 16.95l-1.415-1.414l8.487-8.486l1.414 1.415z"
              ></path>
            </svg>
            <span class="margin-l-1 white-color font-2">Share</span>
          </button>
          <button class="btn btn-s flex-row-center single-video-btn inactive-btn">
            <svg width="2rem" height="2rem" viewBox="0 0 24 24">
              <path
                fill="#d6d6d6"
                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm.5-13H11v6l5.2 3.2l.8-1.3l-4.5-2.7V7z"
              ></path>
            </svg>
            <span class="margin-l-1 white-color font-2">Watchlater</span>
          </button>
          <button class="btn btn-s flex-row-center single-video-btn">
            <svg width="2rem" height="2rem" viewBox="0 0 24 24">
              <path
                fill="#d6d6d6"
                d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41L9 16.17z"
              ></path>
            </svg>
            <span class="margin-l-1 white-color font-2">Watchlater</span>
          </button>
          <button class="btn btn-s flex-row-center single-video-btn">
            <svg width="2rem" height="2rem" viewBox="0 0 24 24">
              <path
                fill="#d6d6d6"
                d="M14 10H3v2h11v-2zm0-4H3v2h11V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM3 16h7v-2H3v2z"
              ></path>
            </svg>
            <span class="margin-l-1 white-color font-2">SAVE</span>
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
          <div class="channel-name font-2 font-bold">IGN</div>
        </div>
        <div class="video-desc flex-column-center">
          <h3>Description:</h3>
          <p class="line-height-m">{desc}</p>
        </div>
      </section>
    </>
  );
}

export default SingleVideo;
