import { generatePhoneNumber } from "@lib/inputRule";
import { TextField } from "@mui/material";
import React, { ChangeEvent, useState } from "react";

interface PhoneInputProps {
  value: string;
  setValue: (v: any) => void;
}

export default function PhoneInput({ value, setValue }: PhoneInputProps) {
  const handleChange = (e: ChangeEvent<any>) => {
    const generatedNum = generatePhoneNumber(e.target.value);
    setValue(generatedNum);
  };

  return (
    <TextField
      margin="normal"
      variant="outlined"
      fullWidth
      value={value}
      onChange={handleChange}
      placeholder="000-0000-0000"
      inputProps={{ maxLength: 13, pattern: "\\d{3}-\\d{3,4}-\\d{4}" }}
    />
  );
}
