"use client";
import type React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function CallToActionSection() {
  const router = useRouter();
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Box
        id="cta"
        sx={{
          py: 8,
          textAlign: "center",
          mx: "auto",
          px: 2,
          maxWidth: { xs: "90%", sm: "600px" },
        }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>
          On sale for less than a video game
        </Typography>
        <Box sx={{ p: { xs: 2, sm: 4, md: 8 } }}>
          <Stack spacing={2}>
            <Typography variant="body1">
              One time fee, use it forever.
              <sup style={{ fontSize: ".5rem" }}>*</sup>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => router.push("/purchase")}
            >
              Buy now{" "}
              <span
                style={{
                  textDecoration: "line-through",
                  marginLeft: "0.5em",
                  marginRight: "0.5em",
                }}
              >
                $129
              </span>{" "}
              $79
            </Button>
          </Stack>
          <Typography variant="subtitle2" sx={{ mt: 2, fontSize: ".5rem" }}>
            * personal use only. <br />
            Enterprise licenses available,{" "}
            <a
              href="https://www.senna-automation.com/contact"
              style={{ borderBottom: ".5px solid" }}
            >
              contact
            </a>{" "}
            for details.
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
}
