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
import { MemoInfo, getSiteMemoList } from "@api/siteMemo";
import MemoAdd from "./momeAdd";
import { useQuery } from "@tanstack/react-query";

export default function MemoList() {
  const [tab, setTab] = useState<"list" | "edit" | "add">("list");
  const [memoInfo, setMemoInfo] = useState<MemoInfo>({
    memoId: "",
    title: "",
    content: "",
    userId: "",
    createDate: "",
  });
  const renderCompontntByPath = (userView: string) => {
    switch (userView) {
      case "list":
        return <MemoListView setTab={setTab} setMemoInfo={setMemoInfo} />;
      case "add":
        return <MemoAdd setTab={setTab} />;
      case "edit":
        return <MemoEdit setTab={setTab} memoInfoProps={memoInfo} />;
      default:
        return <MemoListView setTab={setTab} setMemoInfo={setMemoInfo} />;
    }
  };

  return renderCompontntByPath(tab);
}

const MemoListView = ({
  setTab,
  setMemoInfo,
}: {
  setTab: (v: "list" | "edit" | "add") => void;
  setMemoInfo: (v: MemoInfo) => void;
}) => {
  const [searchText, setSearchText] = useState<string>();
  // pagination
  const [currentPage, setCurrentPage] = useState(0);
  const [pagePerView, setPagePerView] = useState(5);
  const [pageIndex, setPageIndex] = useState(1);
  const {
    isLoading,
    data: memoList,
    refetch,
  } = useQuery(
    ["memoList"],
    () => {
      return getSiteMemoList({
        title: "",
        pageIndex: currentPage,
        pagePerSize: pagePerView,
        useYn: "Y",
      });
    },
    {
      refetchInterval: 5000,
    }
  );

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
            setTab("add");
          }}
        >
          등록
        </Button>
      </div.search>

      <DataGridCustom
        rows={memoList?.data.list ? memoList.data.list : []}
        // rows={rows}
        columns={columns}
        pageSizeOptions={[25, 50, 100]}
        paginationModel={{ page: 0, pageSize: 25 }}
        onPaginationModelChange={(model, detail) => {
          setCurrentPage(model.page);
          setPagePerView(model.pageSize);
        }}
        onRowClick={(params) => {
          const row = params.row;
          setMemoInfo({
            memoId: row.id,
            title: row.title,
            content: row.content,
            userId: row.createId,
            createDate: row.createDate,
          });
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
    field: "createDate",
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
    content: "sasdasd",
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
