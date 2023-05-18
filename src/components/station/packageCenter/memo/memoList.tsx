import DataGridCustom from "@components/common/dataGrid";
import { Search } from "@mui/icons-material";
import {
  Button,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import MemoEdit from "./memoEdit";

export default function MemoList() {
  const [tab, setTab] = useState<"list" | "edit">("list");

  return tab === "list" ? (
    <MemoListView setTab={setTab} />
  ) : (
    <MemoEdit setTab={setTab} />
  );
}

const MemoListView = ({ setTab }: { setTab: (v: "list" | "edit") => void }) => {
  const [searchText, setSearchText] = useState<string>();
  // pagination
  const [currentPage, setCurrentPage] = useState(0);
  const [pagePerView, setPagePerView] = useState(5);
  const [pageIndex, setPageIndex] = useState(1);

  return (
    <div>
      <Typography fontSize={20} fontWeight={600}>
        MEMO
      </Typography>
      <div.search>
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
            placeholder="검색"
            size="small"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <IconButton
            type="button"
            aria-label="search"
            size="small"
            onClick={() => {
              // refetch();
            }}
          >
            <Search />
          </IconButton>
        </Paper>
        <Button
          variant="contained"
          onClick={() => {
            setTab("edit");
          }}
        >
          등록
        </Button>
      </div.search>

      <DataGridCustom
        // rows={partnerList?.data.list ? partnerList.data.list : []}
        rows={rows}
        columns={columns}
        pageSizeOptions={[25, 50, 100]}
        paginationModel={{ page: 0, pageSize: 25 }}
        onPaginationModelChange={(model, detail) => {
          setCurrentPage(model.page);
          setPagePerView(model.pageSize);
        }}
        onRowClick={(params) => {
          setTab("edit");
        }}
        getRowId={(row) => row.id}
        useCheckbox={false}
        useToolbar={false}
      />
    </div>
  );
};
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
    field: "title",
    headerName: "제목",
    headerAlign: "center",
    align: "center",
    flex: 1,
  },
  {
    field: "createId",
    headerName: "작성자",
    headerAlign: "center",
    align: "center",
    flex: 0.5,
  },
  {
    field: "createDt",
    headerName: "작성일",
    headerAlign: "center",
    align: "center",
    flex: 1,
  },
];
const rows = [
  {
    id: "1",
    title: "test1",
    createId: "tt",
    createDt: "2021-11-01",
  },
  {
    id: "2",
    title: "test2",
    createId: "tt",
    createDt: "2020-12-01",
  },
  {
    id: "3",
    title: "test3",
    createId: "tt",
    createDt: "2020-11-11",
  },
  {
    id: "4",
    title: "test4",
    createId: "tt",
    createDt: "2020-11-01",
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
