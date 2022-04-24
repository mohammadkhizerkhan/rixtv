import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, Sidebar } from "../src/components";
import {Home} from "./pages";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
