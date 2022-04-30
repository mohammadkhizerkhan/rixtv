import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import "../src/css/final.css";

import { makeServer } from "./server";
import {
  DataProvider,
  AuthProvider,
  LikeProvider,
  WatchLaterProvider,
  HistoryProvider
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <DataProvider>
          <HistoryProvider>
            <WatchLaterProvider>
              <LikeProvider>
                <App />
              </LikeProvider>
            </WatchLaterProvider>
          </HistoryProvider>
        </DataProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
