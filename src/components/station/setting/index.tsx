import { useState, useEffect } from "react";
import { renderCompontntByPath, Paths } from "./router";
import { Build, Home, Topic } from "@mui/icons-material";
import { Typography } from "@mui/material";
import NestedAccordion from "@components/layout/nestedAccordion";
import styled from "styled-components";

export default function Setting() {
  const [currentPath, setCurrentPath] = useState<string[]>(Paths.HOME);

  useEffect(() => {}, [currentPath]);

  const FIXED_LIST_DATA = [
    {
      name: "STATION설정",

      path: Paths.HOME,
      onClick: () => setCurrentPath(Paths.HOME),
    },
    {
      name: "디스플레이 설정",
      icon: (
        <span
          style={{
            width: 14,
            height: 14,
            backgroundColor: "#880000",
            borderRadius: "50%",
          }}
        ></span>
      ),
      path: Paths.DISPLAY,
      onClick: () => setCurrentPath(Paths.DISPLAY),
    },
    {
      name: "위젯 설정",
      icon: (
        <span
          style={{
            width: 14,
            height: 14,
            backgroundColor: "#880000",
            borderRadius: "50%",
          }}
        ></span>
      ),
      path: Paths.WIDGET,
      onClick: () => setCurrentPath(Paths.WIDGET),
    },
    {
      name: "업데이트",
      icon: (
        <span
          style={{
            width: 14,
            height: 14,
            backgroundColor: "#880000",
            borderRadius: "50%",
          }}
        ></span>
      ),
      path: Paths.UPDATE,
      onClick: () => setCurrentPath(Paths.UPDATE),
    },
  ];

  if (currentPath === Paths.HOME) {
    return (
      <SettingMain list={FIXED_LIST_DATA} setCurrentPath={setCurrentPath} />
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

const SettingMain = ({
  list,
  setCurrentPath,
}: {
  list: any[];
  setCurrentPath: (v: string[]) => void;
}) => {
  return (
    <div.wrap>
      <div>
        <Build color="primary" sx={{ width: 50, height: 50 }} />
        <Typography fontSize={20}>설정</Typography>
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
      background-color: #f5f5f5;
    }
    .component {
      padding: 10px;
      width: calc(100% - 220px);
    }
  `,
};
