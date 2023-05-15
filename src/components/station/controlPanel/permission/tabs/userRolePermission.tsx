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

export default function UserRolePermission({
  setUserView,
}: {
  setUserView: (v: "search" | "list" | "edit") => void;
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
        <Button
          variant="contained"
          onClick={() => {
            setUserView("list");
          }}
        >
          검색
        </Button>
      </div.search>
    </div>
  );
}

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
