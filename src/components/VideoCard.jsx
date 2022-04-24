import React from "react";

function VideoCard({ video }) {
  const {_id,title,views,channelName,channelImg,channelLink,likes,uploaded} =video;
  return (
    <div class="video-card">
      <img
        src={`https://i.ytimg.com/vi/${_id}/0.jpg`}
        class="img-responsive video-img"
        alt=""
      />
      <span class="video-time">09:30</span>
      <div class="video-card-details">
          <a href={channelLink} target="_blank">
        <img
          src={channelImg}
          alt=""
          class="img-responsive video-channel-avatar"
        />
          </a>
        <div class="video-card-desc">
          <h3 class="video-card-title">{title}</h3>
          <a class="channel-name white-color font-bold" href={channelLink} target="_blank">{channelName}</a>
          <div class="video-views">{views} views &nbsp; {uploaded}</div>
        </div>
        <svg width="3rem" height="3rem" viewBox="0 0 24 24">
          <path
            fill="#d6d6d6"
            d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default VideoCard;