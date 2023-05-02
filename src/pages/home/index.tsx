import { useEffect } from "react";
import styled from "styled-components";
import { useWindowStore } from "@store/window";
import { useNavigate } from "react-router-dom";
import { useLoginStore } from "@store/login";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { TimeClock } from "@mui/x-date-pickers/TimeClock";
import dayjs from "dayjs";

import Window from "@components/layout/window";
import Header from "@components/layout/header";
import Sidebar from "@components/layout/sidebar";
import Widget from "@components/layout/widget";
import { useWidgetStore } from "@store/widget";

export default function MyHome() {
  const { showWidget } = useWidgetStore();
  const { currentWindows } = useWindowStore();
  const { isLogin } = useLoginStore();
  const navigate = useNavigate();

  // 비로그인시 로그인페이지로 이동
  useEffect(() => {
    if (isLogin === false) {
      navigate("/signin");
    }
  }, [isLogin]);

  return (
    <div.wrap>
      <Header />

      <div.body className="station">
        <Sidebar />
      </div.body>

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

const div = {
  wrap: styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
  `,
  body: styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    background: url("/public/images/bg_hero.png") no-repeat;
    background-size: cover;
    object-fit: cover;

    background-color: #ddd7e6;
    overflow: hidden;
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
