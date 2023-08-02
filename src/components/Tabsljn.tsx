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
      <ButtonGroup
        variant="outlined"
        aria-label="Filters for exam orders"
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          mb: 4,
          ml: 0,
        }}
      >
        {tabItems.map((item) => (
          <Button
            key={item.slug}
            sx={{
              textTransform: "capitalize",
            }}
          >
            {item.title}
            {item.count > 0 ? ` (${item.count})` : null}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
}

/*         <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button> */
