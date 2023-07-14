import { IconButton, InputAdornment, TextField, useTheme } from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";


export const Input = ({ label, isPassword, style, useDefaultBackground }) => {
  const [showPasword, setShowPasword] = useState(false);
  const theme = useTheme();

  const ClickShowPassword = () => {
    setShowPasword(!showPasword);
  };

  const color = useDefaultBackground ? theme.palette.background.default : theme.palette.primary.main;

  return (
    <TextField
      type={isPassword ? (showPasword ? "text" : "password") : "text"}
      label={label}
      style={style}
      InputLabelProps={{
        style: { color: color },
      }}
      InputProps={
        isPassword
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={ClickShowPassword}
                    style={{ color: color }}
                  >
                    {showPasword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
              style: { color: color },
            }
          : {
              style: { color: color },
            }
      }
    />
  );
};
