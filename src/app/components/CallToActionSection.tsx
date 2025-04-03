"use client";
import type React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CallToActionSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidEmail) return;
    setIsSubmitting(true);
    try {
      await fetch("/api/joinBeta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting email", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Box id="cta" sx={{ py: 8, textAlign: "center", mx: 2 }}>
        {!isSubmitted ? (
          <>
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
                  id="email-input"
                  type="email"
                  label="Enter your email"
                  required
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  variant="contained"
                  type="submit"
                  disabled={!isValidEmail || isSubmitting}
                >
                  {isSubmitting ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "Notify Me"
                  )}
                </Button>
              </Stack>
            </Box>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <Typography variant="h4" className="glitch">
              We'll talk soon.
            </Typography>
            <style jsx>{`
              @keyframes glitch {
                0% {
                  text-shadow: 2px 2px red;
                  transform: translate(0, 0);
                }
                20% {
                  text-shadow: -2px -2px blue;
                  transform: translate(-2px, 2px);
                }
                40% {
                  text-shadow: 2px -2px green;
                  transform: translate(2px, -2px);
                }
                60% {
                  text-shadow: -2px 2px purple;
                  transform: translate(-2px, 2px);
                }
                80% {
                  text-shadow: 2px 2px yellow;
                  transform: translate(2px, -2px);
                }
                100% {
                  text-shadow: none;
                  transform: translate(0, 0);
                }
              }
              .glitch {
                animation: glitch 3s;
              }
            `}</style>
          </motion.div>
        )}
      </Box>
    </motion.div>
  );
}
