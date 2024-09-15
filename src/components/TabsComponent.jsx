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
        pl: 2,
        position: "relative", // Make the Box a reference for the ::after pseudo-element
        "&::after": {
          content: '""',
          display: "block",
          width: "70%", // 70% of the total width of the Box
          height: "2px", // Height of the border line
          backgroundColor: "#f2f3f5", // Color of the line
          position: "absolute", // Absolute positioning relative to the Box
          bottom: 0, // Position the line at the bottom of the Box
          left: "0", // Center the line horizontally within the Box
          zIndex: "-1",
        },
      }}
    >
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        aria-label="tabs"
        sx={{
          "& .MuiTabs-flexContainer": {
            gap: 1,
          },
          "& .MuiTab-root": {
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            minWidth: "auto",
            fontSize: "14.4px",
            lineHeight: "22.62px",
            padding: 0,
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
                <Box
                  sx={{
                    ml: 1,
                    backgroundColor: tab.color,
                    color: "#fff",
                    borderRadius: "20%",
                    padding: "0 3px",
                    fontSize: "11px",
                    fontWeight: "bold",
                  }}
                >
                  {tab.num}
                </Box>
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
