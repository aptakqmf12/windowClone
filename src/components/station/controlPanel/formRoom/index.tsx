import { Search } from "@mui/icons-material";
import {
  IconButton,
  InputBase,
  Paper,
  Typography,
  Button,
  Chip,
  Pagination,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useQuery } from "@tanstack/react-query";
import { getSiteFormList } from "@api/formRoom";
import FormRoomCreate from "@components/station/controlPanel/formRoom/create";

export default function FormRoom() {
  const [tab, setTab] = useState<"view" | "create">("view");

  return tab === "view" ? (
    <FormRoomView setTab={setTab} />
  ) : (
    <FormRoomCreate setTab={setTab} />
  );
}

const FormRoomView = ({
  setTab,
}: {
  setTab: (v: "view" | "create") => void;
}) => {
  useEffect(() => {
    getSiteFormList({ pageIndex: 1, pagePerSize: 15 });
  }, []);

  return (
    <div.wrap>
      <Typography>양식함</Typography>

      <div.search>
        <Button
          variant="contained"
          onClick={() => {
            setTab("create");
          }}
        >
          양식 등록
        </Button>

        <Paper
          component="div"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <Search />
          </IconButton>
        </Paper>
      </div.search>

      <div.table>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">No</TableCell>
                <TableCell align="center">자료명</TableCell>
                <TableCell align="center">작성자</TableCell>
                <TableCell align="center">업로드</TableCell>
                <TableCell align="center">조회수</TableCell>
                <TableCell align="center">파일형식</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">1</TableCell>
                <TableCell align="center">안전보고자료1</TableCell>
                <TableCell align="center">김민정</TableCell>
                <TableCell align="center">2023-05-09</TableCell>
                <TableCell align="center">13</TableCell>
                <TableCell align="center">hwp</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div.table>

      <div.pagination>
        <Pagination count={10} color="primary" />
      </div.pagination>
    </div.wrap>
  );
};

const div = {
  wrap: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  `,
  search: styled.div`
    width: 100%;
    margin-bottom: 20px;
  `,
  table: styled.div`
    width: 100%;
    margin-bottom: 20px;
  `,
  pagination: styled.div`
    display: flex;
    align-items: center;
  `,
};
