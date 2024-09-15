import React from "react";
import { Box, Typography } from "@mui/material";

const TicketInfo = () => {
  return (
    <Box ml={4} p={2} border="1px solid grey" borderRadius="8px" width="150px">
      <Typography variant="body2">Ticket</Typography>
      <Typography variant="body2">Closed At: 07-31-2024</Typography>
    </Box>
  );
};

export default TicketInfo;
