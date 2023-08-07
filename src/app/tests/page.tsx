import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import Link from "next/link";

export default function TestsPage() {
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
          TestsPage
        </Typography>
        <Link href="tests/test2#testing" scroll={false}>
          Deep link w/ id
        </Link>
        <Link
          href={{
            pathname: "tests/test3",
            query: { name: "Vercel", title: "Next.js" },
          }}
        >
          Link w/ URL parameters
        </Link>
      </Box>
    </Container>
  );
}
