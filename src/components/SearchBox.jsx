import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function SearchBox({ setSearchValue }) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { ml: 4, mt: 2, width: "50ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Search Employees..."
        variant="outlined"
        onChange={(e) => setSearchValue(() => e.target.value)}
      />
    </Box>
  );
}

export default SearchBox;
