"use client";
import type React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";

export default function CallToActionSection() {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Box
        id="cta"
        sx={{
          py: 8,
          textAlign: "center",
          mx: "auto",
          px: 2,
          maxWidth: { xs: "90%", sm: "600px" },
        }}
      >
        <>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Same price as a video game
          </Typography>
          <Stack spacing={2}>
            <Typography variant="body1">
              One time fee, use it forever.
            </Typography>
            <Button variant="contained" color="primary">
              Buy now{" "}
              <span
                style={{
                  textDecoration: "line-through",
                  marginLeft: "0.5em",
                  marginRight: "0.5em",
                }}
              >
                $99
              </span>{" "}
              $69
            </Button>
          </Stack>
        </>
      </Box>
    </motion.div>
  );
}
