import React from "react";
import { Box } from "@mui/material";
import OrderInfo from "./OrderInfo";
import StatusInfo from "./StatusInfo";
import DeliveryNotes from "./DeliveryNotes";
import ActionIcons from "./ActionIcons";

const OrderDetails = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      mt={2}
      p={2}
      width="100%"
      height="142px"
      backgroundColor="#fff"
      borderRadius="10px"
      boxShadow="2"
    >
      <OrderInfo />
      <StatusInfo />
      <DeliveryNotes />
      <ActionIcons />
    </Box>
  );
};

export default OrderDetails;
