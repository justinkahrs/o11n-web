"use client";
import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useContext } from "react";
import { LenisContext } from "../Providers";
import LogoSVG from "./LogoSVG";

export default function HeroSection() {
  const lenis = useContext(LenisContext);

  const handleGetEarlyAccess = () => {
    if (lenis) {
      lenis.scrollTo("#cta", { duration: 1 });
      setTimeout(() => {
        const input = document.getElementById(
          "email-input"
        ) as HTMLInputElement;
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
      <Stack
        spacing={2}
        alignItems="center"
        sx={{ width: { xs: "80%", sm: "auto" } }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Box>
            <LogoSVG width="100%" height="auto" />
          </Box>
        </motion.div>

        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Orchestrate your code. <br />
            Customize the theme. <br />
            Just vibe.
          </Typography>
          <Typography variant="subtitle1" sx={{ maxWidth: "700px" }}>
            Never again worry about crafting the perfect prompt. You talk to
            your files while o11n handles talking to AI, so you can stay in the
            flow.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            mt={2}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleGetEarlyAccess}
            >
              Buy now
            </Button>
            <Button variant="outlined" color="secondary">
              See It Work
            </Button>
          </Stack>
        </motion.div>
      </Stack>
    </Box>
  );
}
