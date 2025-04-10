"use client";
import type React from "react";
import { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { LenisContext } from "../Providers";
type AnimatedStepProps = {
  children: React.ReactNode;
  offset: number;
};
const AnimatedStep = ({ children, offset }: AnimatedStepProps) => {
  const lenis = useContext(LenisContext);
  const ref = useRef<HTMLDivElement>(null);
  const [animProgress, setAnimProgress] = useState(0);
  useEffect(() => {
    if (!lenis) return;
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        let progress = (window.innerHeight - rect.top) / window.innerHeight;
        progress = Math.max(0, Math.min(progress, 1));
        const effectiveProgress = Math.min(progress, 0.5);
        setAnimProgress(effectiveProgress);
      }
    };
    lenis.on("scroll", handleScroll);
    // Initial check in case element is already in view
    handleScroll();
    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, [lenis]);
  const factor = animProgress / 0.5; // scales from 0 to 1
  const xValue = offset * (1 - factor);
  const opacityValue = factor;
  return (
    <motion.div ref={ref} style={{ x: xValue, opacity: opacityValue }}>
      {children}
    </motion.div>
  );
};
export default AnimatedStep;
