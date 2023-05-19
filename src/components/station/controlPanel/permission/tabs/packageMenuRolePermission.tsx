import { useState } from "react";
import {
  Button,
  Select,
  SelectChangeEvent,
  MenuItem,
  FormControl,
  Typography,
  Divider,
  Grid,
  Box,
  Checkbox,
} from "@mui/material";
import styled from "styled-components";

export default function PackageMenuRolePermission() {
  const [roles, setRoles] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setRoles(event.target.value);
  };

  return (
    <div.wrap>
      <Button variant="contained" className="right">
        저장
      </Button>
      <FormControl
        variant="filled"
        size="small"
        sx={{ m: 1, minWidth: 120, width: 180 }}
      >
        <Select id="selectRoles" value={roles} onChange={handleChange}>
          <MenuItem value={"Sub MANAGER"}>Sub MANAGER</MenuItem>
          <MenuItem value={"Team MANAGER"}>Team MANAGER</MenuItem>
          <MenuItem value={"USER"}>USER</MenuItem>
          <MenuItem value={"VIEWER"}>VIEWER</MenuItem>
        </Select>
      </FormControl>
      <div.content>
        <div.wrap>
          <div.flex>
            <div.column>
              <Typography
                m={1}
                textAlign="center"
                fontWeight={600}
                color="primary"
              >
                기능 구분
              </Typography>
            </div.column>
            <div.column></div.column>
            <div.column>
              <Typography
                m={1}
                textAlign="center"
                fontWeight={600}
                color="primary"
              >
                접근금지
              </Typography>
            </div.column>
            <div.column>
              <Typography
                m={1}
                textAlign="center"
                fontWeight={600}
                color="primary"
              >
                읽기/등록
              </Typography>
            </div.column>
            <div.column>
              <Typography
                m={1}
                textAlign="center"
                fontWeight={600}
                color="primary"
              >
                읽기전용
              </Typography>
            </div.column>
          </div.flex>

          <Divider variant="middle" className="headDivider" />
          <div.flex>
            <div.column>
              <Typography m={1} textAlign="center">
                패키지
              </Typography>
            </div.column>
            <div.column>
              <Typography m={1} textAlign="left">
                패키지 다운로드
              </Typography>
            </div.column>
            <div.column>
              <Checkbox size="small" />
            </div.column>
            <div.column>
              <Checkbox size="small" checked />
            </div.column>
            <div.column>
              <Checkbox size="small" />
            </div.column>
            <div.column></div.column>
            <div.column>
              <Typography m={1} textAlign="left">
                패키지 삭제
              </Typography>
            </div.column>
            <div.column>
              <Checkbox size="small" />
            </div.column>
            <div.column>
              <Checkbox size="small" checked disabled />
            </div.column>
            <div.column>
              <Checkbox size="small" />
            </div.column>
          </div.flex>
          <Divider variant="middle" />
          <div.flex>
            <div.column>
              <Typography m={1} textAlign="center" fontWeight={600}>
                기본패키지
              </Typography>
            </div.column>
            <div.column>
              <Typography m={1} textAlign="left">
                공사개요
              </Typography>
            </div.column>
            <div.column>
              <Checkbox size="small" />
            </div.column>
            <div.column>
              <Checkbox size="small" />
            </div.column>
            <div.column>
              <Checkbox size="small" />
            </div.column>
          </div.flex>
        </div.wrap>
      </div.content>
    </div.wrap>
  );
}
const div = {
  wrap: styled.div`
    display: flex;
    width: 100%;
    border-radius: 10px;
    flex-direction: column;

    .right {
      align-self: flex-end;
    }
    .headDivider {
      border-width: 1px;
      border-color: ${(p) => p.theme.colors.primary.main};
    }
  `,
  content: styled.div`
    border-radius: 10px;
    width: 100%;
    border: ${(p) => `2px ${p.theme.colors.border} solid;`};
    margin-top: 3%;
  `,
  header: styled.div`
    align-self: flex-end;
  `,
  flex: styled.div`
    display: flex;
    flex-wrap: wrap;
  `,
  column: styled.div`
    width: 20%;
    padding: 3px;
    display: flex;
    align-content: center;
    justify-content: center;

    p {
      width: 100%;
    }
  `,
};
