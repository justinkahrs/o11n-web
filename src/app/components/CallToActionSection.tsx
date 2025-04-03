"use client";
import React from "react";
import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";

export default function CallToActionSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handle submission or do your logic here
  };

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Box sx={{ py: 8, textAlign: "center", mx: 2 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Join the Beta
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          We’re almost there (90% cooked). Want in?
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "inline-block" }}
        >
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              type="email"
              label="Enter your email"
              required
              variant="outlined"
            />
            <Button variant="contained" type="submit">
              Notify Me
            </Button>
          </Stack>
        </Box>
      </Box>
    </motion.div>
  );
}
