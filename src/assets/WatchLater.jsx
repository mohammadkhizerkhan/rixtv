import React from "react";

function DarkWatchlater() {
  return (
    <>
      <svg width="2rem" height="2rem" viewBox="0 0 24 24">
        <path
          fill="#393e46"
          d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm.5-13H11v6l5.2 3.2l.8-1.3l-4.5-2.7V7z"
        ></path>
      </svg>
    </>
  );
}
function DarkChecked() {
  return (
    <>
      <svg width="2rem" height="2rem" viewBox="0 0 24 24">
        <path
          fill="#393e46"
          d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41L9 16.17z"
        ></path>
      </svg>
    </>
  );
}
function LightChecked() {
  return (
    <>
      <svg width="2rem" height="2rem" viewBox="0 0 24 24">
        <path
          fill="#d6d6d6"
          d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41L9 16.17z"
        ></path>
      </svg>
    </>
  );
}
function LightWatchlater() {
  return (
    <>
      <svg width="2rem" height="2rem" viewBox="0 0 24 24">
        <path
          fill="#d6d6d6"
          d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm.5-13H11v6l5.2 3.2l.8-1.3l-4.5-2.7V7z"
        ></path>
      </svg>
    </>
  );
}

export { DarkWatchlater, LightWatchlater,LightChecked, DarkChecked };
