"use client";
import * as React from "react";
import Box from "@mui/material/Box";
// import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
// import { GridColDef } from "@mui/x-data-grid/models/colDef";
// import { DataGrid } from "@mui/x-data-grid/DataGrid/DataGrid";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import Snackbar from "@mui/material/Snackbar";
import { useRef, useState } from "react";
import Alert from "@mui/material/Alert";
import { examOrders, statusCounts } from "@/data/examOrders";
import Checkboxljn from "./Checkboxljn";
import { tabItems } from "@/data/tabItems";
import Tabsljn from "./Tabsljn";
import { Typography } from "@mui/material";

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
    width: 130,
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
  {
    field: "special_production",
    headerName: "SP",
    width: 80,
    //disable filters
    filterable: false,
    //disable sorting
    //disable hide column and manage columns
    hideable: false,
    hideSortIcons: true,
    disableColumnMenu: true,
    sortable: false,
    cellClassName: "ljn-editable-cell",
    editable: true,
    type: "boolean",
    headerAlign: "left",
    /*     renderCell: (params) => (
      <>
        {/* {console.log("params: ", params)} */
    /*      {params.value}
        <EditIcon fontSize="small" style={{ marginLeft: "auto" }} />
      </>
    ), */
  },
];

/* console.log("examorders", examorders);
console.log("columns", columns); */

//lacj - too many filters?
let tempOrders = [] as any;

export default function ExamOrdersDataGrid() {
  const [shownOrders, setShownOrders] = useState(examOrders);
  const activeTitleRef = useRef("Alle");
  //disclaimer only using it as a prop here

  const toggleSpecialProductions = (isChecked: boolean) => {
    if (isChecked) {
      tempOrders = [...shownOrders];
      console.log("tempOrders: ", tempOrders);
      setShownOrders(
        shownOrders.filter((order) => order.special_production === true)
      );
    } else {
      console.log("tempOrders2: ", tempOrders);
      setShownOrders(tempOrders);
    }
  };

  const handleSelectFilter = (filter: string) => {
    console.log("filter:  " + filter);
    if (filter === "alle") {
      setShownOrders(examOrders);
      activeTitleRef.current = "Alle";
    } else {
      setShownOrders(
        examOrders.filter((order) => order.status.toLowerCase() === filter)
      );
      // activeTitleRef.current = filter;
      const matchingTab = tabItems.find(
        (tab) => tab.slug.toLowerCase() === filter
      );
      activeTitleRef.current = matchingTab ? matchingTab.title : "Alle";
    }
  };

  /*  function toggleSpecialProductions() {
    if (isChecked) {
      setShownOrders(examOrders);
      return;
    }
    setShownOrders(
      examOrders.filter((order) => order.special_production === true)
    );
  } */

  const [openToastVal, setOpen] = useState(false);

  function openToast(): void {
    setOpen((prev) => (prev = true));
  }

  function handleEditStart(e: any) {
    console.log("handleEditStart");
    console.log(e);
    openToast();
  }

  return (
    <>
      <Tabsljn
        filterByStatus={handleSelectFilter}
        statusCounts={statusCounts}
      />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openToastVal}
        autoHideDuration={6000}
        message="Husk at forlade cellen, for at dine ændringer bliver gemt."
      >
        <Alert severity="info">
          Husk at forlade cellen, for at dine ændringer bliver gemt.
        </Alert>
      </Snackbar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "1032px",
        }}
      >
        <Typography
          component={"h3"}
          variant={"h6"}
          sx={{
            //capitalize first letter
            textTransform: "capitalize",
          }}
        >
          {activeTitleRef.current}
        </Typography>
        <Checkboxljn onCheckboxChange={toggleSpecialProductions} />
      </Box>
      <Box sx={{ width: "fit-content" }}>
        {/* https://mui.com/x/api/data-grid/data-grid/ */}
        <DataGrid
          // loading={!examorders ? true : false}
          disableColumnMenu
          // disableVirtualization
          //disable sorting
          // disableColumnSelector
          loading={false}
          rows={shownOrders}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 50,
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
            "& .MuiDataGrid-overlayWrapper": {
              height: "5rem",
            },
            "& .MuiDataGrid-overlayWrapperInner": {
              height: "5rem",
            },
          }}
          checkboxSelection={false}
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
}
