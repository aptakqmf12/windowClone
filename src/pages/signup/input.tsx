import { useState } from "react";
import { Typography, Checkbox, FormControlLabel } from "@mui/material";
import styled from "styled-components";

export default function SignUpInput() {
  return (
    <div>
      <div>
        <Typography fontSize={18}>서비스 이용약관</Typography>
      </div>

      <div
        style={{
          height: 200,
          padding: 10,
          border: "1px #eee solid",
          overflow: "auto",
        }}
      >
        <FormControlLabel label="필수 약관 전체동의" control={<Checkbox />} />

        <div style={{ paddingLeft: 30 }}>
          <Typography>개인정보 수집 및 이용 목적에 대한 동의</Typography>
          <Typography>(필수)</Typography>

          <Typography>제 1 조 (목적)</Typography>
          <Typography>
            이 약관은 주식회사 리스크제로 (이하 “회사”라고 합니다)가 제공하는
            “리스크제로 프로그램” (이하 "서비스"라 합니다)의 이용과 관련하여
            "회원"과 "회사" 간에 필요한 사항을 규정함을 목적으로 합니다.
          </Typography>
          <Typography>상세보기 &gt;</Typography>
          <FormControlLabel label="동의합니다." control={<Checkbox />} />
        </div>

        <div style={{ paddingLeft: 30 }}>
          <Typography>개인정보 수집 및 이용 목적에 대한 동의</Typography>
          <Typography>(필수)</Typography>

          <Typography>제 1 조 (목적)</Typography>
          <Typography>
            이 약관은 주식회사 리스크제로 (이하 “회사”라고 합니다)가 제공하는
            “리스크제로 프로그램” (이하 "서비스"라 합니다)의 이용과 관련하여
            "회원"과 "회사" 간에 필요한 사항을 규정함을 목적으로 합니다.
          </Typography>
          <Typography>상세보기 &gt;</Typography>
          <FormControlLabel label="동의합니다." control={<Checkbox />} />
        </div>
      </div>
    </div>
  );
}

const div = {
  wrap: styled.div``,
};
