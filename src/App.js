import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, Sidebar,Categories,VideoListing } from "../src/components";
import {History, Home, Liked, Playlist, Watchlater} from "./pages";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home/>} >
          <Route index element={<><Categories/><VideoListing/></>}/>
          <Route path="/home" element={<><Categories/><VideoListing/></>}/>
          <Route path="/watchlater" element={<Watchlater/>}/>
          <Route path="/liked" element={<Liked/>}/>
          <Route path="/playlist" element={<Playlist/>}/>
          <Route path="/history" element={<History/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
