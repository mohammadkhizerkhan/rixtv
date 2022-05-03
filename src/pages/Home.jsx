import React from "react";
import { Outlet } from "react-router-dom";
// import { Categories } from "../components";

function Home() {
  return (
    <>
      <main class="main flex-column-center justify-start">
        <Outlet/>
      </main>
    </>
  );
}

export default Home;
