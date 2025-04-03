"use client";
import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useContext } from "react";
import { LenisContext } from "../Providers";

export default function HeroSection() {
  const lenis = useContext(LenisContext);

  const handleGetEarlyAccess = () => {
    if (lenis) {
      lenis.scrollTo("#cta", { duration: 1 });
      setTimeout(() => {
        const input = document.getElementById("email-input") as HTMLInputElement;
        if (input) {
          input.focus();
        }
      }, 1100);
    }
  };
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
        <motion.img
          src="/o11n-first-logo-transparent.png"
          alt="o11n logo"
          style={{ width: "400px" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
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
            <Button variant="contained" color="primary" onClick={handleGetEarlyAccess}>
              Get Early Access
            </Button>
            <Button variant="outlined" color="secondary">
              See It in Action
            </Button>
          </Stack>
        </motion.div>
      </Stack>
    </Box>
  );
}