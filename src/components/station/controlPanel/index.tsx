import { useState } from "react";
import styled from "styled-components";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

import UserList from "./userManage/userList";
import { Home, People, Build, Topic } from "@mui/icons-material";
import NestedAccordion from "@components/layout/nestedAccordion";
import { Typography } from "@mui/material";

const enum PathType {
  DELEGATION = "위임전결규정",
  FORM_ROOM = "양식함",
  USER_MANAGE = "사용자관리",
  USER_REQUEST_CREATE_ACCOUNT = "계정생성요청",
  USER_CREATE_ACCOUNT = "계정 직접 생성",
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
      case PathType.USER_REQUEST_CREATE_ACCOUNT:
        return <div>계정생성요청</div>;
      case PathType.USER_CREATE_ACCOUNT:
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

      path: PathType.DELEGATION,
      onClick: () => {
        setCurrentPath(PathType.DELEGATION);
      },
    },
    {
      name: "양식함",

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

          path: PathType.USER_REQUEST_CREATE_ACCOUNT,
          onClick: () => {
            setCurrentPath(PathType.USER_REQUEST_CREATE_ACCOUNT);
          },
        },
        {
          name: "계정 직접 생성",

          path: PathType.USER_CREATE_ACCOUNT,
          onClick: () => {
            setCurrentPath(PathType.USER_CREATE_ACCOUNT);
          },
        },
      ],
    },
    {
      name: "권한설정",

      path: PathType.PERMISSION,
      onClick: () => {
        setCurrentPath(PathType.PERMISSION);
      },
    },
    {
      name: "협력사관리",

      path: PathType.PARTNER_MANAGE,
      onClick: () => {
        setCurrentPath(PathType.PARTNER_MANAGE);
      },
    },
    {
      name: "코드관리",

      path: PathType.CODE_MANAGE,
      onClick: () => {
        setCurrentPath(PathType.CODE_MANAGE);
      },
    },
  ];

  if (currentPath === undefined) {
    return (
      <div.wrap>
        <div>
          <Build color="primary" sx={{ width: 50, height: 50 }} />
          <Typography fontSize={20}>제어판</Typography>
        </div>

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
              <Topic color="secondary" sx={{ width: 40, height: 30 }} />
              <Typography fontSize={17} color="secondary">
                {list.name}
              </Typography>
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
    height: 100%;
    padding: 0 50px;
    overflow: hidden;

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
      width: 220px;
      border-right: 1px #e8e8e8 solid;
    }
    .component {
      padding: 10px;
      width: calc(100% - 220px);
    }
  `,
};
