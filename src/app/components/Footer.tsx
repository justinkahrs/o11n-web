"use client";
import React from "react";
import { Box, Typography, Stack, Link } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Diversity3Icon from "@mui/icons-material/Diversity3";

export default function Footer() {
  return (
    <Box sx={{ py: 4, borderTop: "1px solid #444", mt: 8 }}>
      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Link
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ display: "flex", alignItems: "center", color: "#fff" }}
        >
          <TwitterIcon sx={{ mr: 1 }} />
          Twitter
        </Link>
        <Link
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ display: "flex", alignItems: "center", color: "#fff" }}
        >
          <Diversity3Icon sx={{ mr: 1 }} />
          Discord
        </Link>
        <Link
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ display: "flex", alignItems: "center", color: "#fff" }}
        >
          <GitHubIcon sx={{ mr: 1 }} />
          GitHub
        </Link>
      </Stack>
      <Typography variant="body2" align="center" sx={{ color: "#aaa" }}>
        o11n is short for orchestration. But we’re vibing.
      </Typography>
    </Box>
  );
}