import { ThemeOptions } from "@mui/material/styles";
import { ModeType } from "@store/common";

export const darkColors = {
  primary: {
    dark: "#6B90CC",
    main: "#B0C5EF",
    light: "#D6E4FD",
  },
  secondary: {
    dark: "#6099BC",
    main: "#99C9DD",
    light: "#BADAE8",
  },
  success: {
    dark: "#388E3C",
    main: "#66BB6A",
    light: "#81C784",
  },
  error: {
    dark: "#D33131",
    main: "#F44336",
    light: "#E57373",
  },
  info: {
    dark: "#0288D2",
    main: "#29B6F6",
    light: "#4FC3F7",
  },
  warning: {
    dark: "#F57C00",
    main: "#FFA726",
    light: "#FFB74D",
  },
  font: {
    main: "#fff",
  },
};

export const lightColors = {
  primary: {
    dark: "#1F375D",
    main: "#33518B",
    light: "#83A2DB",
  },
  secondary: {
    dark: "#5E95B9",
    main: "#8DC9DE",
    light: "#A3CFE3",
  },
  success: {
    dark: "#1B5E20",
    main: "#2E7D32",
    light: "#4CAF50",
  },
  error: {
    dark: "#C62828",
    main: "#D32F2F",
    light: "#EF5350",
  },
  info: {
    dark: "#01579B",
    main: "#0288D1",
    light: "#03A9F4",
  },
  warning: {
    dark: "#E65100",
    main: "#ED6C02",
    light: "#FF9800",
  },
  font: {
    main: "#000",
  },
};

const colors = {
  primary: {
    dark: "#6B90CC",
    main: "#B0C5EF",
    light: "#D6E4FD",
  },
  secondary: {
    dark: "#6099BC",
    main: "#99C9DD",
    light: "#BADAE8",
  },
  success: {
    dark: "#388E3C",
    main: "#66BB6A",
    light: "#81C784",
  },
  error: {
    dark: "#D33131",
    main: "#F44336",
    light: "#E57373",
  },
  info: {
    dark: "#0288D2",
    main: "#29B6F6",
    light: "#4FC3F7",
  },
  warning: {
    dark: "#F57C00",
    main: "#FFA726",
    light: "#FFB74D",
  },
  font: {
    main: "#000",
  },
};

export type ColorsType = typeof darkColors;

export const getMuiThemes = (mode: ModeType): ThemeOptions => {
  const isDarkMode = mode === ModeType.DARK;

  return {
    palette: { mode, ...(isDarkMode ? darkColors : lightColors) },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            color: isDarkMode ? "#fff" : "#000",
          },
        },
      },
    },
  };
};
