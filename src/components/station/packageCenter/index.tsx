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
import RetireesManagement from "./sub/retireesList";
import RetireesList from "./sub/retireesList";

const enum PathType {
  DASHBOARD = "대시보드 관리",
  CONSTRUCTION_OVERVIEW = "공사개요",
  WORKER_MANAGE = "근로자 관리",
  WORKER_LIST = "근로자 목록",
  WORKER_ENTERANCE_MANAGE = "근로자 출역관리",
  RETIREES_LIST = "퇴직자 목록",

  WORKER_SAFETY_CHECK = "근로자 안전점검",
  OCCUPATIONAL_SAFETY_AND_HEALTH_ACT = "안전보건지지침",
  LEGAL_INFORMATION = "법령정보",
  SCHEDULER = "스케쥴러",
  MEMO = "MEMO",
  TO_DO_LIST_MANAGE = "TO DO LIST 관리",
  EMERGENCY_CALL = "비상연락망",
  RISK_NOTIFICATION = "위험알림",
}

interface PackageCenterProps {
  uuid: string;
}

export default function PackageCenter({ uuid }: PackageCenterProps) {
  const [currentPath, setCurrentPath] = useState<PathType | undefined>();

  const renderCompontntByPath = (path: PathType) => {
    switch (path) {
      case PathType.DASHBOARD:
        return <div>대시보드</div>;
      case PathType.CONSTRUCTION_OVERVIEW:
        return <div>공사개요</div>;
      case PathType.WORKER_MANAGE:
        return <div>근로자 관리</div>;
      case PathType.WORKER_LIST:
        return <div>근로자 목록</div>;
      case PathType.WORKER_ENTERANCE_MANAGE:
        return <div>근로자 출역관리</div>;
      case PathType.RETIREES_LIST:
        return <RetireesList />;
      case PathType.WORKER_SAFETY_CHECK:
        return <div>근로자 안전점검</div>;
      case PathType.OCCUPATIONAL_SAFETY_AND_HEALTH_ACT:
        return <div>안전보건지지침</div>;
      case PathType.LEGAL_INFORMATION:
        return <div>법령정보</div>;
      case PathType.SCHEDULER:
        return <div>스케쥴러</div>;
      case PathType.MEMO:
        return <div>MEMO</div>;
      case PathType.TO_DO_LIST_MANAGE:
        return <div>TO DO LIST 관리</div>;
      case PathType.EMERGENCY_CALL:
        return <div>비상연락망</div>;
      case PathType.RISK_NOTIFICATION:
        return <div>위험알림</div>;

      default:
        return <></>;
    }
  };
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
      path: PathType.DASHBOARD,
      onClick: () => {
        setCurrentPath(PathType.DASHBOARD);
      },
    },
    {
      name: "공사개요",
      icon: <ArrowForward />,
      path: PathType.CONSTRUCTION_OVERVIEW,
      onClick: () => {
        setCurrentPath(PathType.CONSTRUCTION_OVERVIEW);
      },
    },

    {
      name: "근로자 관리",
      icon: <ArrowForward />,
      path: PathType.WORKER_MANAGE,
      onClick: () => {},
      childList: [
        {
          name: "근로자 목록",
          icon: <People />,
          path: PathType.WORKER_MANAGE,
          onClick: () => {
            setCurrentPath(PathType.WORKER_MANAGE);
          },
        },
        {
          name: "근로자 출역관리",
          icon: <People />,
          path: PathType.WORKER_MANAGE,
          onClick: () => {
            setCurrentPath(PathType.WORKER_ENTERANCE_MANAGE);
          },
        },
        {
          name: "퇴직자 목록",
          icon: <People />,
          path: PathType.WORKER_MANAGE,
          onClick: () => {
            setCurrentPath(PathType.RETIREES_LIST);
          },
        },
      ],
    },
    {
      name: "근로자 안전점검",
      icon: <ArrowForward />,
      path: PathType.WORKER_SAFETY_CHECK,
      onClick: () => {
        setCurrentPath(PathType.WORKER_SAFETY_CHECK);
      },
    },
    {
      name: "안전보건지지침",
      icon: <ArrowForward />,
      path: PathType.OCCUPATIONAL_SAFETY_AND_HEALTH_ACT,
      onClick: () => {
        setCurrentPath(PathType.OCCUPATIONAL_SAFETY_AND_HEALTH_ACT);
      },
    },
    {
      name: "법령정보",
      icon: <ArrowForward />,
      path: PathType.LEGAL_INFORMATION,
      onClick: () => {
        setCurrentPath(PathType.LEGAL_INFORMATION);
      },
    },
    {
      name: "스케쥴러",
      icon: <ArrowForward />,
      path: PathType.SCHEDULER,
      onClick: () => {
        setCurrentPath(PathType.SCHEDULER);
      },
    },
    {
      name: "MEMO",
      icon: <ArrowForward />,
      path: PathType.MEMO,
      onClick: () => {
        setCurrentPath(PathType.MEMO);
      },
    },
    {
      name: "TO DO LIST 관리",
      icon: <ArrowForward />,
      path: PathType.TO_DO_LIST_MANAGE,
      onClick: () => {
        setCurrentPath(PathType.TO_DO_LIST_MANAGE);
      },
    },
    {
      name: "비상연락망",
      icon: <ArrowForward />,
      path: PathType.EMERGENCY_CALL,
      onClick: () => {
        setCurrentPath(PathType.EMERGENCY_CALL);
      },
    },
    {
      name: "위험알림",
      icon: <ArrowForward />,
      path: PathType.RISK_NOTIFICATION,
      onClick: () => {
        setCurrentPath(PathType.RISK_NOTIFICATION);
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
