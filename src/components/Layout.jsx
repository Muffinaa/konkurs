import React from "react";
import Navbar from "./Navbar";
import CardGrid from "./CardGrid";
import Sidebar from "./Sidebar";
import Stack from "@mui/material/Stack"
import PostButton from "./PostButton";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="Space-between">
        <Sidebar />
        <CardGrid />
      </Stack>
      <PostButton />
    </>
  );
};

export default Layout
