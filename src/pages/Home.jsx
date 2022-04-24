import React from "react";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <main class="main flex-column-center">
        <div class="main-categories">
          <span class="category">All</span>
          <span class="category">Live Stream</span>
          <span class="category">GTA5</span>
          <span class="category">PUBG</span>
        </div>
        <Outlet/>
      </main>
    </>
  );
}

export default Home;
