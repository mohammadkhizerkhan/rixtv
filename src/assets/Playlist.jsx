import React from "react";

function DarkPlaylist() {
  return (
    <>
      <svg width="2rem" height="2rem" viewBox="0 0 24 24">
        <path
          fill="#393e46"
          d="M3 10h11v2H3zm0-4h11v2H3zm0 8h7v2H3zm17.59-2.07l-4.25 4.24l-2.12-2.12l-1.41 1.41L16.34 19L22 13.34z"
        ></path>
      </svg>
    </>
  );
}
function LightPlaylist() {
  return (
    <>
      <svg width="2rem" height="2rem" viewBox="0 0 24 24">
        <path
          fill="#d6d6d6"
          d="M13 10H3c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1zm0-4H3c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1zM3 16h6c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1zm19.21-3.79l.09.09c.39.39.39 1.02 0 1.41l-5.58 5.59a.996.996 0 0 1-1.41 0l-3.09-3.09a.996.996 0 0 1 0-1.41l.09-.09a.996.996 0 0 1 1.41 0l2.3 2.3l4.78-4.79c.38-.4 1.02-.4 1.41-.01z"
        ></path>
      </svg>
    </>
  );
}

export { DarkPlaylist, LightPlaylist };
