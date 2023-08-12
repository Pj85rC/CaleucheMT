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
  customStyle,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const color = useDefaultBackground
    ? theme.palette.background.default
    : theme.palette.primary.main;

    const commonStyles = {
      InputLabelProps: {
        style: { color: color },
      },
      InputProps: {
        style: { color: color },
      },
    };
  
    const customStyles = customStyle
      ? {
          InputProps: {
            ...commonStyles.InputProps,
            underline: {
              "&:before": {
                borderBottom: `1px solid ${color}`,
              },
              "&:hover:not(.Mui-disabled):before": {
                borderBottom: `2px solid ${color}`,
              },
            },
          },
        }
      : {};
  
    const passwordStyles = isPassword
      ? {
          InputProps: {
            ...commonStyles.InputProps,
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
          },
        }
      : {};

  return (
    <TextField
    type={isPassword ? (showPassword ? "text" : "password") : "text"}
    label={label}
    style={style}
    value={value}
    onChange={onChange}
    {...commonStyles}
    {...customStyles}
    {...passwordStyles}
    {...props}
  />
);
};
