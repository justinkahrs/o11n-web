"use client";
import React from "react";
import { Box, Typography, Card, CardContent, Stack } from "@mui/material";

const testimonials = [
  {
    quote: "I built a whole SaaS just by talking to it. No thoughts, just vibes.",
    author: "@br0kegenius",
  },
  {
    quote: "It’s like if ChatGPT and VSCode had a baby that listened to me.",
    author: "@altf4evr",
  },
];

export default function TestimonialsSection() {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h4" align="center" sx={{ mb: 4 }}>
        What People Are Saying
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          overflowX: "auto",
          pb: 2,
          px: 2,
        }}
      >
        {testimonials.map((t, i) => (
          <Card
            key={i}
            sx={{
              minWidth: 300,
              flex: "0 0 auto",
              background: "linear-gradient(145deg, #333, #111)",
              color: "#fff",
            }}
          >
            <CardContent>
              <Typography variant="body1" sx={{ fontStyle: "italic" }}>
                “{t.quote}”
              </Typography>
              <Typography
                variant="caption"
                display="block"
                sx={{ mt: 2, opacity: 0.8 }}
              >
                — {t.author}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}