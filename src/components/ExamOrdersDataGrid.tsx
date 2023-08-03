"use client";
import * as React from "react";
import Box from "@mui/material/Box";
// import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
// import { GridColDef } from "@mui/x-data-grid/models/colDef";
// import { DataGrid } from "@mui/x-data-grid/DataGrid/DataGrid";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import { examOrders } from "@/data/examOrders";
import Checkboxljn from "./Checkboxljn";

console.log("@data");
const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "orderID",
    width: 90,
    headerAlign: "left",
  },
  {
    field: "examcode",
    headerName: "Prøveforekomst",
    width: 150,
    headerAlign: "left",
  },
  {
    field: "examdate",
    headerName: "Eksamensdato",
    type: "Date",
    width: 120,
    headerAlign: "left",
  },
  {
    field: "examname",
    headerName: "Eksamensnavn",
    width: 110,
    headerAlign: "left",
  },
  {
    field: "docformat",
    headerName: "Format",
    description: "desc is possible on hover",
    // sortable: false,
    width: 80,
    headerAlign: "left",
  },
  {
    field: "visionimpaired_exam",
    headerName: "Type",
    width: 60,
    headerAlign: "left",
    renderCell: (params) => (params.value ? "Syns" : "Ordb"),
  },
  {
    field: "itemid",
    headerName: "ItemID",
    type: "number",
    width: 80,
    headerAlign: "right",
  },
  {
    field: "status",
    headerName: "Status / Flyt",
    type: "singleSelect",
    valueOptions: ["Ubehandlede", "Godkendte", "Dialog", "Korrektur"],
    cellClassName: "ljn-editable-cell",
    width: 160,
    // description: "Dobbelt-click på cellen for at redigere den",
    editable: true,
    headerAlign: "left",
    //leaves out a lot of markup
    /*    renderHeader: (GridColumnHeaderParams) => (
      <>
        {/* {console.log("GridColumnHeaderParams: ", GridColumnHeaderParams)} }*/
    /*   <div className="ljn-header-cell" style={{ backgroundColor: "red" }}>
          Status / Flyt
          <EditIcon fontSize="large" style={{ marginLeft: "auto" }} />
        </div>
      </>
    ),  */
    renderCell: (params) => (
      <>
        {/* {console.log("params: ", params)} */}
        {params.value}
        <EditIcon fontSize="small" style={{ marginLeft: "auto" }} />
      </>
    ),
  },
  {
    field: "att",
    headerName: "Att",
    width: 80,
    cellClassName: "ljn-editable-cell",
    editable: true,
    headerAlign: "left",
    renderCell: (params) => (
      <>
        {/* {console.log("params: ", params)} */}
        {params.value}
        <EditIcon fontSize="small" style={{ marginLeft: "auto" }} />
      </>
    ),
  },
];

/* console.log("examorders", examorders);
console.log("columns", columns); */

export default function ExamOrdersDataGrid() {
  const [open, setOpen] = useState(false);

  function openToast() {
    setOpen((prev) => (prev = true));
  }

  function handleEditStart(e: any) {
    console.log("handleEditStart");
    console.log(e);
    openToast();
  }
  return (
    <Box sx={{ width: "fit-content" }}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={6000}
        message="Husk at forlade cellen, for at dine ændringer bliver gemt."
      >
        <Alert severity="info">
          Husk at forlade cellen, for at dine ændringer bliver gemt.
        </Alert>
      </Snackbar>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Checkboxljn />
      </Box>
      <DataGrid
        // loading={!examorders ? true : false}
        // disableColumnMenu
        loading={false}
        rows={examOrders}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        onCellEditStart={handleEditStart}
        pageSizeOptions={[5, 10, 25, 50]}
        sx={{
          "& .ljn-header-cell": {
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            fontWeight: "var(--unstable_DataGrid-headWeight)",
          },
          "& .ljn-editable-cell": {
            backgroundColor: "#f0f0f0",
            border: "1px solid #ccc",
            cursor: "pointer",
          },
          "& .ljn-editable-cell:hover": {
            backgroundColor: "#aaaaaa",
            border: "1px solid #ccc",
          },
        }}
        checkboxSelection={false}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
