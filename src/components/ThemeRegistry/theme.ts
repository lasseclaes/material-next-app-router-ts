import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    lgg: true;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      lgg: 1400,
      xl: 1536,
    },
  },
  palette: {
    mode: "light",
    primary: {
      //set the primary color
      main: "rgba(0, 0, 0, 0.87)",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          overflow: "unset",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: "0.875rem",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "38px", //prev 56px
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        selectLabel: {
          lineHeight: "1.5",
        },
        displayedRows: {
          lineHeight: "1.5",
        },
      },
    },
  },
});

export default theme;

//https://mui.com/x/react-data-grid/getting-started/#typescript

/*
    MuiDataGrid: {
      styleOverrides: {
        overlayWrapper: {
          height: "5rem"
      },
        overlayWrapperInner: {
          height: "5rem"
      },
    },
  }
    */
