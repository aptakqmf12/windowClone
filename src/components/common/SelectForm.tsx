import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface SelectFormProps {
  menuList: string[];
  value: string;
  defaultValue: string;
  setValue: (v: string) => void;

  variant?: "standard" | "outlined" | "filled";
  fullWidth?: boolean;
  width?: number;
  height?: number;
}

export default function SelectCustom({
  value,
  defaultValue,
  setValue,
  menuList,
  variant,
  fullWidth,
  width,
  height,
}: SelectFormProps) {
  return (
    <FormControl
      fullWidth={fullWidth}
      variant={variant || "standard"}
      sx={{ width, height }}
    >
      <Select
        value={value || undefined}
        defaultValue={defaultValue}
        onChange={(e: SelectChangeEvent) => setValue(e.target.value as string)}
      >
        {menuList.map((menu, i) => (
          <MenuItem value={menu} key={i}>
            {menu}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
