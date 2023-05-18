import { useState } from "react";
import SelectForm from "@components/common/SelectForm";
import DataGridCustom from "@components/common/dataGrid";
import { Search } from "@mui/icons-material";
import {
  Button,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import { getWorkerList } from "@api/userManage";
import { useQuery } from "@tanstack/react-query";
import {
  DataGrid,
  GridColDef,
  GridRowParams,
  GridRowSelectionModel,
} from "@mui/x-data-grid";
import { addRetiree } from "@api/userManage";

export default function AddRetirees({
  setTab,
}: {
  setTab: (v: "view" | "add") => void;
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const [pagePerView, setPagePerView] = useState(5);
  const [rowSelectionWorker, setRowSelectionWorker] =
    useState<GridRowSelectionModel>([]);

  const [searchText, setSearchText] = useState<string>("");
  const { isLoading, data: workerList } = useQuery(
    ["workerList"],
    () => {
      return getWorkerList({ searchText });
    },
    {
      refetchInterval: 5000,
    }
  );

  return (
    <div>
      <Typography fontSize={20} fontWeight={600}>
        퇴직자 처리
      </Typography>

      <div.search>
        <SelectForm
          defaultValue={"전체"}
          menuList={["전체"]}
          value={"전체"}
          setValue={(v: string) => {}}
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
        <Button
          variant="contained"
          onClick={() => {
            const retirees = rowSelectionWorker.join(";") + ";";
            addRetiree({ retirees: retirees });
          }}
        >
          퇴직
        </Button>
      </div.search>
      <DataGridCustom
        // rows={workerList?.data.list ? workerList.data.list : []}
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 50, 100]}
        paginationModel={{ page: 0, pageSize: 5 }}
        useCheckbox={true}
        useToolbar={true}
        getRowId={(row) => row.id}
        rowSelectionModel={rowSelectionWorker}
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setRowSelectionWorker(newRowSelectionModel);
          console.log(rowSelectionWorker);
        }}
        onRowClick={() => {}}
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
    headerName: "근로자명",
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
    field: "teamName",
    headerName: "소속팀",
    headerAlign: "center",
    align: "center",
    flex: 0.5,
    minWidth: 150,
  },
  {
    field: "area",
    headerName: "작업구간",
    headerAlign: "center",
    align: "center",
    flex: 1,
  },
  {
    field: "workType",
    headerName: "작업종류",
    headerAlign: "center",
    align: "center",
    flex: 0.7,
  },
  {
    field: "safeCheck",
    headerName: "안전점검",
    headerAlign: "center",
    align: "center",
    flex: 0.7,
  },
  {
    field: "enteranceDt",
    headerName: "출역시간",
    headerAlign: "center",
    align: "center",
    flex: 0.7,
  },

  {
    field: "outDt",
    headerName: "퇴근시간",
    headerAlign: "center",
    align: "center",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "enteranceCount ",
    headerName: "출입횟수",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "risk",
    headerName: "위험도",
    headerAlign: "center",
    align: "center",
  },
];
const rows = [
  {
    id: "1",
  },
  {
    id: "2",
  },
  {
    id: "3",
  },
  {
    id: "4",
  },
  {
    id: "5",
  },
  {
    id: "6",
  },
  {
    id: "7",
  },
  {
    id: "8",
  },
  {
    id: "9",
  },
  {
    id: "10",
  },
  {
    id: "11",
  },
  {
    id: "12",
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
