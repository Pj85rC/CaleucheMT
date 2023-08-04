import { IconButton, InputAdornment, TextField, useTheme } from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const Input = ({
  label,
  isPassword,
  style,
  value,
  onChange,
  useDefaultBackground,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const color = useDefaultBackground
    ? theme.palette.background.default
    : theme.palette.primary.main;

  return (
    <TextField
      type={isPassword ? (showPassword ? "text" : "password") : "text"}
      label={label}
      style={style}
      value={value}
      onChange={onChange}
      InputLabelProps={{
        style: { color: color },
      }}
      InputProps={
        isPassword
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    style={{ color: color }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
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