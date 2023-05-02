import { useState, useEffect, ChangeEvent } from "react";
import styled from "styled-components";
import { useWindowStore } from "../../store/window";
import { useLoginStore } from "@store/login";
import { useTranslation } from "react-i18next";
import {
  Select,
  MenuItem,
  SelectChangeEvent,
  Chip,
  Avatar,
  Button,
  Switch,
  FormControlLabel,
  styled as muiStyled,
  Typography,
} from "@mui/material";
import { Person, Logout, ExitToApp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { requestLogout, testApi } from "@api/sign";
import { useWidgetStore } from "@store/widget";

export default function Header() {
  const navigate = useNavigate();
  const { showWidget, setShowWidget } = useWidgetStore();
  const { currentWindows, toggleShowWindow } = useWindowStore();
  const { isLogin, setLogin } = useLoginStore();
  const { i18n } = useTranslation();

  const [site, setSite] = useState<string>("A 현장");

  const onSiteChange = (e: SelectChangeEvent) => {
    setSite(e.target.value as string);
  };

  const onLogout = () => {
    requestLogout();

    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setLogin(false);
    navigate("/signin");
  };

  const onChangeWidgetShow = (e: ChangeEvent<HTMLInputElement>) => {
    setShowWidget(e.target.checked);
  };

  return (
    <header.wrap>
      <div.top>
        <div className="title">title</div>
        <div className="btn">
          <div
            onClick={() => navigate("/mypage")}
            style={{ cursor: "pointer" }}
          >
            <Person sx={{ width: 30, height: 30 }} style={{ color: "white" }} />
          </div>

          <div onClick={onLogout} style={{ cursor: "pointer" }}>
            <ExitToApp
              sx={{ width: 30, height: 30 }}
              style={{ color: "white" }}
            />
          </div>
        </div>
      </div.top>

      <div.select>
        <Select
          value={site}
          onChange={onSiteChange}
          sx={{
            width: 300,
            border: "1px white solid",
            color: "white",
            ".MuiSelect-icon": { color: "white" },
          }}
          size="small"
        >
          <MenuItem value={"A 현장"}>A 현장</MenuItem>
          <MenuItem value={"B 현장"}>B 현장</MenuItem>
        </Select>
      </div.select>

      <div.switch>
        <FormControlLabel
          control={
            <Switch
              value={showWidget}
              onChange={onChangeWidgetShow}
              size="medium"
            />
          }
          label={
            <Typography color={"white"}>{showWidget ? "on" : "off"}</Typography>
          }
        />
      </div.switch>
    </header.wrap>
  );
}

const header = {
  wrap: styled.header`
    position: absolute;
    right: 50px;
    top: 50px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  `,
};

const div = {
  top: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .title {
      width: 200px;
      background-color: ${(p) => p.theme.colors.primary.main};
    }

    .btn {
      display: flex;
    }
  `,

  select: styled.div``,
  switch: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `,
};

const ul = {
  nav: styled.ul`
    display: flex;
    gap: 10px;

    li {
      cursor: pointer;
    }
  `,
};

/* <ul.nav>
  {currentWindows.map((window, i) => (
    <li onClick={() => toggleShowWindow(window.uuid)} key={i}>
      <Chip
        avatar={<Avatar>{window.name.slice(0, 1)}</Avatar>}
        label={window.name}
        variant="filled"
        color={window.isShow ? "primary" : "default"}
        style={{ cursor: "pointer" }}
      />
    </li>
  ))}
</ul.nav> */

// language

// const [language, setLanguage] = useState<string>("");

// useEffect(() => {
//   setLanguage(localStorage.getItem("language") || "ko");
// }, []);

// const onLanguageChange = (e: SelectChangeEvent) => {
//   setLanguage(e.target.value as string);
// };

/* <div>
  <Select value={language} onChange={onLanguageChange}>
    <MenuItem
      value={"ko"}
      onClick={() => {
        i18n.changeLanguage("ko");
        localStorage.setItem("language", "ko");
      }}
    >
      ko
    </MenuItem>
    /
    <MenuItem
      value={"en"}
      onClick={() => {
        i18n.changeLanguage("en");
        localStorage.setItem("language", "en");
      }}
    >
      en
    </MenuItem>
  </Select>
</div> */
