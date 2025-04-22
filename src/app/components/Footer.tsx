"use client";
import React from "react";
import { Box, Typography, Stack, Link, useTheme } from "@mui/material";
import InstaIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import DiscordIcon from "./DiscordIcon";
import { motion } from "framer-motion";
export default function Footer() {
  const theme = useTheme();
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
            href="https://www.youtube.com/channel/UCEvuzLf_GX_6Wjvm07XWyug"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              color: theme.palette.text.primary,
            }}
          >
            <YouTubeIcon sx={{ mr: 1 }} />
            YouTube
          </Link>
          <Link
            href="https://discord.gg/Rz2BNXa68w"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              color: theme.palette.text.primary,
            }}
          >
            <DiscordIcon sx={{ mr: 1 }} />
            Discord
          </Link>
          <Link
            href="https://www.instagram.com/o11n.app/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              color: theme.palette.text.primary,
            }}
          >
            <InstaIcon sx={{ mr: 1 }} />
            Instagram
          </Link>
        </Stack>
        <Typography variant="body2" align="center" sx={{ color: "#aaa" }}>
          o11n is short for orchestration. <br /> It&apos;s pronounced
          &quot;o11n&quot;.
        </Typography>
        <Typography variant="body2" align="center" sx={{ color: "#aaa" }}>
          Made with love and just the right amount of rage by
          <br />
          <a
            href="https://www.senna-automation.com"
            style={{ borderBottom: ".5px solid" }}
          >
            Senna Automation
          </a>
          .
        </Typography>
      </Box>
    </motion.div>
  );
}
