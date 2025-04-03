"use client";
import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import { LenisContext } from "../Providers";

export default function UseCasesSection() {
  const lenis = useContext(LenisContext);
  const [transformStyle, setTransformStyle] = useState({});

  useEffect(() => {
    if (!lenis) return;
    const updateStyle = (e) => {
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
          Who is this for?
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ mb: 4, maxWidth: 600, mx: "auto" }}
        >
          o11n is for non-coders, baby devs, creative weirdos, senior devs in
          loveless relationships with their current tools, and anyone who just
          wants to build things without friction.
        </Typography>
        <List sx={{ maxWidth: 600, mx: "auto" }}>
          <ListItem>
            <ListItemText primary="Build side projects" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Fix bugs" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Make changes quickly" />
          </ListItem>
        </List>
      </Box>
    </div>
  );
}
