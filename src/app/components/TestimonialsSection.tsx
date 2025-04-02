"use client";
import React, { useRef, useState, useEffect } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { motion, useAnimation } from "framer-motion";

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

export default function TestimonialsSection() {
  // Duplicate the testimonials for a seamless marquee
  const repeatedTestimonials = [...testimonials, ...testimonials];

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // State to keep track of measured dimensions
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);

  // Framer Motion animation controls
  const controls = useAnimation();

  useEffect(() => {
    // Measure the container and content whenever the window resizes
    const measure = () => {
      if (containerRef.current && contentRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        setContentWidth(contentRef.current.scrollWidth);
      }
    };

    measure(); // Measure initially on mount
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    // Once we know widths, start the marquee
    if (containerWidth && contentWidth) {
      // Because we duplicated the testimonials, effectively half of the total content
      // covers all unique cards.
      const distanceToScroll = contentWidth / 2;

      // Adjust speed by dividing distance by some speed factor (e.g., 50 for slow, 80 for faster, etc.)
      const duration = distanceToScroll / 50;

      controls.start({
        x: -distanceToScroll,
        transition: {
          duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    }
  }, [containerWidth, contentWidth, controls]);

  return (
    <Box sx={{ py: 20, overflow: "hidden" }} ref={containerRef}>
      <Typography variant="h4" align="center" sx={{ mb: 4 }}>
        What People Could Be Saying
      </Typography>
      <Box
        component={motion.div}
        sx={{ display: "flex" }}
        ref={contentRef}
        animate={controls}
        initial={{ x: 0 }}
      >
        {repeatedTestimonials.map((t, i) => (
          <Card
            key={i}
            sx={{
              minWidth: 300,
              flex: "0 0 auto",
              color: "#fff",
              mr: 2,
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
      </Box>
    </Box>
  );
}
