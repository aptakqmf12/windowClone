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

import UserList from "./userManage/userList";

const enum PathType {
  DELEGATION = "위임전결규정",
  FORM_ROOM = "양식함",
  USER_MANAGE = "사용자관리",
  PERMISSION = "권한설정",
  PARTNER_MANAGE = "협력사관리",
  CODE_MANAGE = "코드관리",
}

const FIXED_PATH = [
  {
    name: "위임전결규정",
    path: PathType.DELEGATION,
  },
  {
    name: "양식함",
    path: PathType.FORM_ROOM,
  },
  {
    name: "사용자관리",
    path: PathType.USER_MANAGE,
  },
  {
    name: "권한설정",
    path: PathType.PERMISSION,
  },
  {
    name: "협력사관리",
    path: PathType.PARTNER_MANAGE,
  },
  {
    name: "코드관리",
    path: PathType.CODE_MANAGE,
  },
];

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
          {FIXED_PATH.map((path, i) => (
            <li
              key={i}
              onClick={() => {
                setCurrentPath(path.path);
              }}
            >
              <DescriptionOutlinedIcon />
              {path.name}
            </li>
          ))}
        </ul>
      </div.wrap>
    );
  }

  return (
    <div.sub>
      <div className="side">
        {[
          {
            name: "HOME",
            path: undefined,
          },
          ...FIXED_PATH,
        ].map((tab, index) => {
          const { path, name } = tab;
          return (
            <ListItem
              key={index}
              onClick={() => setCurrentPath(path)}
              disablePadding
            >
              <ListItemButton>
                {/* <ListItemIcon>{icon}</ListItemIcon> */}
                <Typography>{name}</Typography>
              </ListItemButton>
            </ListItem>
          );
        })}
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
      border-right: 1px #e8e8e8 solid;
    }
    .component {
      padding: 10px;
    }
  `,
};
