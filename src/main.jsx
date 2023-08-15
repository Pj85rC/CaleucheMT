import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { MainProvider } from "./context/MainContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { FestivalProvider } from "./context/FestivalContext.jsx";
import { ArtistProvider } from "./context/ArtistContext.jsx";
import theme from "./styles/theme.jsx";
import { FavoritesProvider } from "./context/FavContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainProvider>
      <AuthProvider>
        <FestivalProvider>
          <ArtistProvider>
            <FavoritesProvider>
              <BrowserRouter>
                <CssBaseline />
                <ThemeProvider theme={theme}>
                  <App />
                </ThemeProvider>
              </BrowserRouter>
            </FavoritesProvider>
          </ArtistProvider>
        </FestivalProvider>
      </AuthProvider>
    </MainProvider>
  </React.StrictMode>
);
