import LogoIcon from "@components/icons/logo";
import { Typography } from "@mui/material";
import styled from "styled-components";

export default function Logo() {
  return (
    <div.wrap>
      <LogoIcon fill="#707070" />
      <Typography>서울 민정공사</Typography>
    </div.wrap>
  );
}

const div = {
  wrap: styled.div`
    position: absolute;
    left: 10px;
    top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  `,
};
