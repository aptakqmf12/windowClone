import { useState } from "react";
import {
  Paper,
  IconButton,
  Input,
  InputBase,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Chip,
  Button,
  Typography,
  Pagination,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
} from "@mui/material";
import { Search, PostAdd } from "@mui/icons-material";
import styled from "styled-components";
import SelectForm from "@components/common/SelectForm";

export default function LibraryRoom() {
  const [filter, setFilter] = useState<string>("");
  return (
    <div.wrap>
      <div>
        <PostAdd sx={{ width: 52, height: 52 }} color="primary" />
        <Typography>자료실</Typography>
      </div>

      <div.search>
        <div>
          <SelectForm
            value={filter}
            setValue={(v) => {
              setFilter(v);
            }}
            menuList={["전체", "자료명", "확장자"]}
            defaultValue="전체"
            width={120}
          />
        </div>

        <div>
          <div.input>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
            >
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <Search />
              </IconButton>

              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ "aria-label": "search google maps" }}
              />
            </Paper>

            <Button variant="contained" sx={{ paddingX: 3 }}>
              검색
            </Button>
          </div.input>

          <div.chips>
            {Array.from({ length: 4 }, (v, i) => `자료 ${i}`).map((data, i) => (
              <Chip label={data} onDelete={() => {}} key={i} />
            ))}
          </div.chips>
        </div>
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
}

const div = {
  wrap: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding: 50px;
  `,

  search: styled.div`
    display: flex;
    gap: 10px;
  `,

  input: styled.div`
    display: flex;
    gap: 10px;
  `,
  chips: styled.div`
    display: flex;
    gap: 10px;
    margin-top: 20px;
  `,

  table: styled.div`
    margin-bottom: 20px;
  `,
  pagination: styled.div`
    display: flex;
    align-items: center;
  `,
};
