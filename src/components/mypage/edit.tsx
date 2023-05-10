import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { MypageInfoResponse, getMypageInfo } from "@api/mypage";
import styled from "styled-components";

export default function MypageEdit() {
  //   const [team, setTeam] = useState(second);
  return (
    <div.wrap>
      <div.info>
        <Typography className="label">연락처</Typography>
        <TextField variant="standard" />
      </div.info>
      <div.info>
        <Typography className="label">소속</Typography>

        {/* <FormControl variant="standard">
        <Select
          value={filter}
          onChange={onFilterChange}
          sx={{ width: 80, height: 30 }}
        >
          <MenuItem value={"10"} onClick={() => {}}>
            10
          </MenuItem>
          <MenuItem value={"20"} onClick={() => {}}>
            20
          </MenuItem>
        </Select>
      </FormControl> */}
      </div.info>
      <div.info>
        <Typography className="label">이메일</Typography>
        <TextField variant="standard" />
      </div.info>
      <div.info>
        <Typography className="label">패스워드</Typography>
        <TextField variant="standard" />
      </div.info>
    </div.wrap>
  );
}

const div = {
  wrap: styled.div``,
  info: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    .label {
      width: 100px;
    }
  `,
};
