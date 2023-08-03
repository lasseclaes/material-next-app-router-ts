"use client";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import React from "react";

export default function Checkboxljn() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    alert("checked: " + event.target.checked);
  };

  return (
    <FormControlLabel
      value="onlySpecialProductions"
      control={<Checkbox onChange={handleChange} />}
      label="Vis kun specialproduktioner"
      labelPlacement="start"
    />
  );
}
