import { useState } from "react";
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
import PartnerDetail from "./partnerDetail";
import PartnerCreate from "./partnerCreate";

export enum ViewType {
  LIST = "협력사 목록",
  DETAIL = "협력사 세부사항",
  CREATE = "협력사 등록",
}
export interface PartnerInfo {
  partnerId: string;
  partnerName: string;
  phone: string;
  partnerLicense: string;
  CEOName: string;
  createDate: string;
  constructionName: string;
}

export default function PartnerList() {
  const [rowSelectionWorker, setRowSelectionWorker] =
    useState<GridRowSelectionModel>([]);
  const [view, setView] = useState<ViewType>(ViewType.LIST);

  const [partnerInfo, setPartnerInfo] = useState<PartnerInfo>({
    partnerId: "string",
    partnerName: "string",
    phone: "string",
    partnerLicense: "string",
    CEOName: "string",
    createDate: "string",
    constructionName: "string",
  });

  const renderCompontntByPath = (viewPath: ViewType) => {
    switch (viewPath) {
      case ViewType.DETAIL:
        return <PartnerDetail setView={setView} partnerInfo={partnerInfo} />;
      case ViewType.CREATE:
        return <PartnerCreate setView={setView} />;
      default:
        <></>;
    }
  };
  if (view === ViewType.LIST || undefined) {
    return (
      <div>
        <Typography fontSize={20} fontWeight={600}>
          협력사 목록
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
              placeholder="협력사 검색"
              size="small"
            />
            <IconButton type="button" aria-label="search" size="small">
              <Search />
            </IconButton>
          </Paper>
          <Button
            variant="contained"
            onClick={() => {
              setView(ViewType.CREATE);
            }}
          >
            등록
          </Button>
        </div.search>

        <DataGrid
          sx={{
            width: "100%",
            transform: "skew(-0.05deg)",
          }}
          rows={rows}
          columns={columns}
          pageSizeOptions={[25, 50, 100]}
          paginationModel={{ page: 0, pageSize: 25 }}
          onRowClick={(params) => {
            console.log("params", params.row);

            setPartnerInfo(params.row);
            setView(ViewType.DETAIL);
          }}
          rowSelectionModel={rowSelectionWorker}
          slots={{
            toolbar: CustomToolbar,
          }}
        />
      </div>
    );
  }
  return <div>{renderCompontntByPath(view)}</div>;
}

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport
        csvOptions={{
          fileName: "협력사 목록",
          delimiter: ",",
          utf8WithBom: true,
        }}
        printOptions={{
          hideFooter: true,
          hideToolbar: true,
          pageStyle:
            ".MuiDataGrid-root .MuiDataGrid-main { color: rgba(0, 0, 0, 0.87); }",
          copyStyles: true,
          fields: [
            "partnerName",
            "partnerLicense",
            "CEOName",
            "phone",
            "constructionName",
            "createDate",
          ],
        }}
      />
    </GridToolbarContainer>
  );
}
const columns: GridColDef[] = [
  {
    field: "partnerId",
    headerName: "NO",
    headerAlign: "center",
    align: "center",
    flex: 0.1,
    renderCell: (params) => {
      return params.api.getRowIndexRelativeToVisibleRows(params.id) + 1;
    },
  },
  {
    field: "partnerName",
    headerName: "업체명",
    headerAlign: "center",
    align: "center",
    flex: 0.5,
  },
  {
    field: "partnerLicense",
    headerName: "사업자등록번호",
    headerAlign: "center",
    align: "center",
    flex: 1,
  },
  {
    field: "CEOName",
    headerName: "대표자명",
    headerAlign: "center",
    align: "center",
    flex: 0.5,
  },
  {
    field: "phone",
    headerName: "연락처",
    headerAlign: "center",
    align: "center",
    flex: 0.5,
  },
  {
    field: "constructionName",
    headerName: "투입공종",
    headerAlign: "center",
    align: "center",
    flex: 1,
  },
  {
    field: "createDate",
    headerName: "등록일",
    headerAlign: "center",
    align: "center",
    flex: 0.5,
  },
];

const rows = [
  {
    id: "12",
    partnerId: "12312",
    partnerName: "리스크제로",
    partnerLicense: "102-213-141231",
    CEOName: "김근로",
    phone: "010-1234-1234",
    constructionName: "터파기 공사",
    createDate: "2023-03-15",
  },
  {
    id: "1331232",
    partnerId: "345132",
    partnerName: "유엔이",
    phone: "010-1234-1234",
    partnerLicense: "102-213-141231",
    CEOName: "김근로",
    createDate: "2022-03-15",
    constructionName: "전기 공사",
  },
  {
    id: "1212222",
    partnerId: "7889797",
    partnerName: "무사고",
    phone: "010-1234-1234",
    partnerLicense: "102-213-141231",
    CEOName: "김근로",
    createDate: "2021-03-15",
    constructionName: "터널 공사",
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
