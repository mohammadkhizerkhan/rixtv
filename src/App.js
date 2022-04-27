import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import {
  Navbar,
  Sidebar,
  Categories,
  VideoListing,
  SingleVideo,
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
function App() {
  const location=useLocation();
  // console.log(location.state);
  // console.log(location?.state?.from?.pathname);
  return (
    <div className="App">
      <Navbar />
      <div className="flex-row">
        <Sidebar />
        <Routes>
          <Route element={<Home />}>
            {/* <Route index element={<><Categories/><VideoListing/></>}/> */}
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
              <Route path="/playlist" element={<Playlist />} />
              <Route path="/history" element={<History />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
