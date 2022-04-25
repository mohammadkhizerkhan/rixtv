import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
    return (
        <aside className="sidebar">
        <ul className="list list-stack">
          <NavLink to="/home" className="link">
          <li className="list-item  flex-row-center">
              <svg width="2rem" height="2rem" viewBox="0 0 32 32"><path fill="#d6d6d6" d="M16.612 2.214a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621V26a2.004 2.004 0 0 0 2 2h20a2.004 2.004 0 0 0 2-2V13.63L29.757 15L31 13.428ZM18 26h-4v-8h4Zm2 0v-8a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v8H6V12.062l10-7.79l10 7.8V26Z"></path></svg>
              <span className="margin-l-2">Home</span>
          </li>
          </NavLink>
          <NavLink to="watchlater" className="link">
          <li className="list-item flex-row-center">
              <svg width="2rem" height="2rem" viewBox="0 0 24 24">
                  <path
                    fill="#d6d6d6"
                    d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm.5-13H11v6l5.2 3.2l.8-1.3l-4.5-2.7V7z"
                  ></path>
                </svg>
              <span className="margin-l-2">Watchlater</span>
          </li>
          </NavLink>
          <NavLink to="liked" className="link">
          <li className="list-item flex-row-center">
              <svg width="2rem" height="2rem" viewBox="0 0 1024 1024">
                  <path
                    fill="#d6d6d6"
                    d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7c0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4c47.6-20.3 78.3-66.8 78.3-118.4c0-12.6-1.8-25-5.4-37c16.8-22.2 26.1-49.4 26.1-77.7c0-12.6-1.8-25-5.4-37c16.8-22.2 26.1-49.4 26.1-77.7c-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19l13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19l13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19l13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7c9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"
                  ></path>
                </svg>
              <span className="margin-l-2">Liked Videos</span>
          </li>
          </NavLink>
          <NavLink to="playlist" className="link">
          <li className="list-item flex-row-center">
              <svg width="2rem" height="2rem" viewBox="0 0 24 24"><path fill="#d6d6d6" d="M13 10H3c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1zm0-4H3c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1zM3 16h6c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1zm19.21-3.79l.09.09c.39.39.39 1.02 0 1.41l-5.58 5.59a.996.996 0 0 1-1.41 0l-3.09-3.09a.996.996 0 0 1 0-1.41l.09-.09a.996.996 0 0 1 1.41 0l2.3 2.3l4.78-4.79c.38-.4 1.02-.4 1.41-.01z"></path></svg>
              <span className="margin-l-2">Playlist</span>
          </li>
          </NavLink>
          <NavLink to="history" className="link">
          <li className="list-item flex-row-center">
              <svg width="2rem" height="2rem" viewBox="0 0 24 24"><path fill="#d6d6d6" d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89l.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54l.72-1.21l-3.5-2.08V8H12z"></path></svg>
              <span className="margin-l-2">History</span>
          </li>
          </NavLink>
        </ul>
      </aside>
    )
}

export default Sidebar
