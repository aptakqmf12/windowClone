import { useState, useEffect } from "react";
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
  Typography,
} from "@mui/material";
import styled from "styled-components";
import { Search } from "@mui/icons-material";
import { getUserList, UserResponse } from "@api/userManage";
import { UserRole } from "../../../../types/index";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

// const columns: GridColDef[] = [
//   {
//     field: "id",
//     headerName: "NO",
//     headerAlign: "center",
//     align: "center",
//     width: 50,
//     renderCell: (params) => {
//       return params.api.getRowIndexRelativeToVisibleRows(params.id) + 1;
//     },
//   },
//   {
//     field: "workerName",
//     headerName: "이름",
//     headerAlign: "center",
//     align: "center",
//     width: 70,
//   },
//   {
//     field: "phone",
//     headerName: "연락처",
//     headerAlign: "center",
//     align: "center",
//     width: 150,
//   },
//   { field: "job", headerName: "직종", headerAlign: "center", align: "center" },
//   {
//     field: "workingDays",
//     headerName: "근무일수",
//     headerAlign: "center",
//     align: "center",
//   },
//   {
//     field: "teamName",
//     headerName: "소속팀",
//     headerAlign: "center",
//     align: "center",
//     width: 150,
//   },
//   {
//     field: "enteranceStartDate",
//     headerName: "입사일",
//     headerAlign: "center",
//     align: "center",
//   },
//   {
//     field: "retireedDate",
//     headerName: "퇴사일",
//     headerAlign: "center",
//     align: "center",
//     width: 200,
//   },
//   {
//     field: "workerId",
//     headerName: "변경",
//     headerAlign: "center",
//     sortable: false,
//     renderCell: (params) => {
//       const onClick = (e: any) => {
//         e.stopPropagation();
//         console.log(e);
//         console.log(params.api.getRowIndexRelativeToVisibleRows(params.id));
//       };

//       return (
//         <Button variant="contained" onClick={onClick}>
//           복귀
//         </Button>
//       );
//     },
//   },
// ];

const rows = [
  {
    id: "12312",
    workerName: "김근로",
    phone: "010-1234-1234",
    job: "배관공",
    workingDays: "20일",
    teamName: "난방코일슬리브",
    enteranceStartDate: "2023-03-15",
    retireedDate: "2023-04-11 18:16",
    workerId: "test1",
  },
  {
    id: "345132",
    workerName: "김기동",
    phone: "010-1234-1234",
    job: "안전관리자",
    workingDays: "250일",
    teamName: "난방코일슬리브",
    enteranceStartDate: "2022-03-15",
    retireedDate: "2023-04-11 18:16",
    workerId: "test2",
  },
  {
    id: "7889797",
    workerName: "홍길동",
    phone: "010-1234-1234",
    job: "목공",
    workingDays: "300일",
    teamName: "난방코일슬리브",
    enteranceStartDate: "2021-03-15",
    retireedDate: "2023-04-11 18:16",
    workerId: "test3",
  },
];

export default function UserList() {
  const [filter, setFilter] = useState<string>("10");
  const [userList, setUserList] = useState<UserResponse[]>([]);

  useEffect(() => {
    getUserList({ auth: UserRole.SITE_USER }).then((res) => {
      setUserList(res.list);
    });
  }, []);

  const columns: GridColDef[] = [
    {
      field: "",
      headerName: "번호",
      headerAlign: "center",
      align: "center",
      width: 50,
    },
    {
      field: "name",
      headerName: "이름",
      headerAlign: "center",
      align: "center",
      width: 50,
    },
    {
      field: "deptCode",
      headerName: "담당부서",
      headerAlign: "center",
      align: "center",
      width: 50,
    },
    {
      field: "",
      headerName: "직급",
      headerAlign: "center",
      align: "center",
      width: 50,
    },
    {
      field: "",
      headerName: "소속",
      headerAlign: "center",
      align: "center",
      width: 50,
    },
    {
      field: "loginId",
      headerName: "아이디",
      headerAlign: "center",
      align: "center",
      width: 50,
    },
    {
      field: "",
      headerName: "연락처",
      headerAlign: "center",
      align: "center",
      width: 50,
    },
    {
      field: "userType",
      headerName: "계정타입",
      headerAlign: "center",
      align: "center",
      width: 50,
    },
  ];

  const onFilterChange = (e: SelectChangeEvent) => {
    setFilter(e.target.value as string);
  };

  return (
    <div>
      <Typography fontSize={20} fontWeight={600}>
        사용자 목록
      </Typography>

      <Typography>전체 사용자 55명</Typography>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 20,
        }}
      >
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 200,
          }}
        >
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="" size="small" />
          <IconButton type="button" aria-label="search" size="small">
            <Search />
          </IconButton>
        </Paper>
      </div>

      <DataGrid
        sx={{ width: "100%", transform: "skew(-0.05deg)" }}
        checkboxSelection
        rows={rows}
        columns={columns}
        pageSizeOptions={[25, 50, 100]}
        paginationModel={{ page: 0, pageSize: 25 }}

        // onRowSelectionModelChange={(newRowSelectionWorker) => {
        //   setRowSelectionWorker(newRowSelectionWorker);

        // }}
        // rowSelectionModel={rowSelectionWorker}
        // slots={{
        //   toolbar: CustomToolbar,
        // }}
      />

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
              {userList.map((user, i) => {
                const { id, auth, name, createId, loginId, isActive } = user;
                return (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {id}
                    </TableCell>
                    <TableCell align="center">{name}</TableCell>
                    <TableCell align="center">{auth}</TableCell>
                    <TableCell align="center">{createId}</TableCell>
                    <TableCell align="center">{loginId}</TableCell>
                    <TableCell align="center">{isActive}</TableCell>
                    <TableCell align="center">{isActive}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div.table> */}
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
