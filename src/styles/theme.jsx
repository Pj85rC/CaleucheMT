import { createTheme } from "@mui/material";

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
          default: "#1F1B4E", //Background modal
        },
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

export default theme;
