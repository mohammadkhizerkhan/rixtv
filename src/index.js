import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import "../src/css/final.css"

import { makeServer } from "./server";
import { DataProvider } from "./context/DataContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <DataProvider>
    <App />
    </DataProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
