import React from "react";

function DarkMore() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        link="http://www.w3.org/1999/xlink"
        width="2rem"
        height="2rem"
        viewBox="0 0 24 24"
      >
        <path
          fill="#000000"
          d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"
        ></path>
      </svg>
    </>
  );
}

function LightMore() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        link="http://www.w3.org/1999/xlink"
        width="2rem"
        height="2rem"
        viewBox="0 0 24 24"
      >
        <path
          fill="#d6d6d6"
          d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"
        ></path>
      </svg>
    </>
  );
}

export { DarkMore, LightMore };
