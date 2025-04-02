"use client";
import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

export default function UseCasesSection() {
  return (
    <Box
      sx={{
        py: 8,
        mx: 2,
        backgroundColor: "#f5f5f5",
        borderRadius: 20,
        color: "black",
      }}
    >
      <Typography variant="h4" align="center" sx={{ mb: 4 }}>
        Who is this for?
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ mb: 4, maxWidth: 600, mx: "auto" }}
      >
        o11n is for non-coders, baby devs, creative weirdos, senior devs in
        loveless relationships with their current tools, and anyone who just
        wants to build things without friction.
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
