"use client";
import React, { useState } from "react";
import {
  Box,
  MobileStepper,
  Button,
  Dialog,
  DialogContent,
} from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
export default function ScreenshotsCarousel() {
  const images = [
    "/screenshot1.png",
    "/screenshot2.png",
    "/screenshot3.png",
    "/screenshot4.png",
  ];
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;
  const [open, setOpen] = useState(false);
  const [dialogImage, setDialogImage] = useState("");
  const handleNext = () =>
    setActiveStep((prev) => Math.min(prev + 1, maxSteps - 1));
  const handleBack = () => setActiveStep((prev) => Math.max(prev - 1, 0));
  return (
    <Box
      sx={{
        maxWidth: 600,
        flexGrow: 1,
        mx: "auto",
        my: 8,
      }}
    >
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Box
          component="img"
          src={images[activeStep]}
          alt={`Screenshot ${activeStep + 1}`}
          onClick={() => {
            setDialogImage(images[activeStep]);
            setOpen(true);
          }}
          sx={{
            cursor: "pointer",
            width: "100%",
            height: "auto",
            objectFit: "contain",
            display: "block",
            borderRadius: 2,
          }}
        />
      </Box>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="lg"
        fullWidth
      >
        <DialogContent sx={{ p: 0 }}>
          <Box
            component="img"
            src={dialogImage}
            alt="Screenshot Enlarged"
            sx={{ width: "100%", height: "auto" }}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
}
