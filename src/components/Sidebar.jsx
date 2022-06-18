import React from "react";
import { NavLink } from "react-router-dom";
import {
  DarkHistory,
  DarkHome,
  DarkLike,
  DarkPlaylist,
  DarkWatchlater,
  LightHistory,
  LightHome,
  LightLike,
  LightPlaylist,
  LightWatchlater,
} from "../assets";
import { useTheme } from "../context";

function Sidebar() {
  const { theme } = useTheme();
  const getActiveStyle = ({ isActive }) => {
    return {
      color: isActive ? "#000000" : "#74747b",
      borderLeft: isActive ? "4px solid #FFD300" : "",
    };
  };
  return (
    <aside className="sidebar">
      <ul className="list list-stack">
        <NavLink to="/home" className="link" style={getActiveStyle}>
          <li className="list-item  flex-row-center">
            <DarkHome />
            <span className="margin-l-2">Home</span>
          </li>
        </NavLink>
        <NavLink to="watchlater" className="link" style={getActiveStyle}>
          <li className="list-item flex-row-center">
            {theme === "dark" ? <LightWatchlater /> : <DarkWatchlater />}
            <span className="margin-l-2">Watchlater</span>
          </li>
        </NavLink>
        <NavLink to="liked" className="link" style={getActiveStyle}>
          <li className="list-item flex-row-center">
            {theme === "dark" ? <LightLike /> : <DarkLike />}
            <span className="margin-l-2">Liked Videos</span>
          </li>
        </NavLink>
        <NavLink to="playlists" className="link" style={getActiveStyle}>
          <li className="list-item flex-row-center">
            {theme === "dark" ? <LightPlaylist /> : <DarkPlaylist />}
            <span className="margin-l-2">Playlist</span>
          </li>
        </NavLink>
        <NavLink to="history" className="link" style={getActiveStyle}>
          <li className="list-item flex-row-center">
            {theme === "dark" ? <LightHistory /> : <DarkHistory />}
            <span className="margin-l-2">History</span>
          </li>
        </NavLink>
      </ul>
    </aside>
  );
}

export default Sidebar;
