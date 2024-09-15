import React from "react";
import { Box, Typography } from "@mui/material";

const OrderInfo = () => {
  return (
    <Box
      flex="3"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      overflow="hidden"
      height="100%"
    >
      {/* Order ID Section */}
      <Box display="flex" alignItems="center" gap={5}>
        <Typography
          variant="h6"
          fontWeight="700"
          fontSize="12px"
          sx={{ textDecoration: "underline" }}
        >
          Order ID 07-00026
        </Typography>

        <Typography
          variant="body2"
          color="error"
          border="1px solid red"
          borderRadius="8px"
          px={1}
          py={0.5}
          fontSize="12px"
        >
          Urgent
        </Typography>
        <Typography
          variant="body2"
          color="#8D4E85"
          border="1px solid #8D4E85"
          borderRadius="8px"
          px={1}
          py={0.5}
          fontSize="12px"
        >
          Refrigerated / PhotoID
        </Typography>
      </Box>
      {/* OrderInfo section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.3,
          maxWidth: "500px",
        }}
      >
        {/* Name */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <img
            src="/order/Person.png"
            alt="Person Icon"
            style={{ width: 12, height: 12 }}
          />
          <Typography
            variant="body1"
            sx={{ fontWeight: 600, color: "#6B6B6B", fontSize: "12px" }}
          >
            Abdullah Khan
          </Typography>
        </Box>

        {/* Phone Numbers */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "80%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "33.3%",
              gap: 1,
            }}
          >
            <img
              src="/order/Call.png"
              alt="Person Icon"
              style={{ width: 12, height: 14 }}
            />
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, color: "#6B6B6B", fontSize: "11px" }}
            >
              (929) 333-4455
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "33.3%",
              gap: 1,
            }}
          >
            <img
              src="/order/Mobile.png"
              alt="Person Icon"
              style={{ width: 12, height: 15 }}
            />
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, color: "#6B6B6B", fontSize: "11px" }}
            >
              (929) 333-4455
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "33.3%",
              gap: 1,
            }}
          >
            <img
              src="/order/Telephone.png"
              alt="Person Icon"
              style={{ width: 15, height: 13 }}
            />
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, color: "#6B6B6B", fontSize: "11px" }}
            >
              (929) 333-4455
            </Typography>
          </Box>
        </Box>

        {/* Address */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img
            src="/order/Location.png"
            alt="Person Icon"
            style={{ width: 12, height: 13 }}
          />
          <Typography
            variant="body2"
            sx={{ fontWeight: 600, color: "#6B6B6B", fontSize: "11px" }}
          >
            15W Smith ST, Amityville, NY 11701-1737, United States
          </Typography>
        </Box>

        {/* Additional Info */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img
              src="/order/Info.png"
              alt="Person Icon"
              style={{ width: 12, height: 13 }}
            />
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, color: "#6B6B6B", fontSize: "11px" }}
            >
              Apt# 4C
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, color: "#6B6B6B", fontSize: "11px" }}
            >
              Business Address
            </Typography>
          </Box>

          <Typography variant="body2" sx={{ color: "black" }}>
            Copay:{" "}
            <span style={{ color: "green", fontWeight: 500 }}>
              $0.01 Received By Pharmacy
            </span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderInfo;
