import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CalendarIcon from "./CalenderIcon";

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={selectedDate}
        slots={{ openPickerIcon: CalendarIcon }}
        onChange={(newValue) => setSelectedDate(newValue)}
        slotProps={{ textField: { size: "small" } }}
        sx={{
          backgroundColor: "#919EAB",
          borderRadius: "10px",
          height: "36px",
          width: "110px",
          "& .MuiInputBase-input": {
            fontSize: "12px",
            fontWeight: "400",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
