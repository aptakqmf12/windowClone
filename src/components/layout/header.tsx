import { useState, ChangeEvent } from "react";
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
  Popover,
} from "@mui/material";
import { Person, Logout, ExitToApp, Close } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { requestLogout, testApi } from "@api/sign";
import { useWidgetStore } from "@store/widget";
import Mypage from "@components/pages/mypage";
import { ModeType, useCommonStore } from "@store/common";

export default function Header() {
  const navigate = useNavigate();
  const { mode, changeMode } = useCommonStore();
  const { showWidget, setShowWidget } = useWidgetStore();
  const { currentWindows, toggleShowWindow } = useWindowStore();
  const { isLogin, setLogin } = useLoginStore();
  const { i18n } = useTranslation();

  const [site, setSite] = useState<string>();
  const [openMypage, setOpenMypage] = useState(false);

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
      <div.head>
        <div className="btns">
          <div>
            <Switch
              value={mode === ModeType.DARK}
              onChange={(e) =>
                changeMode(e.target.checked ? ModeType.DARK : ModeType.LIGHT)
              }
            />
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => setOpenMypage(!openMypage)}
            aria-describedby={"test"}
            className="btn"
          >
            <Person sx={{ width: 40, height: 40 }} style={{ color: "white" }} />
            <Typography color={"white"}>마이페이지</Typography>
          </div>

          {openMypage && (
            <div.modal>
              <div onClick={() => setOpenMypage(false)} className="close">
                <Close />
              </div>
              <Mypage />
            </div.modal>
          )}

          <div onClick={onLogout} style={{ cursor: "pointer" }} className="btn">
            <ExitToApp
              sx={{ width: 40, height: 40 }}
              style={{ color: "white" }}
            />
            <Typography color={"white"}>로그아웃</Typography>
          </div>
        </div>
      </div.head>

      <div.select>
        <Select
          value={site}
          defaultValue="none"
          onChange={onSiteChange}
          sx={{
            width: 300,
            border: "1px white solid",
            color: "white",
            ".MuiSelect-icon": { color: "white" },
          }}
          size="small"
          placeholder="현장명을 입력하세요."
        >
          <MenuItem value={"none"} disabled>
            현장명을 입력하세요.
          </MenuItem>
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
  head: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;

    .btns {
      display: flex;
      gap: 10px;

      .btn {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  `,

  select: styled.div``,
  switch: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `,

  modal: styled.div`
    position: absolute;
    right: 60px;
    top: 10px;
    width: 500px;
    background-color: white;
    z-index: 100;

    .close {
      display: inline-flex;
      background-color: red;
    }
  `,
};

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
