import { useState, useEffect, useRef } from "react";
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
import useOutsideClick from "@hook/useOutsideClick";

export default function MyHome() {
  const { showWidget } = useWidgetStore();
  const { currentWindows, toggleShowWindow } = useWindowStore();
  const { isLogin } = useLoginStore();
  const { mode } = useCommonStore();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (isLogin === false) {
  //     navigate("/signin");
  //   }
  // }, [isLogin]);

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
  const [clicked, setClicked] = useState(false);
  const [open, setOpen] = useState(false);

  const itemRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  useOutsideClick(itemRef, () => setClicked(false));
  useOutsideClick(popoverRef, () => setOpen(false));

  const click = () => {
    setClicked(true);
  };
  const doubleClick = () => {
    console.log("open window");
  };
  const rightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // 다른 item의 open을 false로 처리
    setOpen(true);
  };

  return (
    <div>
      <div
        className="item"
        onClick={click}
        onDoubleClick={doubleClick}
        onContextMenu={rightClick}
        style={{
          border: clicked ? "1px dashed white" : "none",
        }}
        ref={itemRef}
      >
        <Apps sx={{ width: 50, height: 50 }} color="secondary" />

        {open && (
          <div.popOver ref={popoverRef}>
            <div>
              <Button>열기</Button>
            </div>
            <div>
              <Button>바로가기 제거</Button>
            </div>
          </div.popOver>
        )}
      </div>
    </div>
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
    margin: 100px 220px 100px 40px;

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
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        cursor: pointer;
        &:hover {
          background-color: rgba(0, 0, 0, 0.1);
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

  popOver: styled.div`
    position: absolute;
    left: 0;
    right: 0;
    width: 150px;
    background-color: white;
    border-radius: 4px;
    z-index: 99999;
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
