"use client";
import type React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import AnimatedStep from "./AnimatedStep";
const steps = [
  {
    title: "Pick a project/file",
    description:
      "Choose any directory or a single text-based file to get started.",
    icon: <FolderOpenIcon sx={{ fontSize: "3rem", mb: 2 }} />,
  },
  {
    title: "Shoot your shot",
    description:
      "Just say what you want to do—like “Add a shopping cart to my app” or “Use the webcam to show my video.” The AI will take it from there.",
    icon: <ChatBubbleOutlineIcon sx={{ fontSize: "3rem", mb: 2 }} />,
  },
  {
    title: "o11n makes the change",
    description: "We basically just full send it, so you can keep vibing.",
    icon: <AutoFixHighIcon sx={{ fontSize: "3rem", mb: 2 }} />,
  },
];
export default function HowItWorks() {
  const { scrollY } = useScroll();
  const comb1Y = useTransform(scrollY, [0, 500], [0, 50]);
  const comb2Y = useTransform(scrollY, [0, 500], [0, -50]);
  return (
    <Box
      sx={{
        py: 4,
        my: 20,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Parallax comb layers */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 5,
          width: "50%",
          height: "100%",
          y: comb1Y,
          background:
            "repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(0,0,0,0.05) 10px, rgba(0,0,0,0.05) 20px)",
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          y: comb2Y,
          background:
            "repeating-linear-gradient(90deg, rgba(0,0,0,0.05), rgba(0,0,0,0.05) 10px, transparent 10px, transparent 20px)",
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />
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
