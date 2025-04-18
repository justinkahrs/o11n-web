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
          overflow: "hidden",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: `${maxSteps * 100}%`,
            transform: `translateX(-${activeStep * (100 / maxSteps)}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {images.map((img, idx) => (
            <Box
              key={img}
              component="img"
              src={img}
              alt={`Screenshot ${idx + 1}`}
              onClick={() => {
                setDialogImage(img);
                setOpen(true);
              }}
              sx={{
                cursor: "pointer",
                width: `${100 / maxSteps}%`,
                height: "auto",
                objectFit: "contain",
                borderRadius: 2,
              }}
            />
          ))}
        </Box>
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
