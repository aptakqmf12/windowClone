import React, { useEffect, useState, useMemo } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import {
  getMuiThemes,
  lightColors,
  darkColors,
  grayScale,
} from "./style/theme";
import { PaletteOptions, createTheme } from "@mui/material/styles";

import useDisplay from "./hook/useDisplay";
import { useLoginStore } from "@store/login";
import RouterComponents from "./route";
import { GlobalStyle } from "./style/style";
import "./locale/i18n";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ModeType, useCommonStore } from "@store/common";

import { ErrorBoundary } from "react-error-boundary";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useInterceptor } from "@hook/useInterceptor";

function App() {
  const { isLogin, setLogin, setAccessToken, setRefreshToken } =
    useLoginStore();
  const { mode } = useCommonStore();
  const display = useDisplay();
  const theme = { colors: mode === ModeType.DARK ? darkColors : lightColors };
  const themes = { ...theme, ...display, grayScale };

  const muiTheme = createTheme(getMuiThemes(mode));

  useInterceptor(); // 인터셉터 로직

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");

    if (access_token) {
      setLogin(true);
    }
  }, [isLogin]);

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    const refresh_token = localStorage.getItem("refresh_token");

    setAccessToken(access_token || "");
    setRefreshToken(refresh_token || "");
  }, []);

  useEffect(() => {
    window.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  }, []);

  // @ts-ignore
  function ErrorHandler({ error }) {
    return (
      <div role="alert">
        <p>An error occurred:</p>
        <pre>{error.message}</pre>
        <Button onClick={() => (window.location.href = "/")}>홈으로</Button>
      </div>
    );
  }

  return (
    <StyledThemeProvider theme={themes}>
      <MuiThemeProvider theme={muiTheme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ErrorBoundary FallbackComponent={ErrorHandler}>
            <GlobalStyle />
            <RouterComponents />
          </ErrorBoundary>
        </LocalizationProvider>
      </MuiThemeProvider>
    </StyledThemeProvider>
  );
}

export default App;
