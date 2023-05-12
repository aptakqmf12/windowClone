import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormControl, IconButton, Input, InputAdornment } from "@mui/material";
import { useState } from "react";

interface PasswordInputProps {
  password: string;
  setPassword: (password: string) => void;
}

export default function PasswordInput({
  password,
  setPassword,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <FormControl fullWidth>
      <Input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              onMouseDown={(e: any) => e.preventDefault()}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
