"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Box, Typography, Button, Stack, Link, TextField } from "@mui/material";
import { motion } from "framer-motion";
import LogoSVG from "../components/LogoSVG";
import { Apple, Check, Microsoft, ShoppingCart } from "@mui/icons-material";
type Links = {
  dmg: string;
  exe: string;
};
export default function DownloadClient() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [links, setLinks] = useState<Links | null>(null);
  const [error, setError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [lookupError, setLookupError] = useState<string>("");
  const [lookupSuccess, setLookupSuccess] = useState<string>("");
  const [isLookupLoading, setIsLookupLoading] = useState<boolean>(false);
  const [hasDownloaded, setHasDownloaded] = useState<boolean>(false);
  useEffect(() => {
    if (!sessionId) {
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
  if (!sessionId) {
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
        <Typography variant="h6" sx={{ mb: 2 }}>
          Enter the email used for purchase to retrieve download links
        </Typography>
        <TextField
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2 }}
        />
        {lookupError && (
          <Typography variant="body2" color="error" sx={{ mb: 2 }}>
            {lookupError}
          </Typography>
        )}
        {lookupSuccess && (
          <Typography variant="body2" sx={{ color: "success.main", mb: 2 }}>
            {lookupSuccess}
          </Typography>
        )}
        <Button
          startIcon={<Check />}
          variant="contained"
          onClick={async () => {
            setIsLookupLoading(true);
            try {
              const res = await fetch("/api/download", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
              });
              if (!res.ok) {
                throw new Error("Lookup failed");
              }
              setLookupSuccess(
                "Thanks, we have sent a new download link to your email"
              );
              setLookupError("");
            } catch {
              setLookupError("Could not find purchase for this email");
              setLookupSuccess("");
            } finally {
              setIsLookupLoading(false);
            }
          }}
          disabled={isLookupLoading || !email}
        >
          {isLookupLoading ? "Verifying..." : "Verify purchase"}
        </Button>
      </Box>
    );
  }
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
        {hasDownloaded ? (
          <Link href="/">
            <Box sx={{ mb: 2 }}>
              <LogoSVG width="100%" height="auto" />
            </Box>
          </Link>
        ) : (
          <Box sx={{ mb: 2 }}>
            <LogoSVG width="100%" height="auto" />
          </Box>
        )}
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
              onClick={() => setHasDownloaded(true)}
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
              onClick={() => setHasDownloaded(true)}
            >
              Download for Windows
            </Button>
          </Stack>
        </Stack>
      </motion.div>
    </Box>
  );
}
