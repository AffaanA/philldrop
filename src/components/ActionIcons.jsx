import React from "react";
import { Box, Typography } from "@mui/material";

const actions = [
  { src: "/order/Eye.png", alt: "View/Edit Order", label: "View/Edit Order" },
  { src: "/order/Print.png", alt: "Signed Slips", label: "Signed Slips" },
  { src: "/order/Notes.png", alt: "Staff Notes", label: "Staff Notes" },
  {
    src: "/order/Notes.png",
    alt: "Note to Pharmacy",
    label: "Note to Pharmacy",
  },
  { src: "/order/History.png", alt: "History", label: "History" },
  { src: "/order/Info.png", alt: "See All", label: "See All" },
];

const ActionIcons = () => {
  return (
    <Box
      ml={4}
      height="100%"
      display="flex"
      flexDirection="column"
      flexWrap="wrap"
      columnGap={2}
      rowGap={0.3}
      alignItems="flex-start"
    >
      {actions.map((action, index) => (
        <Box key={index} display="flex" alignItems="center">
          <img src={action.src} alt={action.alt} style={{ marginRight: 3 }} />
          <Typography
            variant="body2"
            sx={{ fontSize: "11px", fontWeight: 600, color: "#6b6b6b" }}
          >
            {action.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ActionIcons;
