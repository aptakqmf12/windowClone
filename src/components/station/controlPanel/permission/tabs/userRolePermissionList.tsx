import { useState } from "react";
import {
  Button,
  InputLabel,
  IconButton,
  Paper,
  InputBase,
  Typography,
  Chip,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridRowSelectionModel,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import styled from "styled-components";

export interface userInfo {
  id: string;
  userName: string;
  userId: string;
  phone: string;
  team: string;
  jobTitle: string;
  email: string;
  userType: string;
}

export default function UserRolePermissionList({
  setUserView,
  setUserInfo,
}: {
  setUserView: (t: "search" | "list" | "edit") => void;
  setUserInfo: (u: userInfo) => void;
}) {
  return (
    <div>
      <div.search>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Search />
          <InputBase
            sx={{ ml: 1, flex: 1, width: "400px" }}
            placeholder="사용자명이나 아이디 또는 연락처를 입력해주세요."
            size="small"
          />
        </Paper>
        <Button variant="contained" onClick={() => {}}>
          검색
        </Button>
      </div.search>

      <DataGrid
        sx={{
          width: "100%",
          transform: "skew(-0.05deg)",
        }}
        rows={rows}
        columns={columns}
        pageSizeOptions={[25, 50, 100]}
        paginationModel={{ page: 0, pageSize: 25 }}
        onRowClick={(params) => {
          console.log("params", params.row);
          setUserInfo(params.row);

          setUserView("edit");
        }}
      />
    </div>
  );
}
const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "NO",
    headerAlign: "center",
    align: "center",
    flex: 0.1,
    renderCell: (params) => {
      return params.api.getRowIndexRelativeToVisibleRows(params.id) + 1;
    },
  },
  {
    field: "userName",
    headerName: "사용자명",
    headerAlign: "center",
    align: "center",
    flex: 0.5,
  },
  {
    field: "userId",
    headerName: "아이디",
    headerAlign: "center",
    align: "center",
    flex: 1,
  },

  {
    field: "phone",
    headerName: "연락처",
    headerAlign: "center",
    align: "center",
    flex: 1,
  },
  {
    field: "team",
    headerName: "소속",
    headerAlign: "center",
    align: "center",
    flex: 1,
  },
  {
    field: "jobTitle",
    headerName: "직급",
    headerAlign: "center",
    align: "center",
    flex: 0.5,
  },
  {
    field: "email",
    headerName: "이메일",
    headerAlign: "center",
    align: "center",
    flex: 1,
  },
  {
    field: "userType",
    headerName: "계정타입",
    headerAlign: "center",
    align: "center",
    flex: 1,
    renderCell: (params) => {
      console.log(params);
      return (
        <Button
          variant="contained"
          color="success"
          sx={{
            height: "30px",
            fontSize: "10px",
            whiteSpace: "pre-wrap",
          }}
        >
          {params.row.userType}
        </Button>
      );
    },
  },
];
const rows = [
  {
    id: "12313",
    userName: "김민정",
    userId: "asdmd11",
    phone: "011-1234-1234",
    team: "기술연구소",
    jobTitle: "과장",
    email: "123123@riskzero.kr",
    userType: "Sub MANAGER",
  },
];

const div = {
  btween: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `,

  table: styled.div``,
  search: styled.div`
    display: flex;
    flex-direction: row;
    margin: 5% 0;
    gap: 10px;
    float: right;
  `,
};
