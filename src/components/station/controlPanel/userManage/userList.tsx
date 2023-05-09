import { useState } from "react";
import {
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  FormControl,
  Paper,
  InputBase,
  IconButton,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Pagination,
} from "@mui/material";
import styled from "styled-components";
import { Search } from "@mui/icons-material";

export default function UserList() {
  const [filter, setFilter] = useState<string>("10");

  const onFilterChange = (e: SelectChangeEvent) => {
    setFilter(e.target.value as string);
  };

  const tableList = [
    {
      id: 1,
      name: "김태완",
      phone: "010-8009-5439",
      day: 5,
      team: "난방코일스리브",
      startDate: "2022-11-15",
      endDate: "2022-11-20",
      change: <Button variant="contained">복귀</Button>,
    },
    {
      id: 2,
      name: "김태완",
      phone: "010-8009-5439",
      day: 5,
      team: "난방코일스리브",
      startDate: "2022-11-15",
      endDate: "2022-11-20",
      change: <Button variant="contained">복귀</Button>,
    },
    {
      id: 3,
      name: "김태완",
      phone: "010-8009-5439",
      day: 5,
      team: "난방코일스리브",
      startDate: "2022-11-15",
      endDate: "2022-11-20",
      change: <Button variant="contained">복귀</Button>,
    },
  ];

  return (
    <div>
      <div>사용자 목록</div>
      <div>전체 사용자 55명</div>
      <FormControl variant="standard">
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
      </FormControl>

      <div.btween>
        <div>
          <Button variant="contained">Excel</Button>
          <Button variant="contained">PDF</Button>
        </div>

        <div>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="검색어를 입력해주세요"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <Search />
            </IconButton>
          </Paper>
        </div>
      </div.btween>

      <div.table>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>NO</TableCell>
                <TableCell align="center">근로자명</TableCell>
                <TableCell align="center">연락처</TableCell>
                <TableCell align="center">팀</TableCell>
                <TableCell align="center">출역시작일</TableCell>
                <TableCell align="center">퇴직처리일자</TableCell>
                <TableCell align="center">변경</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableList.map((row, i) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.phone}</TableCell>
                  <TableCell align="center">{row.team}</TableCell>
                  <TableCell align="center">{row.startDate}</TableCell>
                  <TableCell align="center">{row.endDate}</TableCell>
                  <TableCell align="center">{row.change}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div.table>
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
};
