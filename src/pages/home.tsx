import { useState, useEffect } from "react";
import styled from "styled-components";
import { useWindowStore } from "@store/window";
import { useNavigate } from "react-router-dom";
import { useLoginStore } from "@store/login";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { TimeClock } from "@mui/x-date-pickers/TimeClock";
import dayjs from "dayjs";
import { Apps, Home } from "@mui/icons-material";

import Window from "@components/layout/window";
import Header from "@components/layout/header";
import Sidebar from "@components/layout/sidebar";
import Widget from "@components/layout/widget";
import { useWidgetStore } from "@store/widget";
import {
  Avatar,
  Button,
  Chip,
  Popover,
  SvgIconTypeMap,
  Typography,
} from "@mui/material";
import Logo from "@components/layout/logo";
import { ModeType, useCommonStore } from "@store/common";

export default function MyHome() {
  const { showWidget } = useWidgetStore();
  const { currentWindows, toggleShowWindow } = useWindowStore();
  const { isLogin } = useLoginStore();
  const { mode } = useCommonStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin === false) {
      navigate("/signin");
    }
  }, [isLogin]);

  return (
    <div.wrap>
      <Logo />

      <Header />

      <div.body mode={mode} className="station">
        <Sidebar />

        <div.background>
          <div className="parent">
            {Array.from({ length: 50 }, (_, i) => i).map((d, j) => (
              <BackgroundItem key={j} />
            ))}
          </div>
        </div.background>
      </div.body>

      <ul.nav>
        {currentWindows.map((window, i) => (
          <li onClick={() => toggleShowWindow(window.uuid)} key={i}>
            <Chip
              avatar={<Avatar>{window.icon}</Avatar>}
              label={window.name}
              variant="filled"
              color={window.isShow ? "primary" : "default"}
            />
          </li>
        ))}
      </ul.nav>

      {/* windows */}
      {currentWindows.map((window) => (
        <Window {...window} key={window.uuid} />
      ))}

      {/* widgets */}
      {showWidget && (
        <div.widget>
          <Widget
            component={<DateCalendar defaultValue={dayjs(new Date())} />}
          />
          <Widget component={<TimeClock />} />
        </div.widget>
      )}
    </div.wrap>
  );
}

const BackgroundItem = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<any>) => {
    event.preventDefault();

    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <div className="item" onContextMenu={handleClick}>
        <Apps sx={{ width: 50, height: 50 }} color="secondary" />
      </div>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div>
          <Button>열기</Button>
        </div>
        <div>
          <Button>바로가기 제거</Button>
        </div>
      </Popover>
    </>
  );
};

const div = {
  wrap: styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
  `,
  body: styled.div<{ mode: ModeType }>`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    background: ${({ mode }) =>
      mode === ModeType.DARK
        ? "black"
        : `url("/images/bg_hero.png") no-repeat`};
    background-size: cover;
    object-fit: cover;
    overflow: hidden;
  `,

  background: styled.div`
    width: 100%;
    height: calc(100% - 200px);
    margin: 100px 220px 100px 150px;
    border: 1px white dashed;
    overflow: hidden;

    .parent {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-content: flex-start;
      flex-wrap: wrap;
      width: 100%;
      height: 100%;
      gap: 10px;

      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        cursor: pointer;
        &:hover {
          background-color: rgba(0, 0, 0, 0.2);
        }
      }
    }
  `,

  widget: styled.div`
    position: absolute;
    right: 20px;
    bottom: 20px;

    display: flex;
    flex-direction: row-reverse;
    gap: 20px;
  `,
};

const ul = {
  nav: styled.ul`
    position: absolute;
    left: 20px;
    bottom: 20px;

    display: flex;
    gap: 10px;

    li {
      cursor: pointer;
    }
  `,
};
