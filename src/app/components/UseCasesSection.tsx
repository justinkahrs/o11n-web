"use client";
import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

export default function UseCasesSection() {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h4" align="center" sx={{ mb: 4 }}>
        What It’s For
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4, maxWidth: 600, mx: "auto" }}>
        o11n is for non-coders, baby devs, creative weirdos, and anyone who just wants to build.
      </Typography>
      <List sx={{ maxWidth: 600, mx: "auto" }}>
        <ListItem>
          <ListItemText primary="Building side projects without deep coding knowledge" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Fixing bugs you don’t understand" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Writing long-form content with context tracking" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Making changes to existing software quickly" />
        </ListItem>
      </List>
    </Box>
  );
}