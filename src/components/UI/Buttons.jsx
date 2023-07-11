import { Button } from "@mui/material";

export const Buttons = ({ color, texto, borderColor, backgroundColor, variant }) => {
  return (
    <Button
      variant={variant === "contained" ? "contained" : "outlined"}
      style={{
        color: color,
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        borderWidth: 1,
        borderStyle: "solid",
      }}
    >
      {texto}
    </Button>
  );
};
