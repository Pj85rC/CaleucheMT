import { TextField } from "@mui/material";

export const CustomInput = ({
  label,
  value,
  onChange,
  style,
  ...props
}) => {
  const borderColor = "#09071D";
  const textColor = "#09071D";
  const labelColor = "#1F1B4E";

  return (
    <TextField
      variant="outlined"
      label={label}
      value={value}
      onChange={onChange}
      style={style}
      InputLabelProps={{
        style: { color: labelColor },
      }}
      InputProps={{
        ...props,
        sx: {
          color: textColor,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: borderColor
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: borderColor
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: borderColor
          }
        }
      }}
      inputProps={{
        style: { color: textColor } 
      }}
    />
  );
};
