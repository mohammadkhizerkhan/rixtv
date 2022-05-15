import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import {
  Navbar,
  Sidebar,
  Categories,
  VideoListing,
  SingleVideo,
  SinglePlaylist,
} from "../src/components";
import {
  History,
  Home,
  Liked,
  Playlist,
  Login,
  SignUp,
  User,
  Watchlater,
} from "./pages";
import { RequireAuth } from "./services";
import { useTheme } from "./context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const location = useLocation();
  const { theme } = useTheme();
  return (
    <div className={`App ${theme === "dark" ? "dark-mode" : "light-mode"}`}>
      <Navbar />
      <ToastContainer
      className="toast"
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="flex-row">
        <Sidebar />
        <Routes>
          <Route element={<Home />}>
            <Route
              path="/"
              element={
                <>
                  <Categories />
                  <VideoListing />
                </>
              }
            />
            <Route
              index
              path="/home"
              element={
                <>
                  <Categories />
                  <VideoListing />
                </>
              }
            />
            <Route path="/video/:videoId" element={<SingleVideo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/user" element={<User />} />
            <Route element={<RequireAuth />}>
              <Route path="/watchlater" element={<Watchlater />} />
              <Route path="/liked" element={<Liked />} />
              <Route path="/playlists" element={<Playlist />} />
              <Route path="/history" element={<History />} />
              <Route
                path="/playlists/:playlistId"
                element={<SinglePlaylist />}
              />
            </Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
