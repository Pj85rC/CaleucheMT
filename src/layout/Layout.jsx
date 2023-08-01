import { Content } from "./Content";
import Navbar from "./Navbar";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <Box
      sx={{
        marginTop: "70px",
      }}
    >
      <Navbar />
      <Content />
    </Box>
  );
};

export default Layout;
