import React from "react";
import { Box, Typography } from "@mui/material";

const DeliveryNotes = () => {
  return (
    <Box
      ml={2}
      p={0.5}
      bgcolor="#0B6699"
      borderRadius="8px"
      color="white"
      width="180px"
      height="100%"
      display="flex"
      flex="1"
      justifyContent="center"
    >
      <Typography
        variant="body1"
        sx={{
          fontSize: "11px",
          fontWeight: 600,
          textDecoration: "underline",
        }}
      >
        Delivery Notes
      </Typography>
    </Box>
  );
};

export default DeliveryNotes;
