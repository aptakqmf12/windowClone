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
import { UserRole } from "../../../../../types/index";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import dayjs from "dayjs";
import { useQuery } from "@tanstack/react-query";
import UserListEdit from "./edit";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "이름",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "deptCode",
    headerName: "담당부서",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "companyCode",
    headerName: "회사코드",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "companyName",
    headerName: "회사이름",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "deletedYn",
    headerName: "deletedYn",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "loginId",
    headerName: "loginId",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "updateId",
    headerName: "updateId",
    headerAlign: "center",
    align: "center",
    width: 200,
  },
  {
    field: "userType",
    headerName: "계정타입",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "isActive",
    headerName: "isActive",
    headerAlign: "center",
    align: "center",
    // renderCell: (params) => {
    //   const onClick = (e: any) => {
    //     e.stopPropagation();
    //     console.log(e);
    //     console.log(params.api.getRowIndexRelativeToVisibleRows(params.id));
    //   };

    //   return (
    //     <Button variant="contained" onClick={onClick}>
    //       Click
    //     </Button>
    //   );
    // },
  },
  {
    field: "updatedAt",
    headerName: "업데이트 날짜",
    headerAlign: "center",
    align: "center",
    width: 200,
    renderCell: (params) => {
      return params.formattedValue
        ? dayjs(params.formattedValue).format("YYYY년MM월DD일 hh시mm분")
        : "-";
    },
  },
];

export default function UserList() {
  const [tab, setTab] = useState<"view" | "edit">("view");
  const [rows, setRows] = useState<UserResponse>();

  return tab === "view" ? (
    <UserListView setTab={setTab} setRows={setRows} />
  ) : (
    <UserListEdit setTab={setTab} rows={rows} />
  );
}

interface UserListViewProps {
  setTab: (v: "view" | "edit") => void;
  setRows: (v: UserResponse) => void;
}

const UserListView = ({ setTab, setRows }: UserListViewProps) => {
  const [userInfo, setUserInfo] = useState<any>();
  const [name, setName] = useState<string>();
  // pagination
  const [currentPage, setCurrentPage] = useState(0);
  const [pagePerView, setPagePerView] = useState(5);

  const [userList, setUserList] = useState<any[]>([]);

  const record = async () => {
    const res = await getUserList({ name });

    setUserInfo(res.data);
    setUserList(res.list);
  };

  useEffect(() => {
    record();
  }, []);

  // const { isLoading, data: userList } = useQuery(["userList"], () => {
  //   return getUserList({ name });
  // });

  return (
    <div>
      <Typography fontSize={20} fontWeight={600}>
        사용자 목록
      </Typography>

      <Typography>전체 사용자 {userInfo?.totalCount}명</Typography>

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
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder=""
            size="small"
            onChange={(e) => setName(e.target.value)}
          />
          <IconButton
            type="button"
            aria-label="search"
            size="small"
            //  onClick={getUserList}
          >
            <Search />
          </IconButton>
        </Paper>
      </div>

      <DataGrid
        checkboxSelection={false}
        pageSizeOptions={[5, 10, 15]}
        paginationModel={{ page: currentPage, pageSize: pagePerView }}
        rows={userList}
        columns={columns}
        onPaginationModelChange={(model, detail) => {
          setCurrentPage(model.page);
          setPagePerView(model.pageSize);
        }}
        onRowSelectionModelChange={(checkdIds, detail) => {}}
        onRowClick={(params) => {
          setRows(params.row);
          setTab("edit");
        }}
        sx={{
          width: "100%",
          transform: "skew(-0.05deg)",
          ".--unstable_DataGrid-radius": 0,
        }}
      />
    </div>
  );
};

const div = {
  btween: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  `,

  table: styled.div``,
};
