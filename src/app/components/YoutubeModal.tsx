"use client";
import React from "react";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
interface YoutubeModalProps {
  open: boolean;
  onClose: () => void;
  videoId: string;
}
export default function YoutubeModal({
  open,
  onClose,
  videoId,
}: YoutubeModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%" },
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 1,
          outline: "none",
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8, color: "grey.500" }}
        >
          <CloseIcon />
        </IconButton>
        <Box sx={{ position: "relative", pt: "40%" }}>
          <Box
            component="iframe"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            allow="autoplay; encrypted-media"
            allowFullScreen
            frameBorder="0"
          />
        </Box>
      </Box>
    </Modal>
  );
}
