import { useEffect, useState } from "react";
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
import SelectCustom from "@components/common/SelectForm";

import { LibraryType, getLibraryList } from "@api/libraryRoom";
import { PaginationData } from "../../../types/index";
import DataGridCustom from "@components/common/dataGrid";
import { GridColDef } from "@mui/x-data-grid";

interface LibraryRoomProps {
  uuid: string;
}

const columns: GridColDef[] = [
  {
    field: "title",
    headerName: "자료명",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "useYn",
    headerName: "useYn",
    headerAlign: "center",
    align: "center",
  },
];

export default function LibraryRoom({ uuid }: LibraryRoomProps) {
  const [filter, setFilter] = useState<string>("");
  const [searchText, setSearchText] = useState("");

  const [libraryData, setLibraryData] = useState<PaginationData>();
  const [libraryList, setLibraryList] = useState<LibraryType[]>([]);

  const record = async () => {
    const res = await getLibraryList({ useYn: "Y", title: "te" });

    setLibraryList(res.list);
  };

  useEffect(() => {
    record();
  }, []);

  return (
    <div.wrap>
      <div.title>
        <PostAdd sx={{ width: 52, height: 52 }} color="primary" />
        <Typography>자료실</Typography>
      </div.title>

      <div.search>
        <div>
          <SelectCustom
            value={filter}
            setValue={(v) => setFilter(v)}
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
                height: 40,
              }}
              onSubmit={(e) => {
                e.preventDefault();
                record();
              }}
            >
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <Search />
              </IconButton>

              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ "aria-label": "search google maps" }}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </Paper>

            <Button
              variant="contained"
              size="small"
              sx={{ paddingX: 3 }}
              onClick={record}
            >
              검색
            </Button>
          </div.input>

          <div.chips>
            {Array.from({ length: 4 }, (v, i) => `자료 ${i}`).map((data, i) => (
              // <Chip label={data} onDelete={() => {}} key={i} />
              <Button variant="contained" size="small">
                {data}
              </Button>
            ))}
          </div.chips>
        </div>
      </div.search>

      <div.table>
        {/* <TableContainer component={Paper}>
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
        </TableContainer> */}

        <DataGridCustom
          rows={libraryList}
          columns={columns}
          pageSizeOptions={[5, 10, 15]}
          paginationModel={{ page: 0, pageSize: 10 }}
          onPaginationModelChange={(model, detail) => {
            // setCurrentPage(model.page);
            // setPagePerView(model.pageSize);
          }}
          onRowClick={(params) => {
            // setRows(params.row);
            // setTab("edit");
          }}
          getRowId={(row) => row.siteDataId}
          useCheckbox={false}
          useToolbar={true}
          fileName="사용자 목록"
        />
      </div.table>
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

  title: styled.div`
    margin-bottom: 20px;
  `,
  search: styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  `,
  input: styled.div`
    display: flex;
    gap: 10px;
  `,
  chips: styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
  `,

  table: styled.div`
    width: 100%;
    margin-bottom: 20px;
  `,
};
