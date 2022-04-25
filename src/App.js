import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Navbar, Sidebar,Categories,VideoListing,SingleVideo } from "../src/components";
import {History, Home, Liked, Playlist, Watchlater} from "./pages";
import { useEffect } from "react";
function App() {
  const location=useLocation();
  useEffect(() => {
    console.log(location)
    console.log(window.history)
  }, [location])
  return (
    <div className="App">
      <Navbar />
      <div className="flex-row">
      <Sidebar />
      <Routes>
        <Route  element={<Home/>} >
          {/* <Route index element={<><Categories/><VideoListing/></>}/> */}
          <Route index path="/home" element={<><Categories/><VideoListing/></>}/>
          <Route path="/video/:videoId" element={<SingleVideo/>}/>
          <Route path="/watchlater" element={<Watchlater/>}/>
          <Route path="/liked" element={<Liked/>}/>
          <Route path="/playlist" element={<Playlist/>}/>
          <Route path="/history" element={<History/>}/>
        </Route>
      </Routes>
      </div>
    </div>
  );
}

export default App;
