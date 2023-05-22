import { useState } from "react";
import styled from "styled-components";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import {
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Apps, ArrowForward, Home, People } from "@mui/icons-material";
import NestedAccordion from "@components/layout/nestedAccordion";
import RetireesManagement from "./retireesList/retireesList";
import RetireesList from "./retireesList/retireesList";
import { Paths, renderCompontntByPath } from "./router";

interface PackageCenterProps {
  uuid: string;
}

export default function PackageCenter({ uuid }: PackageCenterProps) {
  const [currentPath, setCurrentPath] = useState<string[] | undefined>();

  const FIXED_LIST_DATA = [
    {
      name: "Home",
      icon: <Home />,
      path: undefined,
      onClick: () => {
        setCurrentPath(undefined);
      },
    },
    {
      name: "대시보드 관리",
      icon: <ArrowForward />,
      path: Paths.DASHBOARD,
      onClick: () => {
        setCurrentPath(Paths.DASHBOARD);
      },
    },
    {
      name: "공사개요",
      icon: <ArrowForward />,
      path: Paths.CONSTRUCTION_OVERVIEW,
      onClick: () => {
        setCurrentPath(Paths.CONSTRUCTION_OVERVIEW);
      },
    },

    {
      name: "근로자 관리",
      icon: <ArrowForward />,
      path: Paths.WORKER_LIST,
      onClick: () => {},
      childList: [
        {
          name: "근로자 목록",

          path: Paths.WORKER_LIST,
          onClick: () => {
            setCurrentPath(Paths.WORKER_LIST);
          },
        },
        {
          name: "근로자 출역관리",

          path: Paths.WORKER_ENTERANCE_MANAGE,
          onClick: () => {
            setCurrentPath(Paths.WORKER_ENTERANCE_MANAGE);
          },
        },
        {
          name: "퇴직자 목록",
          icon: <People />,
          path: Paths.RETIREES_LIST,
          onClick: () => {
            setCurrentPath(Paths.RETIREES_LIST);
          },
        },
      ],
    },
    {
      name: "근로자 안전점검",
      icon: <ArrowForward />,
      path: Paths.WORKER_SAFETY_CHECK,
      onClick: () => {
        setCurrentPath(Paths.WORKER_SAFETY_CHECK);
      },
    },
    {
      name: "안전보건지지침",
      icon: <ArrowForward />,
      path: Paths.OCCUPATIONAL_SAFETY_AND_HEALTH_ACT,
      onClick: () => {
        setCurrentPath(Paths.OCCUPATIONAL_SAFETY_AND_HEALTH_ACT);
      },
    },
    {
      name: "법령정보",
      icon: <ArrowForward />,
      path: Paths.LEGAL_INFORMATION,
      onClick: () => {
        setCurrentPath(Paths.LEGAL_INFORMATION);
      },
    },
    {
      name: "스케쥴러",
      icon: <ArrowForward />,
      path: Paths.SCHEDULER,
      onClick: () => {
        setCurrentPath(Paths.SCHEDULER);
      },
    },
    {
      name: "MEMO",
      icon: <ArrowForward />,
      path: Paths.MEMO,
      onClick: () => {
        setCurrentPath(Paths.MEMO);
      },
    },
    {
      name: "TO DO LIST 관리",
      icon: <ArrowForward />,
      path: Paths.TO_DO_LIST_MANAGE,
      onClick: () => {
        setCurrentPath(Paths.TO_DO_LIST_MANAGE);
      },
    },
    {
      name: "비상연락망",
      icon: <ArrowForward />,
      path: Paths.EMERGENCY_CONTACT,
      onClick: () => {
        setCurrentPath(Paths.EMERGENCY_CONTACT);
      },
    },
    {
      name: "위험알림",
      icon: <ArrowForward />,
      path: Paths.RISK_NOTIFICATION,
      onClick: () => {
        setCurrentPath(Paths.RISK_NOTIFICATION);
      },
    },
  ];
  if (currentPath === undefined) {
    return (
      <div.wrap>
        <Apps color="info" sx={{ width: 33, height: 33 }} />
        <div style={{ minWidth: "110px" }}>패키지 센터</div>

        <Divider orientation="vertical" variant="middle" flexItem />
        <div.right>
          {FIXED_LIST_DATA.slice(1).map((list, i) => (
            <div.col
              key={i}
              onClick={() => {
                setCurrentPath(list.path);
              }}
            >
              <DescriptionOutlinedIcon />
              {list.name}
            </div.col>
          ))}
        </div.right>
      </div.wrap>
    );
  }

  return (
    <div.sub>
      <div className="side">
        <NestedAccordion list={FIXED_LIST_DATA} currentPath={currentPath} />
      </div>

      <div className="component">{renderCompontntByPath(currentPath)}</div>
    </div.sub>
  );
}

const div = {
  wrap: styled.div`
    display: flex;
    flex-direction: initial;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 50px;
  `,
  sub: styled.div`
    display: flex;
    justify-content: flex-start;
    height: 100%;
    .side {
      width: 200px;
      min-width: 200px;
      border-right: 1px #e8e8e8 solid;
    }
    .component {
      padding: 10px;
      width: calc(100% - 200px);
    }
  `,
  right: styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
  `,
  col: styled.div`
    flex-basis: 50%;
    -webkit-box-flex: 0;
    flex-grow: 0;
    max-width: 50%;
    width: 50%;
    min-width: 200px;
  `,
};
