import {
  createTheme,
  type PaletteMode,
  type ThemeOptions,
} from "@mui/material/styles";
export function getDesignTokens(mode: PaletteMode): ThemeOptions {
  return {
    palette: {
      mode,
      background: {
        default: mode === "light" ? "#ffffff" : "#000000",
        paper: mode === "light" ? "#000" : "#fff",
      },
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
  };
}
const theme = createTheme(getDesignTokens("dark"));
export default theme;
