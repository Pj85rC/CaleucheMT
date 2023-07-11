import { useTheme } from "@emotion/react";
import { Buttons } from "../components/UI/Buttons";

export const Home = () => {
  const theme = useTheme();
  return (
    <>
      <h1>Home</h1>
      <Buttons
        variant="outlined"
        color={theme.palette.primary.main}
        texto="ENTRAR"
        borderColor={theme.palette.primary.main}
      />
      <Buttons
        variant="contained"
        backgroundColor={theme.palette.primary.main}
        texto="FINALIZAR"
      />
    </>
  );
};
