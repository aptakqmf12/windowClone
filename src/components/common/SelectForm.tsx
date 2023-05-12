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
}

export default function SelectForm({
  value,
  defaultValue,
  setValue,
  menuList,
  variant,
  fullWidth,
  width,
}: SelectFormProps) {
  return (
    <FormControl
      fullWidth={fullWidth}
      variant={variant || "standard"}
      sx={{ width }}
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
