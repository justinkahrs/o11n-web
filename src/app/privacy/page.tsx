import { Box, Container, Link, Button } from "@mui/material";
import ReactMarkdown from "react-markdown";
// @ts-expect-error unknown import type
import privacy from "./privacy.md?raw";
export default function Privacy() {
  console.log({ privacy });
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        minHeight: { xs: "calc(100vh - 64px)", md: "calc(100vh - 64px)" },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Button component={Link} href="/" variant="contained" sx={{ mb: 2 }}>
          Home
        </Button>
        <ReactMarkdown
          components={{
            h2: ({ children }) => (
              <h2 style={{ marginTop: "1em" }}>{children}</h2>
            ),
            p: ({ children }) => (
              <p style={{ marginBottom: "1em" }}>{children}</p>
            ),
            ul: ({ children }) => (
              <ul style={{ marginBottom: "1em" }}>{children}</ul>
            ),
            li: ({ children }) => <li style={{ margin: "1em" }}>{children}</li>,
          }}
        >
          {privacy}
        </ReactMarkdown>
      </Container>
    </Box>
  );
}