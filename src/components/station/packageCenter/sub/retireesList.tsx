import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import {
  Button,
  InputLabel,
  IconButton,
  Paper,
  InputBase,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Search } from "@mui/icons-material";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridRowSelectionModel,
  GridToolbarContainer,
  GridToolbarExport,
  koKR,
} from "@mui/x-data-grid";
import styled from "styled-components";

const theme = createTheme(
  {
    palette: {
      primary: { main: "#33518B" },
    },
  },
  koKR
);
function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}
export default function RetireesList() {
  const [date, setDate] = useState<Dayjs | null>(dayjs());

  const [rowSelectionWorker, setRowSelectionWorker] =
    useState<GridRowSelectionModel>([]);

  return (
    <div>
      <Typography fontSize={20} fontWeight={600}>
        퇴직자 목록
      </Typography>

      <div.search>
        <DatePicker
          label="퇴직일"
          value={date}
          onChange={(newDate) => setDate(newDate)}
          slotProps={{ textField: { size: "small" } }}
        />
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 250,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="근로자 검색"
            size="small"
          />
          <IconButton type="button" aria-label="search" size="small">
            <Search />
          </IconButton>
        </Paper>
        <Button variant="contained">퇴직자 추가</Button>
      </div.search>

      <DataGrid
        sx={{ width: "100%", transform: "skew(-0.05deg)" }}
        checkboxSelection
        rows={rows}
        columns={columns}
        pageSizeOptions={[25, 50, 100]}
        paginationModel={{ page: 0, pageSize: 25 }}
        onRowSelectionModelChange={(newRowSelectionWorker) => {
          setRowSelectionWorker(newRowSelectionWorker);
          console.log(newRowSelectionWorker);
        }}
        rowSelectionModel={rowSelectionWorker}
        slots={{
          toolbar: CustomToolbar,
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
    width: 50,
    renderCell: (params) => {
      return params.api.getRowIndexRelativeToVisibleRows(params.id) + 1;
    },
  },
  {
    field: "workerName",
    headerName: "이름",
    headerAlign: "center",
    align: "center",
    width: 70,
  },
  {
    field: "phone",
    headerName: "연락처",
    headerAlign: "center",
    align: "center",
    width: 150,
  },
  { field: "job", headerName: "직종", headerAlign: "center", align: "center" },
  {
    field: "workingDays",
    headerName: "근무일수",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "teamName",
    headerName: "소속팀",
    headerAlign: "center",
    align: "center",
    width: 150,
  },
  {
    field: "enteranceStartDate",
    headerName: "입사일",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "retireedDate",
    headerName: "퇴사일",
    headerAlign: "center",
    align: "center",
    width: 200,
  },
  {
    field: "workerId",
    headerName: "변경",
    headerAlign: "center",
    align: "center",
    sortable: false,
    renderCell: (params) => {
      const onClick = (e: any) => {
        e.stopPropagation();
        console.log(e);
        console.log(params.api.getRowIndexRelativeToVisibleRows(params.id));
      };

      return (
        <Button variant="contained" onClick={onClick}>
          복귀
        </Button>
      );
    },
  },
];

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
  `,
};