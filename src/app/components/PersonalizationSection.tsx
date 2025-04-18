"use client";
import React, { useState, useContext } from "react";
import {
  Box,
  Typography,
  Button,
  Menu,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { motion } from "framer-motion";
import { ThemeContext } from "../Providers";
import { HexColorPicker } from "react-colorful";
import tinycolor from "tinycolor2";
import AppPreview from "./AppPreview";
import { Replay, Shuffle } from "@mui/icons-material";

export default function PersonalizationSection() {
  const themeCtx = useContext(ThemeContext);
  const [primaryColor, setPrimaryColor] = useState("#F39C6E");
  const [secondaryColor, setSecondaryColor] = useState("#92AE79");
  const [primaryAnchorEl, setPrimaryAnchorEl] = useState<HTMLElement | null>(
    null
  );
  const [secondaryAnchorEl, setSecondaryAnchorEl] =
    useState<HTMLElement | null>(null);
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const [showLogo, setShowLogo] = useState(true);
  const randomizeColors = () => {
    const primary = tinycolor.random().toHexString();
    const secondary = tinycolor(primary).complement().toHexString();
    const newMode: "light" | "dark" = Math.random() < 0.5 ? "light" : "dark";
    setPrimaryColor(primary);
    setSecondaryColor(secondary);
    setMode(newMode);
    themeCtx?.onThemeChange(primary, secondary, newMode);
  };
  const resetDefaults = () => {
    const defaultPrimary = "#F39C6E";
    const defaultSecondary = "#92AE79";
    const defaultMode: "light" | "dark" = "dark";
    setPrimaryColor(defaultPrimary);
    setSecondaryColor(defaultSecondary);
    setMode(defaultMode);
    themeCtx?.onThemeChange(defaultPrimary, defaultSecondary, defaultMode);
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Box sx={{ py: 8, my: 20 }}>
        <Typography variant="h4" align="center" sx={{ mb: 4 }}>
          Make it ugly if you want
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ mb: 4, maxWidth: 600, mx: "auto" }}
        >
          Make o11n your own. Choose your theme, color palette, and let the AI
          do the rest.
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 4,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              width: 300,
              textAlign: "center",
              mx: "auto",
              order: { xs: 2, sm: 1 },
            }}
          >
            <AppPreview
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              onPickPrimary={(event) => setPrimaryAnchorEl(event.currentTarget)}
              showLogo={showLogo}
            />
          </Box>
          <Box
            sx={{
              width: 300,
              textAlign: "center",
              mx: "auto",
              order: { xs: 1, sm: 2 },
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Give it a try
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", sm: "column" },
                gap: 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Change Primary
                </Typography>
                <Box
                  sx={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    backgroundColor: primaryColor,
                    cursor: "pointer",
                    mx: "auto",
                    mb: 1,
                  }}
                  onClick={(event) => setPrimaryAnchorEl(event.currentTarget)}
                />
                <Menu
                  open={Boolean(primaryAnchorEl)}
                  anchorEl={primaryAnchorEl}
                  onClose={() => setPrimaryAnchorEl(null)}
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  transformOrigin={{ vertical: "top", horizontal: "center" }}
                  slotProps={{
                    paper: {
                      style: {
                        padding: "0px 8px",
                      },
                    },
                  }}
                >
                  <HexColorPicker
                    color={primaryColor}
                    onChange={(color) => {
                      setPrimaryColor(color);
                      themeCtx?.onThemeChange(color, secondaryColor, "dark");
                    }}
                  />
                </Menu>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Change Secondary
                </Typography>
                <Box
                  sx={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    backgroundColor: secondaryColor,
                    cursor: "pointer",
                    mx: "auto",
                    mb: 1,
                  }}
                  onClick={(event) => setSecondaryAnchorEl(event.currentTarget)}
                />
                <Menu
                  open={Boolean(secondaryAnchorEl)}
                  anchorEl={secondaryAnchorEl}
                  onClose={() => setSecondaryAnchorEl(null)}
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  transformOrigin={{ vertical: "top", horizontal: "center" }}
                  slotProps={{
                    paper: {
                      style: {
                        padding: "0px 8px",
                      },
                    },
                  }}
                >
                  <HexColorPicker
                    color={secondaryColor}
                    onChange={(color) => {
                      setSecondaryColor(color);
                      themeCtx?.onThemeChange(primaryColor, color, "dark");
                    }}
                  />
                </Menu>
              </Box>
            </Box>
            <Box sx={{ mt: 2, textAlign: "center" }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={mode === "dark"}
                    onChange={(e) => {
                      const newMode = e.target.checked ? "dark" : "light";
                      setMode(newMode);
                      themeCtx?.onThemeChange(
                        primaryColor,
                        secondaryColor,
                        newMode
                      );
                    }}
                  />
                }
                label="Dark Mode"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={showLogo}
                    onChange={(e) => {
                      setShowLogo(e.target.checked);
                    }}
                  />
                }
                label="Show Logo"
              />
            </Box>
            <Button
              startIcon={<Shuffle />}
              variant="outlined"
              onClick={randomizeColors}
              sx={{ mt: 2 }}
            >
              Randomize Theme
            </Button>
            <Button
              startIcon={<Replay />}
              variant="outlined"
              onClick={resetDefaults}
              sx={{ mt: 1 }}
            >
              Reset Default
            </Button>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}
