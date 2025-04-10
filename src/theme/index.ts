import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: { default: "#162A2C" },
    mode: "dark",
    primary: {
      main: "#F39C6E",
    },
    secondary: {
      main: "#92AE79",
    },
  },
  typography: {
    fontFamily: "var(--font-jetbrains)",
  },
});

export default theme;
