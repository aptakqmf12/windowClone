import { PaletteOptions, createTheme } from "@mui/material/styles";

const colors: PaletteOptions = {
  primary: {
    dark: "#4C9EC5",
    main: "#69BBD1",
    light: "#79A2E0",
  },
  secondary: {
    dark: "#1B3E6A",
    main: "#294F88",
    light: "#93CDE2",
  },
  success: {
    main: "#4caf50",
  },
  error: {
    main: "#ef5350",
  },
  info: {
    main: "#42a5f5",
  },
  warning: {
    main: "#ff9800",
  },
};

export const theme = { colors };
export type ColorsType = typeof colors;

export const muiTheme = createTheme({
  palette: colors,
});
