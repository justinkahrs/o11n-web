"use client";
import React from "react";
import { Box, Container, Button } from "@mui/material";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
// @ts-expect-error unknown import type
import eula from "./eula.md?raw";
export default function EulaPage() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        minHeight: { xs: "calc(100vh - 64px)", md: "calc(100vh - 64px)" },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Button component={Link} href="/" variant="contained" sx={{ mb: 2 }}>
          Home
        </Button>
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 style={{ marginTop: "1em" }}>{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 style={{ marginTop: "1em" }}>{children}</h2>
            ),
            p: ({ children }) => (
              <p style={{ marginBottom: "1em" }}>{children}</p>
            ),
            ul: ({ children }) => (
              <ul style={{ marginBottom: "1em" }}>{children}</ul>
            ),
            li: ({ children }) => <li style={{ margin: "1em" }}>{children}</li>,
          }}
        >
          {eula}
        </ReactMarkdown>
      </Container>
    </Box>
  );
}
