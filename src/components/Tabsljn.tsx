import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { tabItems } from "@/data/tabItems";
console.log(tabItems);
export default function Tabsljn() {
  return (
    <Box
      sx={
        {
          /*      display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        "& > *": {
          m: 1,
        }, */
        }
      }
    >
      {/*      <ButtonGroup
        variant="outlined"
        aria-label="Filters for exam orders"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          ml: 0,
        }}
      > */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {tabItems.map((item) => (
          <Button
            variant="outlined"
            key={item.slug}
            sx={{
              //minWidth: "120px", same width
              textTransform: "capitalize",
              // flex: "1 1 0px", same width
            }}
          >
            {item.title}
            {item.count > 0 ? ` (${item.count})` : null}
          </Button>
        ))}
      </Box>
      {/* </ButtonGroup> */}
    </Box>
  );
}

/*         <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button> */
