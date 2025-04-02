"use client";
import React from "react";
import { Box, Typography, TextField, Button, Stack } from "@mui/material";

export default function CallToActionSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handle submission or do your logic here
  };

  return (
    <Box sx={{ py: 8, textAlign: "center" }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Join the Beta
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        We’re almost there (90% cooked). Want in?
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: "inline-block" }}>
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
  );
}