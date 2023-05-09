import { useState } from "react";
import styled from "styled-components";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import UserList from "./userManage/userList";
import {
  ExpandLess,
  ExpandMore,
  Home,
  ListAlt,
  People,
  ArrowForward,
} from "@mui/icons-material";
import NestedAccordion from "@components/layout/nestedAccordion";

const enum PathType {
  DELEGATION = "위임전결규정",
  FORM_ROOM = "양식함",
  USER_MANAGE = "사용자관리",
  REQUEST_CREATE_ACCOUNT = "계정생성요청",
  CREATE_ACCOUNT = "계정 직접 생성",

  PERMISSION = "권한설정",
  PARTNER_MANAGE = "협력사관리",
  CODE_MANAGE = "코드관리",
}

export default function ControlPanel() {
  const [currentPath, setCurrentPath] = useState<PathType | undefined>();

  const renderCompontntByPath = (path: PathType) => {
    switch (path) {
      case PathType.DELEGATION:
        return <div>위임전결규정</div>;
      case PathType.FORM_ROOM:
        return <div>양식함</div>;
      case PathType.USER_MANAGE:
        return <UserList />;
      case PathType.REQUEST_CREATE_ACCOUNT:
        return <div>계정생성요청</div>;
      case PathType.CREATE_ACCOUNT:
        return <div>계정 직접 생성</div>;
      case PathType.PERMISSION:
        return <div>권한설정</div>;
      case PathType.PARTNER_MANAGE:
        return <div>협력사관리</div>;
      case PathType.CODE_MANAGE:
        return <div>코드관리</div>;
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
      name: "위임전결규정",
      icon: <ArrowForward />,
      path: PathType.DELEGATION,
      onClick: () => {
        setCurrentPath(PathType.DELEGATION);
      },
    },
    {
      name: "양식함",
      icon: <ArrowForward />,
      path: PathType.FORM_ROOM,
      onClick: () => {
        setCurrentPath(PathType.FORM_ROOM);
      },
    },
    {
      name: "사용자 관리",
      icon: <People />,
      path: PathType.USER_MANAGE,
      onClick: () => {},
      childList: [
        {
          name: "사용자 목록",
          icon: <People />,
          path: PathType.USER_MANAGE,
          onClick: () => {
            setCurrentPath(PathType.USER_MANAGE);
          },
        },
        {
          name: "계정생성요청",
          icon: <People />,
          path: PathType.REQUEST_CREATE_ACCOUNT,
          onClick: () => {
            setCurrentPath(PathType.REQUEST_CREATE_ACCOUNT);
          },
        },
        {
          name: "계정 직접 생성",
          icon: <People />,
          path: PathType.CREATE_ACCOUNT,
          onClick: () => {
            setCurrentPath(PathType.CREATE_ACCOUNT);
          },
        },
      ],
    },
    {
      name: "권한설정",
      icon: <ArrowForward />,
      path: PathType.PERMISSION,
      onClick: () => {
        setCurrentPath(PathType.PERMISSION);
      },
    },
    {
      name: "협력사관리",
      icon: <ArrowForward />,
      path: PathType.PARTNER_MANAGE,
      onClick: () => {
        setCurrentPath(PathType.PARTNER_MANAGE);
      },
    },
    {
      name: "코드관리",
      icon: <ArrowForward />,
      path: PathType.CODE_MANAGE,
      onClick: () => {
        setCurrentPath(PathType.CODE_MANAGE);
      },
    },
  ];

  if (currentPath === undefined) {
    return (
      <div.wrap>
        <div>제어판 </div>

        <hr
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "#c6c6c6",
            outline: 0,
          }}
        />

        <ul>
          {FIXED_LIST_DATA.slice(1).map((list, i) => (
            <li
              key={i}
              onClick={() => {
                setCurrentPath(list.path);
              }}
            >
              <DescriptionOutlinedIcon />
              {list.name}
            </li>
          ))}
        </ul>
      </div.wrap>
    );
  }

  return (
    <div.sub>
      <div className="side">
        <NestedAccordion list={FIXED_LIST_DATA} />
      </div>

      <div className="component">{renderCompontntByPath(currentPath)}</div>
    </div.sub>
  );
}

const div = {
  wrap: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 50px;

    ul {
      display: flex;
      gap: 30px;
      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;
        cursor: pointer;
      }
    }
  `,

  sub: styled.div`
    display: flex;
    justify-content: flex-start;
    height: 100%;
    .side {
      width: 200px;
      border-right: 1px #e8e8e8 solid;
    }
    .component {
      padding: 10px;
    }
  `,
};
