import { Button, Radio, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
export default function SettingDisplay() {
  return (
    <div.wrap>
      <div.mode>
        <div>스타일 설정(모드 설정)</div>

        <div>
          <div>
            <div>
              <Radio /> <Typography>Light</Typography>
            </div>
            <div>img</div>
          </div>

          <div>
            <div>
              <Radio /> <Typography>Dark</Typography>
            </div>
            <div>img</div>
          </div>
        </div>
      </div.mode>

      <div.background>
        <Typography>배경(사진)</Typography>

        <div>
          <div>img</div>
          <div>
            <Button variant="contained">찾아보기</Button>
          </div>

          <div>
            <Typography>배경색 선택</Typography>

            <ul style={{ display: "flex", gap: 4 }}>
              {[
                "#fff",
                "#8E4F90",
                "#4A355E",
                "#9B2E6A",
                "#6A84BC",
                "#15426F",
                "#1D3D58",
                "#17163E",
                "#215039",
                "#2E424A",
              ].map((color, i) => (
                <li
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: color,
                    border: " 1px black solid",
                  }}
                  key={i}
                ></li>
              ))}
            </ul>
          </div>
        </div>
      </div.background>
    </div.wrap>
  );
}

const div = {
  wrap: styled.div``,
  mode: styled.div``,
  background: styled.div``,
};