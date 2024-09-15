import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
  Collapse,
} from "@mui/material";

const menuItems = [
  { text: "Home Page", icon: "/icons/Home.png" },
  { text: "Dashboard", icon: "/icons/Dashboard.png" },
  { text: "Custom Orders", icon: "/icons/Custom.png" },
  {
    text: "Rx Orders",
    icon: "/icons/Rx.png",
    subItems: [{ text: "Rx Orders", icon: "/icons/Rx.png" }],
  },
  {
    text: "Pharmacies",
    icon: "/icons/Pharmacies.png",
    subItems: [{ text: "Pharmacies", icon: "/icons/Pharmacies.png" }],
  },
  {
    text: "Users",
    icon: "/icons/Users.png",
    subItems: [{ text: "Drivers", icon: "/icons/Drivers.png" }],
  },
  {
    text: "Drivers",
    icon: "/icons/Drivers.png",
    subItems: [{ text: "Drivers", icon: "/icons/Drivers.png" }],
  },
  {
    text: "Routes",
    icon: "/icons/Routes.png",
    subItems: [{ text: "Routes", icon: "/icons/Routes.png" }],
  },
  {
    text: "Routes Status",
    icon: "/icons/RoutesStatus.png",
    subItems: [{ text: "Routes Status", icon: "/icons/RoutesStatus.png" }],
  },
  {
    text: "Boroughs",
    icon: "/icons/Boroughs.png",
    subItems: [{ text: "Sub-Borough 1", icon: "/icons/Boroughs.png" }],
  },
  {
    text: "Reports",
    icon: "/icons/Reports.png",
    subItems: [{ text: "Report 1", icon: "/icons/Reports.png" }],
  },
  {
    text: "Chats",
    icon: "/icons/Chats.png",
  },
  { text: "Log Out", icon: "/icons/Logout.png" },
  { text: "Support", icon: "/icons/Support.png" },
];

const SubMenuItem = ({ item, open, toggleOpen }) => (
  <>
    <ListItem
      button
      onClick={toggleOpen}
      sx={{
        "&:hover": {
          backgroundColor: "#08517B",
          cursor: "pointer",
        },
      }}
    >
      <ListItemIcon>
        <img
          src={item.icon}
          alt={`${item.text}-Icon`}
          style={{ width: "28px" }}
        />
      </ListItemIcon>
      <ListItemText primary={item.text} />
      <img
        src="/icons/Arrow.png"
        alt="Arrow-Icon"
        style={{
          width: "24px",
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
        }}
      />
    </ListItem>
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {item.subItems?.map((subItem, subIndex) => (
          <ListItem key={subIndex} button sx={{ pl: 4 }}>
            <ListItemIcon>
              <img
                src={subItem.icon}
                alt={`${subItem.text}-Icon`}
                style={{ width: "24px" }}
              />
            </ListItemIcon>
            <ListItemText primary={subItem.text} />
          </ListItem>
        ))}
      </List>
    </Collapse>
  </>
);

const Sidebar = () => {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const handleToggle = (index) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: "#0B6699",
          color: "#ffffff",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          border: "none",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pt: "9px",
          pl: "9px",
          width: 262,
          height: "51.92px",
        }}
      >
        <img
          src="/icons/Logo.png"
          alt="Logo"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "calc(100% - 44px)",
          overflow: "auto",
        }}
      >
        <List>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              {item.subItems ? (
                <SubMenuItem
                  item={item}
                  open={openDropdowns[index] || false}
                  toggleOpen={() => handleToggle(index)}
                />
              ) : (
                <ListItem
                  button
                  sx={{
                    "&:hover": {
                      backgroundColor: "#08517B",
                      cursor: "pointer",
                    },
                  }}
                >
                  <ListItemIcon>
                    <img
                      src={item.icon}
                      alt={`${item.text}-Icon`}
                      style={{ width: "28px" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      style: { fontSize: "16px", lineHeight: "18.8px" },
                    }}
                  />
                </ListItem>
              )}
              {index < menuItems.length - 1 && (
                <Divider
                  sx={{
                    marginX: 0.5,
                    borderColor: "#C5C5C5",
                    borderWidth: "1px",
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
