import { useState, useEffect } from "react";
import styled from "styled-components";
import { Apps, Build, PostAdd, Settings, Search } from "@mui/icons-material";
import { useWindowStore } from "@store/window";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SxProps, Theme } from "@mui/material";
import LogoIcon from "@components/icons/logo";
import { MenuType, getMenuList } from "@api/menu";

import ControlPanel from "@components/packages/controlPanel";
import Spreadjs from "@components/packages/spreadjs";
import Wijmo from "@components/packages/wijmo";
import PackageCenter from "@components/packages/packageCenter";
import LibraryRoom from "@components/packages/libraryRoom";

export default function Sidebar() {
  const { appendWindow } = useWindowStore();

  const [menuList, setMenuList] = useState<MenuType[]>([]);

  useEffect(() => {
    getMenuList().then((res) => {
      setMenuList(res.list);
    });
  }, []);

  const iconSx: SxProps<Theme> = {
    width: 30,
    height: 30,
    fill: "#707070",
  };

  const FIXED_STATIONS = [
    {
      icon: <Apps sx={iconSx} />,
      onclick: () =>
        appendWindow({ name: "패키지 센터", component: <PackageCenter /> }),
    },
    {
      icon: <Build sx={iconSx} color="disabled" />,
      onclick: () =>
        appendWindow({ name: "제어판", component: <ControlPanel /> }),
    },
    {
      icon: <PostAdd sx={iconSx} />,
      onclick: () =>
        appendWindow({ name: "자료실", component: <LibraryRoom /> }),
    },
    {
      icon: <Settings sx={iconSx} />,
      onclick: () =>
        appendWindow({
          name: "Riskzero 3.0 station 설정",
          component: <div>Riskzero 3.0 station 설정</div>,
        }),
    },
    {
      icon: <Search sx={iconSx} />,
      onclick: () =>
        appendWindow({ name: "도움말", component: <div>도움말</div> }),
    },
  ];

  const [isFold, setIsFold] = useState(false);

  return (
    <div.motion.wrap
      initial={{ x: 0, y: "-50%" }}
      animate={{ x: isFold ? 15 - 100 : 0, y: "-50%" }}
      transition={{ ease: "linear" }}
    >
      <div.sidebar>
        <ul>
          {FIXED_STATIONS.map((station, i) => (
            <li onClick={station.onclick} key={i}>
              {station.icon}
            </li>
          ))}
        </ul>
      </div.sidebar>

      <div.btn onClick={() => setIsFold(!isFold)}></div.btn>
    </div.motion.wrap>
  );
}

const div = {
  motion: {
    wrap: styled(motion.div)`
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);

      display: flex;
      align-items: center;
    `,
  },

  sidebar: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100px;
    height: 668px;

    border-radius: 0 80px 80px 0;
    background-color: rgba(255, 255, 255, 0.7);

    .logo {
      margin-bottom: 50px;
      padding-bottom: 50px;
      border-bottom: 1px #454545 solid;
    }

    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 60px;
      li {
        cursor: pointer;
      }
    }
  `,

  btn: styled.div`
    width: 6px;
    height: 390px;
    background-color: #90caf9;
    border-radius: 0 50px 50px 0;

    cursor: pointer;
  `,
};
