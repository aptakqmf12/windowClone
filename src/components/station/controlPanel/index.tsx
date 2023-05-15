import { useState, useEffect } from "react";
import styled from "styled-components";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

import UserList from "./userManage/userList/view";
import { Home, People, Build, Topic } from "@mui/icons-material";
import NestedAccordion from "@components/layout/nestedAccordion";
import { Typography } from "@mui/material";
import CreateUser from "./userManage/createUser";
import ReqeustCreateUser from "./userManage/reqeustCreateUser";
import PartnerList from "./partnerManage/partnerList";
import Permission from "./permission";
import FormRoom from "./formRoom";

import { useWindowStore } from "@store/window";

export default function ControlPanel() {
  const { setDirectory } = useWindowStore();
  const [currentPath, setCurrentPath] = useState<string>("");

  useEffect(() => {
    setDirectory(currentPath);
  }, [currentPath]);

  const renderCompontntByPath = (path: string) => {
    switch (path) {
      case "위임전결규정":
        return <div>위임전결규정</div>;
      case "양식함":
        return <FormRoom />;

      case "사용자관리":
        return <UserList />;

      case "계정생성요청":
        return <ReqeustCreateUser />;

      case "계정 직접 생성":
        return <CreateUser />;

      case "권한설정":
        return <Permission />;

      case "협력사관리":
        return <PartnerList />;

      case "코드관리":
        return <div>코드관리</div>;

      default:
        return <></>;
    }
  };

  const FIXED_LIST_DATA = [
    {
      name: "Home",
      icon: <Home />,
      path: "",
      onClick: () => {
        setCurrentPath("");
      },
    },
    {
      name: "위임전결규정",
      path: "위임전결규정",
      onClick: () => {
        setCurrentPath("위임전결규정");
      },
    },
    {
      name: "양식함",
      path: "양식함",
      onClick: () => {
        setCurrentPath("양식함");
      },
    },
    {
      name: "사용자 관리",
      path: "사용자관리",
      icon: <People />,
      onClick: () => {},
      childList: [
        {
          name: "사용자 목록",
          path: "사용자관리/사용자 목록",
          icon: <People />,
          onClick: () => {
            setCurrentPath("사용자관리/사용자 목록");
          },
        },
        {
          name: "계정생성요청",
          path: "사용자관리/계정생성요청",
          onClick: () => {
            setCurrentPath("사용자관리/계정생성요청");
          },
        },
        {
          name: "계정 직접 생성",
          path: "사용자관리/계정 직접 생성",
          icon: <People />,
          onClick: () => {
            setCurrentPath("사용자관리/계정 직접 생성");
          },
        },
      ],
    },
    {
      name: "권한설정",
      path: "권한설정",
      icon: <People />,
      onClick: () => {
        setCurrentPath("권한설정");
      },
    },
    {
      name: "협력사관리",
      path: "협력사관리",
      icon: <People />,
      onClick: () => {
        setCurrentPath("협력사관리");
      },
    },
    {
      name: "코드관리",
      path: "코드관리",
      onClick: () => {
        setCurrentPath("코드관리");
      },
    },
  ];

  if (currentPath.length === 0) {
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
