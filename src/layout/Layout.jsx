import { Content } from "./Content";
import Navbar from "./Navbar/Navbar";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        position: "relative",
      }}
    >
      <Navbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          overflow: "auto",
          mt: "80px",
        }}
      >
        <Content />
      </Box>
    </Box>
  );
};

export default Layout;
