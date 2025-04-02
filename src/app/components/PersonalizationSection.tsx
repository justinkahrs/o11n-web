"use client";
import React from "react";
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function PersonalizationSection() {
  const items = [
    "Custom themes and colors",
    "Dark mode by default",
    "Works with your folder/file structure",
    "Feels like chatting, not coding",
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h4" align="center" sx={{ mb: 4 }}>
        Personalization = Vibes
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4, maxWidth: 600, mx: "auto" }}>
        Make o11n your own. Choose your theme, color palette, and let the AI do the rest.
      </Typography>
      <List sx={{ maxWidth: 600, mx: "auto" }}>
        {items.map((item, idx) => (
          <ListItem key={idx}>
            <ListItemIcon>
              <CheckCircleIcon color="success" />
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}