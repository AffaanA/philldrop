import React, { useState } from "react";
import { Tabs, Tab, Button, Box, Badge } from "@mui/material";

const tabData = [
  { label: "All", color: "#000000", num: "06" },
  { label: "Ready to pick up", color: "#0000FF", num: "56" },
  { label: "In Transit", color: "#FFA500", num: "06" },
  { label: "Delivered", color: "#008000", num: "06" },
  { label: "Canceled", color: "#FF0000", num: "06" },
];

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        ml: 2,
      }}
    >
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        aria-label="tabs"
        sx={{
          "& .MuiTabs-flexContainer": {
            gap: 3,
          },
          "& .MuiTab-root": {
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            minWidth: "auto",
            fontSize: "14.4px",
            lineHeight: "22.62px",
          },
          "& .Mui-selected": {
            borderBottom: "2px solid black",
            color: "black",
          },
        }}
      >
        {tabData.map((tab, index) => (
          <Tab
            key={index}
            label={
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: activeTab === index ? "black" : "#637381",
                }}
              >
                {tab.label}
                <Badge
                  badgeContent={tab.num}
                  sx={{
                    ml: 3,
                    "& .MuiBadge-badge": {
                      backgroundColor: tab.color,
                      color: "#fff",
                      borderRadius: "20%",
                      padding: "4px 4px",
                      fontSize: "12px",
                      fontWeight: "bold",
                    },
                  }}
                />
              </Box>
            }
          />
        ))}
      </Tabs>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#289A16",
          color: "#fff",
          borderRadius: "5px",
          width: "94px",
          height: "32px",
        }}
        endIcon={
          <img
            src="/icons/Upload.png"
            alt="Upload Icon"
            style={{ width: 15, height: 15 }}
          />
        }
      >
        Upload
      </Button>
    </Box>
  );
};

export default TabsComponent;
