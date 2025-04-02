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
        background: "radial-gradient(circle, rgba(33,33,33,1) 0%, rgba(0,0,0,1) 100%)",
      }}
    >
      <Stack spacing={2} alignItems="center">
        <Typography
          variant="h3"
          sx={{
            fontFamily: "monospace",
            color: "#fff",
            textShadow: "0 0 5px #0ff, 0 0 10px #0ff",
          }}
        >
          o11n
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          Orchestrate your code. Just vibe.
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