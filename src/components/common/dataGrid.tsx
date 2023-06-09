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
  rows: any[];
  columns: GridColDef[];
  onRowClick: (params: GridRowParams<any>) => void; // row클릭
  getRowId: (row: any) => string; // id설정
  //pagination
  pageSizeOptions: number[];
  paginationModel: {
    page: number;
    pageSize: number;
  };
  rowCount?: number; // totalCount
  onPaginationModelChange: (model: any, detail: any) => void;
  // checkbox
  useCheckbox: boolean;
  rowSelectionModel?: GridRowSelectionModel;
  onRowSelectionModelChange?: (model: any) => void;
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
  rowCount,
  onPaginationModelChange,
  paginationModel,
  rowSelectionModel,
  onRowSelectionModelChange,
  useCheckbox,
  useToolbar,
  fileName,
}: DataGridCustomProps) {
  return (
    <DataGrid
      sx={{
        width: "100%",
        "--unstable_DataGrid-radius": `0 !important`,
      }}
      density="compact"
      rows={rows}
      columns={columns}
      onRowClick={onRowClick}
      pageSizeOptions={pageSizeOptions}
      paginationModel={paginationModel}
      onPaginationModelChange={onPaginationModelChange}
      checkboxSelection={useCheckbox}
      getRowId={getRowId} // id 생성 ?
      rowCount={rowCount}
      rowSelectionModel={rowSelectionModel} // 체크박스 체크된 rows
      onRowSelectionModelChange={onRowSelectionModelChange}
      slots={{
        toolbar: useToolbar
          ? () => (
              <GridToolbarContainer>
                <GridToolbarExport
                  csvOptions={{
                    fileName: fileName || "download",
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
            )
          : null,
      }}
      disableRowSelectionOnClick
    />
  );
}
