"use client";
import type React from "react";
import { Box, Typography, Grid } from "@mui/material";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import AnimatedStep from "./AnimatedStep";
const steps = [
  {
    title: "Pick a project",
    description: "Choose any existing codebase or start a new one.",
    icon: <FolderOpenIcon sx={{ fontSize: "3rem", mb: 2 }} />,
  },
  {
    title: "Say what you want",
    description:
      "Explain your changes in plain English. Let AI handle the rest.",
    icon: <ChatBubbleOutlineIcon sx={{ fontSize: "3rem", mb: 2 }} />,
  },
  {
    title: "o11n makes the change",
    description: "We orchestrate the code, so you can keep vibing.",
    icon: <AutoFixHighIcon sx={{ fontSize: "3rem", mb: 2 }} />,
  },
];
export default function HowItWorks() {
  return (
    <Box sx={{ py: 4, my: 20 }}>
      <Typography variant="h4" align="center" sx={{ mb: 4 }}>
        How It Works
      </Typography>
      <Grid container spacing={8} justifyContent="center">
        {steps.map((step, index) => (
          <Grid key={step.title} sx={{ textAlign: "center", p: 4 }}>
            <AnimatedStep offset={index % 2 === 0 ? -100 : 100}>
              {step.icon}
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {step.title}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                {step.description}
              </Typography>
            </AnimatedStep>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
