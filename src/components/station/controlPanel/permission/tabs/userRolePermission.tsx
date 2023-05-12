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

export default function UserRolePermission() {
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
    flex: 0.5,
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
    flex: 0.5,
  },
  {
    field: "userType",
    headerName: "계정타입",
    headerAlign: "center",
    align: "center",
    flex: 0.5,
    renderCell: (params) => {
      const onClick = (e: any) => {
        e.stopPropagation();
        console.log(e);
        console.log(params.api.getRowIndexRelativeToVisibleRows(params.id));
      };

      return <Chip label="Sub MANAGER" color="success" variant="outlined" />;
    },
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
