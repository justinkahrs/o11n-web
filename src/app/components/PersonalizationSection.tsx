"use client";
import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion";

export default function PersonalizationSection() {
  const items = [
    "Custom themes and colors",
    "Dark mode by default",
    "Works with your folder/file structure",
    "Feels like chatting, not coding",
  ];

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Box sx={{ py: 8, my: 20 }}>
        <Typography variant="h4" align="center" sx={{ mb: 4 }}>
          Personalization = Vibes
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ mb: 4, maxWidth: 600, mx: "auto" }}
        >
          Make o11n your own. Choose your theme, color palette, and let the AI
          do the rest.
        </Typography>
        <List sx={{ maxWidth: 600, mx: "auto" }}>
          {items.map((item) => (
            <ListItem key={item}>
              <ListItemIcon>
                <CheckCircleIcon color="success" />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Box>
    </motion.div>
  );
}
