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
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
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
import { getRetireeList } from "@api/userManage";
import { useQuery } from "@tanstack/react-query";
import DataGridCustom from "@components/common/dataGrid";
import AddRetirees from "./addRetirees";

export default function RetireesList() {
  const [tab, setTab] = useState<"view" | "add">("view");

  const [date, setDate] = useState<Dayjs | null>(dayjs());

  const [rowSelectionWorker, setRowSelectionWorker] =
    useState<GridRowSelectionModel>([]);
  const [retireInfo, setRetireInfo] = useState<any>();
  const [searchText, setSearchText] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(0);
  const [pagePerView, setPagePerView] = useState(5);

  const { isLoading, data: retireesList } = useQuery(
    ["retireesList"],
    () => {
      return getRetireeList({ searchText });
    },
    {
      refetchInterval: 5000,
    }
  );
  if (tab === "add") return <AddRetirees setTab={setTab} />;

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
        <Button variant="contained" onClick={() => setTab("add")}>
          퇴직자 추가
        </Button>
      </div.search>

      <DataGridCustom
        rows={retireesList?.data.list ? retireesList.data.list : []}
        columns={columns}
        pageSizeOptions={[25, 50, 100]}
        paginationModel={{ page: 0, pageSize: 25 }}
        useCheckbox={false}
        useToolbar={true}
        getRowId={(row) => row.id}
        onRowClick={(params) => {}}
        onPaginationModelChange={(model, detail) => {
          setCurrentPage(model.page);
          setPagePerView(model.pageSize);
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
    field: "workerName",
    headerName: "이름",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    align: "center",
    flex: 0.5,
  },
  {
    field: "phone",
    headerName: "연락처",
    headerAlign: "center",
    align: "center",
    flex: 0.5,
    minWidth: 150,
  },
  {
    field: "job",
    headerName: "직종",
    headerAlign: "center",
    align: "center",
    flex: 1,
  },
  {
    field: "workingDays",
    headerName: "근무일수",
    headerAlign: "center",
    align: "center",
    flex: 0.7,
  },
  {
    field: "teamName",
    headerName: "소속팀",
    headerAlign: "center",
    align: "center",
    flex: 1,
    minWidth: 150,
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
    minWidth: 150,
    flex: 1,
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
        // console.log(e);
        // console.log(params.api.getRowIndexRelativeToVisibleRows(params.id));
      };

      return (
        <Button
          variant="contained"
          sx={{ width: "40px", height: "30px;", minWidth: "30px" }}
          onClick={onClick}
        >
          복귀
        </Button>
      );
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
  `,
};
