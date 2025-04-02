"use client";
import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        mx: 2,
      }}
    >
      <Stack spacing={2} alignItems="center">
        <img
          src="/o11n-first-logo-transparent.png"
          alt="o11n logo"
          style={{ width: "400px" }}
        />
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          Orchestrate your code. <br />
          Just vibe.
        </Typography>
        <Typography variant="subtitle1">
          Talk to AI. Let it build. You stay in flow.
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          mt={2}
          justifyContent="center"
        >
          <Button variant="contained" color="primary">
            Get Early Access
          </Button>
          <Button variant="outlined" color="secondary">
            See It in Action
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}