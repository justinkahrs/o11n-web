"use client";
import React from "react";
import { Box, Typography, Stack, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Box sx={{ py: 4, borderTop: "1px solid #444", mt: 8 }}>
        <Stack
          direction="row"
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <Link
            href="https://github.com/justinkahrs/o11n"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ display: "flex", alignItems: "center", color: "#fff" }}
          >
            <GitHubIcon sx={{ mr: 1 }} />
            GitHub
          </Link>
        </Stack>
        <Typography variant="body2" align="center" sx={{ color: "#aaa" }}>
          o11n is short for orchestration. <br /> But we’re vibing.
        </Typography>
      </Box>
    </motion.div>
  );
}
