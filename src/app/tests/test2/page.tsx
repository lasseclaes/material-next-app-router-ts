import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Head from "next/head";

export default function Test3Page() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body1" gutterBottom>
          Test3Page
        </Typography>
      </Box>
      <Box
        sx={{
          height: "2000px",
          backgroundColor: "lightblue",
        }}
      ></Box>
      <Typography variant="h1" id="testing">
        hey
      </Typography>
    </Container>
  );
}
