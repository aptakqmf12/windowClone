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
import { useQuery } from "@tanstack/react-query";
import { getPartnerList } from "@api/sitePartners";
import DataGridCustom from "@components/common/dataGrid";

export enum ViewType {
  LIST = "협력사 목록",
  DETAIL = "협력사 세부사항",
  CREATE = "협력사 등록",
}
export interface PartnerInfo {
  partnerId?: string;
  partnerName: string;
  phone: string;
  partnerLicense: string;
  CEOName?: string;
  createDate: string;
  constructionName: string;
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
    field: "companyCode",
    headerName: "대표자명",
    headerAlign: "center",
    align: "center",
    flex: 0.5,
  },
  {
    field: "useYn",
    headerName: "연락처",
    headerAlign: "center",
    align: "center",
    flex: 0.5,
  },
  {
    field: "updateDate",
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

export default function PartnerList() {
  const [rowSelectionWorker, setRowSelectionWorker] =
    useState<GridRowSelectionModel>([]);
  const [view, setView] = useState<ViewType>(ViewType.LIST);

  const [partnerInfo, setPartnerInfo] = useState<PartnerInfo>({
    partnerId: "",
    partnerName: "",
    phone: "",
    partnerLicense: "",
    CEOName: "",
    createDate: "",
    constructionName: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [pagePerView, setPagePerView] = useState(15);
  const [partnerName, setPartnerName] = useState("");

  const {
    isLoading,
    data: partnerList,
    refetch,
  } = useQuery(
    ["partnerList"],
    () => {
      return getPartnerList({
        pageIndex: currentPage,
        pagePerSize: pagePerView,
        partnerName: partnerName,
      });
    },
    {
      refetchInterval: 5000,
    }
  );
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

  if (view === ViewType.LIST) {
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
              onChange={(e) => setPartnerName(e.target.value)}
            />
            <IconButton
              type="button"
              aria-label="search"
              size="small"
              onClick={() => {
                refetch();
              }}
            >
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

        <DataGridCustom
          rows={partnerList?.data.list ? partnerList.data.list : []}
          columns={columns}
          pageSizeOptions={[25, 50, 100]}
          paginationModel={{ page: 0, pageSize: 25 }}
          onPaginationModelChange={() => {}}
          onRowClick={(params) => {
            setPartnerInfo(params.row);
            setView(ViewType.DETAIL);
          }}
          getRowId={(row) => row.partnerId}
          useCheckbox={true}
          useToolbar={true}
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
/*
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
*/

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
