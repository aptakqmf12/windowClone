import { useState } from "react";
import {
  Button,
  MenuItem,
  FormControl,
  Typography,
  Divider,
  Grid,
  Box,
  Checkbox,
  Chip,
} from "@mui/material";
import styled from "styled-components";
import { userInfo } from "./userRolePermissionList";

export default function UserRolePermissionDetail({
  setUserView,
  userInfo,
}: {
  setUserView: (v: "search" | "list" | "edit") => void;
  userInfo: userInfo;
}) {
  const [roles, setRoles] = useState("");
  console.log("edit", userInfo);
  return (
    <div.wrap>
      <Button variant="contained" className="right">
        저장
      </Button>

      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ m: 1, minWidth: 120, width: 120 }}
      >
        {userInfo.userType}
      </Button>
      <Typography>{userInfo.userName}</Typography>
      <Typography>{userInfo.userId}</Typography>
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
    border: 2px solid gray;
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
