"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";
import Alert from "@mui/material/Alert";

const columns: GridColDef[] = [
  { field: "id", headerName: "orderID", width: 90, headerAlign: "left" },
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

const examorders = [
  {
    id: 11175,
    examcode: "Q_EXAM_2365",
    examdate: new Intl.DateTimeFormat("da").format(
      new Date(Date.UTC(2023, 11, 20, 3, 23, 16, 738))
    ),
    examname: "Musik A",
    docformat: "pdf",
    visionimpaired_exam: false,
    itemid: 1,
    status: "Ubehandlede",
    att: "ljb",
  },
  {
    id: 11176,
    examcode: "Q_EXAM_236sd5",
    examdate: new Intl.DateTimeFormat("da").format(
      new Date(Date.UTC(2023, 11, 20, 1, 23, 16, 738))
    ),
    examname: "Musik B",
    docformat: "docx_rtf",
    visionimpaired_exam: true,
    itemid: 2,
    status: "Korrektur",
    att: "per",
  },
  {
    id: 11177,
    examcode: "Q_EXAM_2365",
    examdate: new Intl.DateTimeFormat("da").format(
      new Date(Date.UTC(2023, 11, 20, 3, 23, 16, 738))
    ),
    examname: "Musik C",
    docformat: "pdf",
    visionimpaired_exam: true,
    itemid: 56326,
    status: "Ubehandlede",
    att: "",
  },
  {
    id: 11178,
    examcode: "Q_EXAM_2365",
    examdate: new Intl.DateTimeFormat("da").format(
      new Date(Date.UTC(2023, 11, 20, 3, 23, 16, 738))
    ),
    examname: "Musik D",
    docformat: "pdf",
    visionimpaired_exam: true,
    itemid: 56326,
    status: "Godkendte",
    att: "",
  },
  {
    id: 11179,
    examcode: "Q_EXAM_2365",
    examdate: new Intl.DateTimeFormat("da").format(
      new Date(Date.UTC(2023, 11, 20, 3, 23, 16, 738))
    ),
    examname: "Musik A",
    docformat: "pdf",
    visionimpaired_exam: true,
    itemid: 56326,
    status: "direkte-forsendelse",
    att: "",
  },
  {
    id: 11180,
    examcode: "Q_EXAM_2365",
    examdate: new Intl.DateTimeFormat("da").format(
      new Date(Date.UTC(2023, 11, 20, 3, 23, 16, 738))
    ),
    examname: "Musik A",
    docformat: "pdf",
    visionimpaired_exam: true,
    itemid: 56326,
    status: "Dialog",
    att: "",
  },
  {
    id: 11181,
    examcode: "Q_EXAM_2365",
    examdate: new Intl.DateTimeFormat("da").format(
      new Date(Date.UTC(2023, 11, 20, 3, 23, 16, 738))
    ),
    examname: "Musik A",
    docformat: "pdf",
    visionimpaired_exam: true,
    itemid: 56326,
    status: "Dialog",
    att: "Keld",
  },
  {
    id: 11182,
    examcode: "Q_EXAM_2365",
    examdate: new Intl.DateTimeFormat("da").format(
      new Date(Date.UTC(2023, 11, 20, 3, 23, 16, 738))
    ),
    examname: "Musik A",
    docformat: "pdf",
    visionimpaired_exam: true,
    itemid: 56326,
    status: "Dialog",
    att: "",
  },
  {
    id: 11183,
    examcode: "Q_EXAM_2365",
    examdate: new Intl.DateTimeFormat("da").format(
      new Date(Date.UTC(2023, 11, 20, 3, 23, 16, 738))
    ),
    examname: "Musik A",
    docformat: "pdf",
    visionimpaired_exam: true,
    itemid: 56326,
    status: "Ubehandlede",
    att: "",
  },
  {
    id: 11184,
    examcode: "Q_EXAM_2365",
    examdate: new Intl.DateTimeFormat("da").format(
      new Date(Date.UTC(2023, 11, 20, 3, 23, 16, 738))
    ),
    examname: "Musik A",
    docformat: "pdf",
    visionimpaired_exam: true,
    itemid: 56326,
    status: "Ubehandlede",
    att: "",
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
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
    <Box sx={{ width: "100%" }}>
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
      <DataGrid
        // loading={!examorders ? true : false}
        // disableColumnMenu
        loading={false}
        rows={examorders}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        onCellEditStart={handleEditStart}
        // pageSizeOptions={[5, 10, 25, 50]}
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
