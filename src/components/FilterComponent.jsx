import React from "react";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import CustomDatePicker from "./DatePicker";

const CustomDropdownIcon = styled("img")({});

const FilterComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button
          variant="outlined"
          sx={{
            mr: 1,
            borderColor: "#212B36",
            backgroundColor: "#212B36",
            borderRadius: "5px",
            color: "#fff",
            textTransform: "none",
            fontSize: "11px",
            height: 32,
          }}
          endIcon={
            <img
              src="/icons/Cross.png"
              alt="cross icon"
              style={{ color: "#000" }}
            />
          }
        >
          Filter Pharmacy
        </Button>

        <FormControl sx={{ mx: 1, minWidth: 110 }} size="small">
          <InputLabel sx={{ fontSize: "11px", color: "#000" }}>
            Select Borough
          </InputLabel>
          <Select
            defaultValue=""
            label="Dropdown 1"
            sx={{
              fontSize: "11px",
              "& .MuiSelect-select": {
                display: "flex",
                alignItems: "center",
              },
            }}
            IconComponent={() => (
              <CustomDropdownIcon
                src="/icons/Dropdown.png"
                alt="custom arrow icon"
                sx={{ width: "8.67px", height: "4.33px", marginRight: "5px" }}
              />
            )}
          >
            <MenuItem value={10}>Option 1</MenuItem>
            <MenuItem value={20}>Option 2</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ mx: 1, minWidth: 110 }} size="small">
          <InputLabel sx={{ fontSize: "11px", color: "#000" }}>
            Select Zone
          </InputLabel>
          <Select
            defaultValue=""
            label="Dropdown 1"
            sx={{
              fontSize: "11px",
              "& .MuiSelect-select": {
                display: "flex",
                alignItems: "center",
              },
            }}
            IconComponent={() => (
              <CustomDropdownIcon
                src="/icons/Dropdown.png"
                alt="custom arrow icon"
                sx={{ width: "8.67px", height: "4.33px", marginRight: "5px" }}
              />
            )}
          >
            <MenuItem value={10}>Option 1</MenuItem>
            <MenuItem value={20}>Option 2</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ mx: 1, minWidth: 110 }} size="small">
          <InputLabel sx={{ fontSize: "11px", color: "#000" }}>
            Time Window
          </InputLabel>
          <Select
            defaultValue=""
            label="Dropdown 1"
            sx={{
              fontSize: "11px",
              "& .MuiSelect-select": {
                display: "flex",
                alignItems: "center",
              },
            }}
            IconComponent={() => (
              <CustomDropdownIcon
                src="/icons/Dropdown.png"
                alt="custom arrow icon"
                sx={{ width: "8.67px", height: "4.33px", marginRight: "5px" }}
              />
            )}
          >
            <MenuItem value={10}>Option 1</MenuItem>
            <MenuItem value={20}>Option 2</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="outlined"
          sx={{
            ml: 1,
            border: "none",
            backgroundColor: "#EDEFF1",
            borderRadius: "5px",
            color: "#000",
            textTransform: "none",
            fontSize: "11px",
            height: 36,
          }}
          endIcon={<img src="/icons/Info.png" alt="Info icon" />}
        >
          Call to Notify
        </Button>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <TextField
          variant="outlined"
          placeholder="Search Order Id, Name,Phone,Address,RX#"
          InputProps={{
            endAdornment: (
              <IconButton>
                <img src="/icons/Magnifier.png" alt="Magnifier" />
              </IconButton>
            ),
          }}
          sx={{
            mr: 2,
            minWidth: 350,
            backgroundColor: "#fff",
            borderRadius: "15px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "5px",
              "& fieldset": {
                border: "none",
              },
            },
          }}
          size="small"
        />
        <CustomDatePicker />
      </Box>
    </Box>
  );
};

export default FilterComponent;
