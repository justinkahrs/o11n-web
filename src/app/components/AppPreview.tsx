"use client";
import type React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import {
  ContentCopy,
  Folder,
  FolderSpecial,
  InsertDriveFile,
} from "@mui/icons-material";
import LogoSVG from "./LogoSVG";
type AppPreviewProps = {
  primaryColor: string;
  secondaryColor: string;
  onPickPrimary: (event: React.MouseEvent<HTMLElement>) => void;
  showLogo: boolean;
};
export default function AppPreview({
  primaryColor,
  secondaryColor,
  showLogo,
}: AppPreviewProps) {
  const [expanded, setExpanded] = useState(true);
  return (
    <Box
      sx={{
        borderRadius: "4px",
        border: "1px solid lightgrey",
        display: "flex",
        flexDirection: "column",
        maxWidth: 300,
        textAlign: "center",
        p: 1,
      }}
    >
      {showLogo && (
        <LogoSVG
          section1Color={primaryColor}
          section2Color={secondaryColor}
          height="3rem"
        />
      )}
      <Box
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Button startIcon={<FolderSpecial />} variant="contained" size="small">
          Load Project
        </Button>
        <Button startIcon={<InsertDriveFile />} variant="outlined" size="small">
          Load File
        </Button>
        <TextField placeholder="Add a Contact page" size="small" fullWidth />
      </Box>
      <Box sx={{ mt: 2, minHeight: "300px" }}>
        <Card variant="outlined" sx={{ mt: 1 }}>
          <Box
            onClick={() => setExpanded(!expanded)}
            sx={{ bgcolor: secondaryColor, p: 1, cursor: "pointer" }}
          >
            <Typography variant="subtitle2" sx={{ display: "flex" }}>
              <Folder sx={{ mr: 1 }} />
              My Project - 2 files - 2.8MB
            </Typography>
          </Box>
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                style={{ overflow: "hidden" }}
              >
                <CardContent>
                  <Box
                    sx={{
                      mt: 2,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                    }}
                  >
                    <Box
                      sx={{
                        borderRadius: "4px",
                        border: "1px solid lightgrey",
                        p: 1,
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 0.5 }}
                      >
                        <InsertDriveFile color="action" sx={{ mr: 1 }} />
                        <Typography variant="subtitle2">
                          package.json
                        </Typography>
                      </Box>
                      <Typography
                        variant="caption"
                        component="div"
                        align="left"
                      >
                        800 B (26%)
                      </Typography>
                      <Typography
                        variant="caption"
                        component="div"
                        align="left"
                      >
                        120 tokens
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        borderRadius: "4px",
                        border: "1px solid lightgrey",
                        p: 1,
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 0.5 }}
                      >
                        <InsertDriveFile color="action" sx={{ mr: 1 }} />
                        <Typography align="left" variant="subtitle2">
                          HomePage.tsx
                        </Typography>
                      </Box>
                      <Typography
                        align="left"
                        variant="caption"
                        component="div"
                      >
                        1.2 KB (74%)
                      </Typography>
                      <Typography
                        align="left"
                        variant="caption"
                        component="div"
                      >
                        350 tokens
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
        <Button
          variant="contained"
          startIcon={<ContentCopy />}
          fullWidth
          sx={{ mt: 1 }}
        >
          Copy Prompt (~1k tokens)
        </Button>
      </Box>
    </Box>
  );
}
