import React from "react";
import { FormControlLabel, Checkbox, Typography, Button } from "@mui/material";
import styled from "styled-components";

export default function SignUpAgree() {
  return (
    <div.wrap>
      <div>
        <FormControlLabel label="필수 약관 전체동의" control={<Checkbox />} />
      </div>

      <div.between>
        <FormControlLabel label="필수 약관 전체동의" control={<Checkbox />} />
        <Typography>상세보기 &gt;</Typography>
      </div.between>

      <div.between>
        <FormControlLabel label="필수 약관 전체동의" control={<Checkbox />} />
        <Typography>상세보기 &gt;</Typography>
      </div.between>
    </div.wrap>
  );
}

const div = {
  wrap: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  between: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
};
