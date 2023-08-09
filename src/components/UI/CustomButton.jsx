import { Button, useTheme } from "@mui/material";

export const CustomButton = ({
  texto,
  variant,
  onClick
}) => {
  const theme = useTheme();

  const getButtonStyles = () => {
    switch (variant) {
      case "contained":
        return {
          color: theme.palette.background.default,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        };
      case "outlined":
        return {
          color: theme.palette.primary.main,
          backgroundColor: "transparent",
          borderColor: theme.palette.primary.main,
        };
    }
  };

  return (
    <Button
      variant={variant}
      style={{
        ...getButtonStyles(),
        borderWidth: 1,
        borderStyle: "solid",
      }}
      onClick={onClick}
    >
      {texto}
    </Button>
  );
};

// return (
//   <Button
//     variant={variant === "contained" ? "contained" : "outlined"}
//     style={{
//       color: color,
//       borderColor: borderColor,
//       backgroundColor: backgroundColor,
//       borderWidth: 1,
//       borderStyle: "solid",
//     }}
//   >
//     {texto}
//   </Button>
// );
// };
