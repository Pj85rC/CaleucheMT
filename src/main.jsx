import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { MainContextProvider } from "./context/MainContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { FestivalContextProvider } from "./context/FestivalContext.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000514", // Color primario
      contrastText: "#dad2d2",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainContextProvider>
      <AuthContextProvider>
        <FestivalContextProvider>
          <BrowserRouter>
            <CssBaseline />
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </BrowserRouter>
        </FestivalContextProvider>
      </AuthContextProvider>
    </MainContextProvider>
  </React.StrictMode>
);
