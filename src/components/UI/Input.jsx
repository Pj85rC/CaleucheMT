import { IconButton, InputAdornment, TextField, useTheme } from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
// import {  } from "@emotion/react";

export const Input = ({ label, isPassword }) => {
  const [showPasword, setShowPasword] = useState(false);
  const theme = useTheme();

  const ClickShowPassword = () => {
    setShowPasword(!showPasword);
  };

  return (
    <TextField
      type={isPassword ? (showPasword ? "text" : "password") : "text"}
      label={label}
      InputLabelProps={{
        style: { color: theme.palette.primary.main },
      }}
      InputProps={
        isPassword
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={ClickShowPassword}
                    style={{ color: theme.palette.primary.main }}
                  >
                    {showPasword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
              style: { color: theme.palette.primary.main },
            }
          : {
              style: { color: theme.palette.primary.main },
            }
      }
    />
  );
};
