"use client";
import type React from "react";
import { Box, Typography, Grid } from "@mui/material";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import AnimatedStep from "./AnimatedStep";
const steps = [
  {
    title: "Load your project files",
    description:
      "Choose a bunch of files or just one text-based file to get started. This will give the AI the proper context without having to constantly copy paste multiple (changing) files into your AI.",
    icon: <FolderOpenIcon sx={{ fontSize: "3rem", mb: 2 }} />,
  },
  {
    title: "Shoot your shot",
    description:
      "Just say what you want to do, like “Add a shopping cart to my app” or “Put an interactive map on my website”, click copy and send it to your preferred (reasoning) AI model.",
    icon: <ChatBubbleOutlineIcon sx={{ fontSize: "3rem", mb: 2 }} />,
  },
  {
    title: "o11n makes the change",
    description:
      "We take the AI's response and act upon your project files (with approval, of course) instantly. o11n will even create new files when necessary. Wash, rinse, repeat. Now you got a stew goin.",
    icon: <AutoFixHighIcon sx={{ fontSize: "3rem", mb: 2 }} />,
  },
];
export default function HowItWorks() {
  return (
    <Box
      sx={{
        py: 4,
        my: 20,
        // position: "relative",
      }}
    >
      <Typography variant="h4" align="center">
        How It Works
      </Typography>
      <Grid container spacing={8} justifyContent="center">
        {steps.map((step) => (
          <Grid key={step.title} sx={{ textAlign: "center", p: 4 }}>
            <AnimatedStep offset={100}>
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
