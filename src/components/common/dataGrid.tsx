import React from "react";
import {
  DataGrid,
  GridColDef,
  GridRowParams,
  GridRowSelectionModel,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";

interface DataGridCustomProps {
  rows: Record<string, string>[];
  columns: GridColDef[];
  onRowClick: (params: GridRowParams<any>) => void;
  getRowId: (row: any) => string;
  //pagination
  pageSizeOptions: number[];
  paginationModel: {
    page: number;
    pageSize: number;
  };

  // checkbox
  useCheckbox: boolean;
  rowSelectionModel?: GridRowSelectionModel;
  // toolbar
  useToolbar: boolean;
  fileName?: string;
}

export default function DataGridCustom({
  rows,
  columns,
  onRowClick,
  getRowId,
  pageSizeOptions,
  paginationModel,
  rowSelectionModel,
  useCheckbox,
  useToolbar,
  fileName,
}: DataGridCustomProps) {
  return (
    <DataGrid
      sx={{
        width: "100%",
        transform: "skew(-0.05deg)",
        ".--unstable_DataGrid-radius": 0,
      }}
      rows={rows}
      columns={columns}
      onRowClick={onRowClick}
      pageSizeOptions={pageSizeOptions}
      paginationModel={paginationModel}
      checkboxSelection={useCheckbox}
      getRowId={getRowId} // id 생성 ?
      rowSelectionModel={rowSelectionModel} // 체크박스 체크된 rows
      slots={{
        toolbar: useToolbar ? CustomToolbar : null,
      }}
      disableRowSelectionOnClick
    />
  );
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
