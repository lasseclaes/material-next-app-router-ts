import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Head from "next/head";

export default function Test2Page() {
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
          Test2Page
        </Typography>
      </Box>
    </Container>
  );
}
