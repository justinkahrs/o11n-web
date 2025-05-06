"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Box, Typography, Button, Stack, Link } from "@mui/material";
import { motion } from "framer-motion";
import LogoSVG from "../components/LogoSVG";
import { Apple, Microsoft, ShoppingCart } from "@mui/icons-material";
type Links = {
  dmg: string;
  exe: string;
};
export default function DownloadClient() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [links, setLinks] = useState<Links | null>(null);
  const [error, setError] = useState<string>(
    "You must complete a purchase before downloading the app."
  );
  useEffect(() => {
    if (!sessionId) {
      setError("No session ID provided. Please complete your purchase first.");
      return;
    }
    (async () => {
      try {
        const res = await fetch(`/api/download?session_id=${sessionId}`);
        if (!res.ok) {
          throw new Error("Unauthorized");
        }
        const data: Links = await res.json();
        setLinks(data);
      } catch (e) {
        console.log(e);
        setError("You must complete a purchase before downloading the app.");
      }
    })();
  }, [sessionId]);
  if (error) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          mx: 2,
        }}
      >
        <Typography variant="h6" color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
        <Button
          component={Link}
          startIcon={<ShoppingCart />}
          variant="contained"
          color="primary"
          href="/purchase"
        >
          Purchase now
        </Button>
      </Box>
    );
  }
  if (!links) {
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
        <Typography variant="h6">
          Chill while we grab the download links…
        </Typography>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        mx: 2,
      }}
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Box sx={{ mb: 2 }}>
          <LogoSVG width="100%" height="auto" />
        </Box>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Stack spacing={2} alignItems="center">
          <Stack spacing={2} direction="column">
            <Button
              startIcon={<Apple />}
              variant="contained"
              color="primary"
              component="a"
              href={links.dmg}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download for mac
            </Button>
            <Button
              startIcon={<Microsoft />}
              variant="contained"
              color="primary"
              component="a"
              href={links.exe}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download for Windows
            </Button>
          </Stack>
        </Stack>
      </motion.div>
    </Box>
  );
}
