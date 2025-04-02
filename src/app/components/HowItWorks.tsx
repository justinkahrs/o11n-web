"use client";
import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const steps = [
  {
    title: "Pick a project",
    description: "Choose any existing codebase or start a new one.",
    emoji: "📂",
  },
  {
    title: "Say what you want",
    description: "Explain your changes in plain English. Let AI handle the rest.",
    emoji: "🌐",
  },
  {
    title: "o11n makes the change",
    description: "We orchestrate the code, so you can keep vibing.",
    emoji: "🔮",
  },
];

export default function HowItWorks() {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h4" align="center" sx={{ mb: 4 }}>
        How It Works
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {steps.map((step, index) => (
          <Grid key={index} item xs={12} md={4} sx={{ textAlign: "center" }}>
            <Typography variant="h2" sx={{ fontSize: "3rem", mb: 2 }}>
              {step.emoji}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {step.title}
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              {step.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}