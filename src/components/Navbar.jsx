import React from "react";
import { AppBar, Toolbar, Typography, Box, Avatar } from "@mui/material";

const Navbar = () => {
  const menuItems = [
    { icon: "/icons/Tickets.png" },
    { icon: "/icons/Annoucment.png" },
    { icon: "/icons/Notification.png" },
    { icon: "/icons/Messages.png" },
    { icon: "/icons/Flag.png" },
    { icon: "/icons/Bell.png" },
  ];

  const now = new Date();
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = dayNames[now.getDay()];
  const date = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  // Format date string
  const formattedDate = `${day} ${date}-${month}-${year}`;

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#0B6699",
        width: `calc(100% - 240px)`,
        height: "60px",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          {formattedDate}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {menuItems.map((menuItem, index) => (
            <img
              key={index}
              src={menuItem.icon}
              alt={`Icon-${index}`}
              style={{ height: 24 }}
            />
          ))}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              src="/icons/Profile.png"
              alt="Profile Image"
              sx={{ width: 40, height: 40, marginRight: 1 }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  fontWeight: "700",
                  fontSize: "11.59",
                  mb: -0.2,
                }}
              >
                Leticia
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "white", fontWeight: "700", fontSize: "11.59" }}
              >
                PD Facility staff
              </Typography>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
