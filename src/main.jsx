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
      main: "#F9F9F9", // Color Navbar, algunos botones
    },
    secondary: {
      main: "#E9E8EA", //Para algunos parrafos
    },
    background: {
      default: "#09071D", //Background y texto botón contained
    },
    text: {
      card: "#C3D0F2", //Para textos de la card
    },
    background2: {
      default: "#1F1B4E",  //Background modal
    }
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#E9E8EA", // Esto cambiará el color del borde del input
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#F9F9F9", // Esto cambiará el color del borde del input cuando se pasa el mouse encima
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#F9F9F9", // Esto cambiará el color del borde del input cuando está en foco
          },
        },
        input: {
          color: "#F9F9F9", // Esto cambiará el color del texto del input
        },
      },
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
