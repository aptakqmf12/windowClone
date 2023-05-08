import { useState } from "react";
import styled from "styled-components";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { Divider } from "@mui/material";
import Template from "@components/layout/template";

const paths = {
  DELEGATION: "위임전결규정",
  FORM: "양식함",
  USERMANAGE: "사용자관리",
  PERMISSION: "권한설정",
};

export default function ControlPanel() {
  const [currentPath, setCurrentPath] = useState<string | undefined>();

  const renderCompontntByPath = (path: string | undefined) => {
    switch (path) {
      case "위임전결규정":
        return (
          <div>
            <Template
              data={[
                { name: "근로자관리", component: <div>근로자관리</div> },
                { name: "출역현황", component: <div>출역현황</div> },
                {
                  name: "근로자안전점검",
                  component: <div>근로자안전점검</div>,
                },
              ]}
            />

            <div>
              <button onClick={() => setCurrentPath(undefined)}>
                뒤로가기
              </button>
            </div>
          </div>
        );

      default:
        return (
          <>
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
              {["위임전결규정", "양식함", "사용자관리", "권한설정"].map(
                (path, i) => (
                  <li
                    key={i}
                    onClick={() => {
                      setCurrentPath(path);
                    }}
                  >
                    <DescriptionOutlinedIcon />
                    {path}
                  </li>
                )
              )}
            </ul>
          </>
        );
    }
  };

  return <div.wrap>{renderCompontntByPath(currentPath)}</div.wrap>;
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
};
