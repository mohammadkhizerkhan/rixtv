import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ACTION_TYPE } from "../Action";
import { useAuth, useTheme } from "../context";
import { useData } from "../context";

function Navbar() {
  const { token } = useAuth();
  const { filterDispatach } = useData();
  const { theme, toggleThemeHandler } = useTheme();
  const searchHandler = (e) => {
    e.preventDefault();
    filterDispatach({ type: ACTION_TYPE.SEARCH, payload: e.target.value });
  };
  return (
    <nav class="flex-row-center navbar">
      <Link class="flex-row-center logo-div" to="/home">
        <div class="logo-img">
          <svg width="5rem" height="5rem" viewBox="0 0 24 24">
            <path
              fill="#ffd300"
              d="m10 16.5l6-4.5l-6-4.5M22 12c0-5.54-4.46-10-10-10c-1.17 0-2.3.19-3.38.56l.7 1.94c.85-.34 1.74-.53 2.68-.53c4.41 0 8.03 3.62 8.03 8.03c0 4.41-3.62 8.03-8.03 8.03c-4.41 0-8.03-3.62-8.03-8.03c0-.94.19-1.88.53-2.72l-1.94-.66C2.19 9.7 2 10.83 2 12c0 5.54 4.46 10 10 10s10-4.46 10-10M5.47 3.97c.85 0 1.53.71 1.53 1.5C7 6.32 6.32 7 5.47 7c-.79 0-1.5-.68-1.5-1.53c0-.79.71-1.5 1.5-1.5Z"
            ></path>
          </svg>
        </div>
        <div class="logo-text">
          <span>RIXTV</span>
        </div>
      </Link>
      <div class="flex-row-center search-div">
        <span className="font-2 text-color">SEARCH:</span>
        <input
          type="text"
          class="input input-search font-15 p-5"
          onChange={(e) => searchHandler(e)}
        />
      </div>
      <button className="btn btn-icon btn-4" onClick={() => toggleThemeHandler()}>
        {theme === "dark" ? (
          <svg width="2rem" height="2rem" viewBox="0 0 24 24">
            <path
              fill="#dedede"
              d="m6.76 4.84l-1.8-1.79l-1.41 1.41l1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407l-1.79 1.79l-1.407-1.408zm-1.8 15.115l1.79 1.8l1.41-1.41l-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41l1.79-1.8l-1.41-1.41z"
            ></path>
          </svg>
        ) : (
          <svg width="2rem" height="2rem" viewBox="0 0 256 256">
            <path
              fill="#393e46"
              d="M228.1 149.1a12 12 0 0 0-11.6-8.5a11.4 11.4 0 0 0-3.3.6a80 80 0 0 1-98.3-98.4a13.5 13.5 0 0 0 .4-2.8a12 12 0 0 0-7.5-11.8a12.6 12.6 0 0 0-7.9-.4A104 104 0 1 0 228.2 156a12.5 12.5 0 0 0-.1-6.9ZM128 208A80 80 0 0 1 88.1 58.6a104.2 104.2 0 0 0 109.3 109.3A80.4 80.4 0 0 1 128 208Z"
            ></path>
          </svg>
        )}
      </button>
      <Link to={token ? "/user" : "/signup"}>
        <div class="flex-row-center profile-logo-div">
          <svg width="4rem" height="4rem" viewBox="0 0 32 32">
            <path fill="#ffd300" d="M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5Z"></path>
            <path
              fill="currentColor"
              d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2Zm7.992 22.926A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0Z"
            ></path>
          </svg>
        </div>
      </Link>
    </nav>
  );
}

export default Navbar;
