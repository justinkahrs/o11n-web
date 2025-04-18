"use client";
import type React from "react";
import { useEffect, createContext, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "../theme";
import Lenis from "lenis";

export const LenisContext = createContext<Lenis | null>(null);
export const ThemeContext = createContext<{
  onThemeChange: (
    primary: string,
    secondary: string,
    mode: "light" | "dark"
  ) => void;
} | null>(null);

export default function Providers({ children }: { children: React.ReactNode }) {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);
  const [currentTheme, setCurrentTheme] = useState(theme);
  const onThemeChange = (
    primary: string,
    secondary: string,
    mode: "light" | "dark"
  ) => {
    setCurrentTheme((prevTheme) =>
      createTheme({
        typography: prevTheme.typography,
        palette: {
          mode,
          primary: { main: primary },
          secondary: { main: secondary },
        },
      })
    );
  };

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      touchMultiplier: 2,
      infinite: false,
    });
    setLenisInstance(lenis);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <LenisContext.Provider value={lenisInstance}>
      <ThemeContext.Provider value={{ onThemeChange }}>
        <ThemeProvider theme={currentTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    </LenisContext.Provider>
  );
}
