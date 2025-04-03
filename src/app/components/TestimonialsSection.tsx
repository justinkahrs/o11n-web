"use client";
import React from "react";
import { Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "I built a whole SaaS just by talking to it. No thoughts, just vibes.",
    author: "@br0kegenius",
  },
  {
    quote: "It’s like if ChatGPT and VSCode had a baby that listened to me.",
    author: "@altf4evr",
  },
  {
    quote:
      "I accidentally deployed my code into production, but o11n fixed it before my boss noticed.",
    author: "@oopsididit",
  },
  {
    quote:
      "I thought I was debugging, but it was just my code appreciating the vibe.",
    author: "@vibesonly",
  },
  {
    quote: "My code was like a puzzle, but o11n turned it into a masterpiece.",
    author: "@codewizard",
  },
  {
    quote:
      "Who knew talking to code could be this much fun? I’m laughing my bugs away!",
    author: "@laughingdev",
  },
  {
    quote:
      "I told o11n to add more coffee, and it brewed a whole café in my code.",
    author: "@javajester",
  },
  {
    quote: "My code now writes itself while I sip margaritas.",
    author: "@beachdev",
  },
  {
    quote:
      "I asked for help, and o11n turned my spaghetti code into gourmet pasta.",
    author: "@noodlelover",
  },
  {
    quote: "With o11n, even my typos turn into features!",
    author: "@quirkycoder",
  },
  {
    quote: "I thought I was dreaming, until o11n made my code dance.",
    author: "@dancedev",
  },
];

// Duplicate testimonials for seamless looping
const repeatedTestimonials = [...testimonials, ...testimonials];

export default function TestimonialsSection() {
  return (
    <div
      style={{
        overflow: "hidden",
        marginTop: "32px",
        position: "relative",
        height: "300px",
      }}
    >
      <Typography variant="h4" align="center" style={{ marginBottom: "16px" }}>
        What People Could Be Saying
      </Typography>
      <motion.div
        style={{ display: "inline-flex", whiteSpace: "nowrap" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 80,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        {repeatedTestimonials.map((t, i) => (
          <Card
            key={`${t.quote}-${i}`}
            sx={{
              minWidth: 300,
              marginRight: 2,
              backgroundColor: i % 2 === 0 ? "primary.main" : "secondary.main",
              mt: i % 2 === 0 ? 2 : 0,
              mb: i % 2 !== 0 ? 2 : 0,
              color: "#fff",
            }}
          >
            <CardContent>
              <Typography
                variant="body1"
                sx={{
                  fontStyle: "italic",
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                }}
              >
                “{t.quote}”
              </Typography>
              <Typography variant="caption" sx={{ marginTop: 2, opacity: 0.8 }}>
                — {t.author}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </div>
  );
}
