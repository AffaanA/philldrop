import React from "react";
import { Box, Typography, Button } from "@mui/material";

const StatusInfo = () => {
  return (
    <Box ml={2} sx={{ display: "flex", flex: "2", gap: 1, height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "3px",
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: "11px", fontWeight: 600, color: "#000" }}
        >
          Status: <span style={{ color: "blue" }}>Ready For Pickup</span>
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: "11px", fontWeight: 600, color: "#000" }}
        >
          Created Date: <span style={{ color: "#6b6b6b" }}>07-08-24</span>
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: "11px", fontWeight: 600, color: "#000" }}
        >
          Created Time: <span style={{ color: "#6b6b6b" }}>11:22:18 AM</span>
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: "11px", fontWeight: 600, color: "#000" }}
        >
          Delivery Date: <span style={{ color: "#6b6b6b" }}>07-07-24</span>
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: "11px", fontWeight: 600, color: "#000" }}
        >
          Delivery Time: <span style={{ color: "#6b6b6b" }}>Anytime</span>
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <Typography
            variant="body2"
            sx={{ fontSize: "11px", fontWeight: 600, color: "#000" }}
          >
            Attempts: <span style={{ color: "#6b6b6b" }}>01</span>
          </Typography>
          <Button
            variant="outlined"
            size="small"
            sx={{
              fontSize: "11px",
              height: "20px",
              width: "auto",
              padding: 0.5,
              textTransform: "none",
            }}
          >
            Create Ticket
          </Button>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            height: "80%",
            width: "150px",
            borderRadius: "10px",
            border: "1px solid #DCE0E4",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{ fontSize: "11px", fontWeight: 600, color: "#6b6b6b" }}
          >
            Ticket
          </Typography>
        </Box>
        <Typography
          sx={{
            ml: "18px",
            mt: "5px",
            fontSize: "11px",
            fontWeight: 600,
            color: "#6b6b6b",
          }}
          variant="body2"
        >
          Closed At: 07-31-2024
        </Typography>
      </Box>
    </Box>
  );
};

export default StatusInfo;
