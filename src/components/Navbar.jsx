import React from "react";

function Navbar() {
  return (
    <nav class="flex-row-center navbar">
      <a class="flex-row-center logo-div" href="./index.html">
        <div class="logo-img">
          <svg width="5rem" height="5rem" viewBox="0 0 24 24">
            <path
              fill="#fbff00"
              d="m10 16.5l6-4.5l-6-4.5M22 12c0-5.54-4.46-10-10-10c-1.17 0-2.3.19-3.38.56l.7 1.94c.85-.34 1.74-.53 2.68-.53c4.41 0 8.03 3.62 8.03 8.03c0 4.41-3.62 8.03-8.03 8.03c-4.41 0-8.03-3.62-8.03-8.03c0-.94.19-1.88.53-2.72l-1.94-.66C2.19 9.7 2 10.83 2 12c0 5.54 4.46 10 10 10s10-4.46 10-10M5.47 3.97c.85 0 1.53.71 1.53 1.5C7 6.32 6.32 7 5.47 7c-.79 0-1.5-.68-1.5-1.53c0-.79.71-1.5 1.5-1.5Z"
            ></path>
          </svg>
        </div>
        <div class="logo-text">
          <span>RIXTV</span>
        </div>
      </a>
      <div class="flex-row-center search-div">
        <form action="" class="flex-row-center search-form">
          <input type="text" class="input input-search" />
          <button class="btn primary-btn flex-row-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              link="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--carbon"
              width="15"
              height="15"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 32 32"
            >
              <path
                fill="#393e46"
                d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9Z"
              ></path>
            </svg>
          </button>
        </form>
      </div>
      <div class="flex-row-center profile-logo-div">
        <svg width="4rem" height="4rem" viewBox="0 0 32 32">
          <path fill="#fbff00" d="M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5Z"></path>
          <path
            fill="currentColor"
            d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2Zm7.992 22.926A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0Z"
          ></path>
        </svg>
      </div>
    </nav>
  );
}

export default Navbar;
