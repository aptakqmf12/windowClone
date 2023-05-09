import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Apps,
  Build,
  PostAdd,
  Settings,
  Search,
  ArrowLeft,
  ArrowRight,
} from "@mui/icons-material";
import { useWindowStore } from "@store/window";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SxProps, Theme, Typography } from "@mui/material";
import LogoIcon from "@components/icons/logo";
import { PackageMenuType, getPackageMenuList } from "@api/menu";

import ControlPanel from "@components/station/controlPanel";
import Spreadjs from "@components/station/spreadjs";
import Wijmo from "@components/station/wijmo";
import PackageCenter from "@components/station/packageCenter";
import LibraryRoom from "@components/station/libraryRoom";

export default function Sidebar() {
  const { appendWindow } = useWindowStore();

  const [menuList, setMenuList] = useState<PackageMenuType[]>([]);

  useEffect(() => {
    getPackageMenuList({ depth: 1 }).then((res) => {
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
      name: "패키지 센터",
      icon: <Apps sx={iconSx} />,
      onclick: function () {
        appendWindow({
          name: "패키지 센터",
          icon: <Apps sx={iconSx} />,
          component: <PackageCenter />,
        });
      },
    },
    {
      name: "제어판",
      icon: <Build sx={iconSx} color="disabled" />,
      onclick: function () {
        appendWindow({
          name: "제어판",
          icon: <Build sx={iconSx} />,
          component: <ControlPanel />,
        });
      },
    },
    {
      name: "자료실",
      icon: <PostAdd sx={iconSx} />,
      onclick: function () {
        appendWindow({
          name: "자료실",
          icon: <PostAdd sx={iconSx} />,
          component: <LibraryRoom />,
        });
      },
    },
    {
      name: "설정",
      icon: <Settings sx={iconSx} />,
      onclick: function () {
        appendWindow({
          name: "설정",
          icon: <Settings sx={iconSx} />,
          component: <div>설정</div>,
        });
      },
    },
    {
      name: "도움말",
      icon: <Search sx={iconSx} />,
      onclick: function () {
        appendWindow({
          name: "도움말",
          icon: <Search sx={iconSx} />,
          component: <div>도움말</div>,
        });
      },
    },
  ];

  const [isFold, setIsFold] = useState(false);

  const foldIconSx = { color: "#90caf9" };
  const foldIcon = isFold ? (
    <ArrowRight sx={foldIconSx} />
  ) : (
    <ArrowLeft sx={foldIconSx} />
  );

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
              <Typography variant="caption">{station.name}</Typography>
            </li>
          ))}
        </ul>

        {/* {menuList.map((menu) => (
          <div>{menu.menuName}</div>
        ))} */}
      </div.sidebar>

      <div.bar onClick={() => setIsFold(!isFold)}>
        <div className="btn">{foldIcon}</div>
      </div.bar>
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

    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 60px;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;

        &:hover {
          > * {
            color: red;
            fill: red;
            transition: none;
          }
        }
      }
    }
  `,

  bar: styled.div`
    position: relative;
    width: 6px;
    height: 390px;
    background-color: #90caf9;
    border-radius: 0 50px 50px 0;
    cursor: pointer;

    .btn {
      position: absolute;
      left: 6px;
      top: 50%;
      transform: translateY(-50%);

      width: 14px;
      height: 130px;
      display: flex;
      align-items: center;
      justify-content: center;

      align-items: center;
      background-color: #fff;
      border-radius: 0 10px 10px 0;
    }
  `,
};
