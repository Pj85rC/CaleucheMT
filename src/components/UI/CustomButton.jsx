import { Button, useTheme } from "@mui/material";

export const CustomButton = ({ texto, variant, onClick, ...props }) => {
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
      default:
        return {};
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
      {...props}
    >
      {texto}
    </Button>
  );
};
