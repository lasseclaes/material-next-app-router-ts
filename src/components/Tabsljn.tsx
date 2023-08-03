"use client";
import * as React from "react";
import Button from "@mui/material/Button";
// import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { tabItems } from "@/data/tabItems";
// import { statusCounts } from "@/data/examOrders";
// console.log(tabItems);
// console.log(statusCounts["alle"]);
import { useRef } from "react";
import { Typography } from "@mui/material";

interface TabsljnProps {
  /*  filterOptions: string[];
  onSelectFilter: (filter: string) => void; */
  filterByStatus: (filter: string) => void;
  statusCounts: { [key: string]: number };
}

const Tabsljn: React.FC<TabsljnProps> = ({ filterByStatus, statusCounts }) => {
  const activeBtnTitle = useRef("Alle");
  console.log(activeBtnTitle.current);
  return (
    <Box
      aria-label="Filters for exam orders"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        // flex: { xs: "100%", sm: "calc(50% - 20px)", md: "calc(33% - 20px)" }
        justifyContent: { xs: "flex-start", lgg: "space-between" },
        gap: 1,
        mb: 3,
      }}
    >
      {tabItems.map((item) => (
        <Button
          variant="outlined"
          key={item.slug}
          onClick={() => {
            filterByStatus(item.slug), (activeBtnTitle.current = item.title);
          }}
          sx={{
            //minWidth: "120px", same width
            textTransform: "capitalize",
            //hover
            "&:hover": {
              //set backgroundColor from theme.js palette
              backgroundColor: "lightgreen",
            },

            // flex: "1 1 0px", same width
            // Add a class if the current button is active
            ...(activeBtnTitle.current === item.title && {
              backgroundColor: "lightblue",
            }),
          }}
        >
          {item.title}
          {(statusCounts[item.slug] > 0 && ` (${statusCounts[item.slug]}) `) ||
            ` (0)`}
        </Button>
      ))}
    </Box>
  );
};

export default Tabsljn;
