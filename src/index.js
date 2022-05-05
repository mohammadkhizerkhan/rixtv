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
  HistoryProvider,
  PlaylistProvider,
  ThemeProvider,
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <DataProvider>
            <PlaylistProvider>
              <HistoryProvider>
                <WatchLaterProvider>
                  <LikeProvider>
                    <App />
                  </LikeProvider>
                </WatchLaterProvider>
              </HistoryProvider>
            </PlaylistProvider>
          </DataProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
