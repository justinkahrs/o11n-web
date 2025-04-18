"use client";

import React from "react";
import { Container } from "@mui/material";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import UseCasesSection from "./components/UseCasesSection";
import PersonalizationSection from "./components/PersonalizationSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CallToActionSection from "./components/CallToActionSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <Container>
      <HeroSection />
      <HowItWorks />
      <UseCasesSection />
      <PersonalizationSection />
      <TestimonialsSection />
      <CallToActionSection />
      <Footer />
    </Container>
  );
}
