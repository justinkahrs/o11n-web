"use client";
import type React from "react";
import { useContext, useEffect, useRef, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { LenisContext } from "../Providers";

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

function AnimatedStep({
  children,
  offset,
}: {
  children: React.ReactNode;
  offset: number;
}) {
  const lenis = useContext(LenisContext);
  const ref = useRef<HTMLDivElement>(null);
  const [animProgress, setAnimProgress] = useState(0);

  useEffect(() => {
    if (!lenis) return;
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        let progress = (window.innerHeight - rect.top) / window.innerHeight;
        progress = Math.max(0, Math.min(progress, 1));
        const effectiveProgress = Math.min(progress, 0.5);
        setAnimProgress(effectiveProgress);
      }
    };
    lenis.on("scroll", handleScroll);
    // Initial check in case element is already in view
    handleScroll();
    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, [lenis]);

  const factor = animProgress / 0.5; // scales from 0 to 1
  const xValue = offset * (1 - factor);
  const opacityValue = factor;

  return (
    <motion.div ref={ref} style={{ x: xValue, opacity: opacityValue }}>
      {children}
    </motion.div>
  );
}

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
