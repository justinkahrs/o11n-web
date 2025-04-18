"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { LenisContext } from "../Providers";

export default function UseCasesSection() {
const lenis = useContext(LenisContext);
  const [transformStyle, setTransformStyle] = useState({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const useCases = [
    "Edit many files at once",
    "Find and fix bugs across a codebase",
    "Include documentation as context",
    "Make large sweeping changes, instantly",
    "Save and use custom prompts",
    "Keep track of the characters in your novel",
    "Analyze large sets of data",
    "Chat with your files without making changes",
  ];
  const splitIndex = Math.ceil(useCases.length / 2);
  const firstHalf = useCases.slice(0, splitIndex);
  const secondHalf = useCases.slice(splitIndex);

  useEffect(() => {
    if (!lenis) return;
    const updateStyle = (e: { scroll: number }) => {
      const currentScroll =
        e && e.scroll !== undefined ? e.scroll : lenis.scroll;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const p = total ? currentScroll / total : 0;
      const factor = Math.min(p / 0.33, 1); // map progress [0, 0.33] to [0,1]
      const x = 500 * (1 - factor); // from 500px to 0px
      const rotation = 45 * (1 - factor); // from 45deg to 0deg
      const opacity = factor; // from 0 to 1
      setTransformStyle({
        transform: `translateX(${x}px) rotate(${rotation}deg)`,
        opacity: opacity,
      });
    };

    lenis.on("scroll", updateStyle);
    // Initial update with current scroll position
    updateStyle({ scroll: lenis.scroll });
    return () => {
      lenis.off("scroll", updateStyle);
    };
  }, [lenis]);

  return (
    <div style={transformStyle}>
      <Box
        sx={{
          py: 8,
          px: 4,
          mx: 2,
          backgroundColor: "#f5f5f5",
          borderRadius: 20,
          color: "black",
        }}
      >
        <Typography variant="h4" align="center" sx={{ mb: 4 }}>
          Who should use this?
        </Typography>
        <Typography
          variant="body1"
          align="left"
          sx={{ mb: 4, maxWidth: 600, mx: "auto" }}
        >
          o11n was made for non-coders, baby devs, creative weirdos, senior devs
          in loveless relationships with their current tools, or anyone who just
          wants to build things without friction.
        </Typography>
        <Typography variant="h4" align="center" sx={{ my: 4 }}>
          What you can do with it
        </Typography>
<Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            maxWidth: 1200,
            mx: "auto",
          }}
        >
          {(isMobile ? [useCases] : [firstHalf, secondHalf]).map((group, idx) => (
            <List
              component="ul"
              key={idx}
              sx={{ listStyleType: "disc", pl: 4, flex: "1 1 300px" }}
            >
              {group.map((text, i) => (
                <ListItem key={i} sx={{ display: "list-item" }}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          ))}
        </Box>
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button variant="contained">See how it works</Button>
        </Box>
      </Box>
    </div>
  );
}
