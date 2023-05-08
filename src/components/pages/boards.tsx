import * as React from "react";
import {
  Box,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  InputBase,
  IconButton,
  Paper,
} from "@mui/material";
import { Margin, PostAdd } from "@mui/icons-material";

import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import { DataGrid } from "@mui/x-data-grid";
import { createFakeServer } from "@mui/x-data-grid-generator";

const PAGE_SIZE = [5, 10, 15, 20];

const SERVER_OPTIONS = {
  useCursorPagination: true,
};

const { useQuery, ...data } = createFakeServer({}, SERVER_OPTIONS);

export default function Boards() {
  const [searchOption, setSearchOption] = React.useState("");

  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });

  const handleChange = (event: SelectChangeEvent) => {
    setSearchOption(event.target.value as string);
  };

  const { isLoading, rows, pageInfo } = useQuery(paginationModel);

  // Some API clients return undefined while loading
  // Following lines are here to prevent `rowCountState` from being undefined during the loading
  const [rowCountState, setRowCountState] = React.useState(
    pageInfo?.totalRowCount || 0
  );
  React.useEffect(() => {
    setRowCountState((prevRowCountState) =>
      pageInfo?.totalRowCount !== undefined
        ? pageInfo?.totalRowCount
        : prevRowCountState
    );
  }, [pageInfo?.totalRowCount, setRowCountState]);

  return (
    <Grid container spacing={2} rowSpacing={2} sx={{ padding: "3%" }}>
      <Grid item md={12} display={"flex"} alignItems={"center"}>
        <PostAdd color="info" sx={{ width: 55, height: 55 }} />
        <Typography variant="h5" fontWeight={500} ml={2}>
          자료실
        </Typography>
      </Grid>

      <Grid
        item
        md={12}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <FormControl
          sx={{
            m: 1,
            minWidth: 120,
            alignSelf: "flex-start",
            marginLeft: "10%",
          }}
          size="small"
        >
          <InputLabel id="demo-simple-select-label">검색조건</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={searchOption}
            label="option"
            onChange={handleChange}
          >
            <MenuItem value={"all"}>전체</MenuItem>
            <MenuItem value={"directorys"}>폴더</MenuItem>
            <MenuItem value={"files"}>파일</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          sx={{
            width: "80%",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
          size="medium"
          variant="outlined"
        >
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, width: "80%" }}
              placeholder="gg?"
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </FormControl>
      </Grid>
      <Grid
        item
        md={12}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <div style={{ height: 400, width: "80%" }}>
          <DataGrid
            rows={rows}
            {...data}
            rowCount={rowCountState}
            loading={isLoading}
            pageSizeOptions={PAGE_SIZE}
            paginationModel={paginationModel}
            paginationMode="server"
            onPaginationModelChange={setPaginationModel}
          />
        </div>
      </Grid>
    </Grid>
  );
}
