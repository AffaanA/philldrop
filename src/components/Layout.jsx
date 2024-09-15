import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Box, Toolbar, CssBaseline } from "@mui/material";
import TabsComponent from "./TabsComponent";
import FilterComponent from "./FilterComponent";
import OrderDetails from "./OrderDetails";

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - 240px)` },
          paddingRight: 2,
          paddingLeft: 2,
        }}
      >
        <Toolbar />
        <TabsComponent />
        <FilterComponent />
        <OrderDetails />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
