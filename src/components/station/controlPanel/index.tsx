import { useState, useEffect } from "react";
import styled from "styled-components";
import { Home, People, Build, Topic } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { useWindowStore } from "@store/window";
import NestedAccordion from "@components/layout/nestedAccordion";
import { Paths, renderCompontntByPath } from "./router";

interface ControlPanelProps {
  uuid: string;
}

export default function ControlPanel({ uuid }: ControlPanelProps) {
  const { setDirectory } = useWindowStore();
  const [currentPath, setCurrentPath] = useState<Paths>(Paths.HOME);

  useEffect(() => {
    setDirectory(uuid, currentPath);
  }, [currentPath]);

  const FIXED_LIST_DATA = [
    {
      name: "Home",
      icon: <Home />,
      path: Paths.HOME,
      onClick: () => setCurrentPath(Paths.HOME),
    },
    {
      name: "위임 전결 규정",
      path: Paths.DELEGATION,
      onClick: () => setCurrentPath(Paths.DELEGATION),
    },
    {
      name: "양식함",
      path: Paths.FORM_ROOM,
      onClick: () => setCurrentPath(Paths.FORM_ROOM),
    },
    {
      name: "사용자 관리",
      path: Paths.USER_LIST,
      icon: <People />,
      onClick: () => {},
      childList: [
        {
          name: "사용자 목록",
          path: Paths.USER_LIST,
          icon: <People />,
          onClick: () => setCurrentPath(Paths.USER_LIST),
        },
        {
          name: "계정생성요청",
          path: Paths.REQUEST_CREATE_USER,
          onClick: () => setCurrentPath(Paths.REQUEST_CREATE_USER),
        },
        {
          name: "계정 직접 생성",
          path: Paths.CREATE_USER,
          icon: <People />,
          onClick: () => setCurrentPath(Paths.CREATE_USER),
        },
      ],
    },
    {
      name: "권한 설정",
      path: Paths.PERMISSION,
      icon: <People />,
      onClick: () => setCurrentPath(Paths.PERMISSION),
    },
    {
      name: "협력사 관리",
      path: Paths.PARTNER_MANAGE,
      icon: <People />,
      onClick: () => setCurrentPath(Paths.PARTNER_MANAGE),
    },
    {
      name: Paths.CODE_MANAGE,
      path: "코드관리",
      onClick: () => setCurrentPath(Paths.CODE_MANAGE),
    },
  ];

  if (currentPath === Paths.HOME) {
    return (
      <ControlPanelMain
        list={FIXED_LIST_DATA}
        setCurrentPath={setCurrentPath}
      />
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

const ControlPanelMain = ({
  list,
  setCurrentPath,
}: {
  list: any[];
  setCurrentPath: (v: Paths) => void;
}) => {
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
        {list.slice(1).map((list, i) => (
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
};

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
