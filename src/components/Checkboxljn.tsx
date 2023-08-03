"use client";
import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Checkboxljn({ onCheckboxChange }) {
  const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //alert("checked: " + event.target.checked);
    const isChecked = event.target.checked;
    onCheckboxChange(isChecked);
  };

  return (
    <FormControlLabel
      value="onlySpecialProductions"
      control={<Checkbox onChange={handleCheckBoxChange} />}
      label="Vis kun specialproduktioner (SP)"
      labelPlacement="start"
    />
  );
}
