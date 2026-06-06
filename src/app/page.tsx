import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeSection from "@/components/MarqueeSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResumeSection from "@/components/ResumeSection";
import Footer from "@/components/Footer";

/**
 * Main Page Component.
 * Integrates all section blocks in standard render order.
 */
export default function Page() {
  return (
    <main className="relative min-h-screen w-full bg-bg text-text">
      {/* Floating Pill Navbar */}
      <Navbar />

      {/* Hero Presentation Area */}
      <Hero />

      {/* Horizontal GIF scrolling marquee */}
      <MarqueeSection />

      {/* Biography and corner shapes */}
      <AboutSection />

      {/* Software Services cards */}
      <ServicesSection />

      {/* Sticky stacking projects */}
      <ProjectsSection />

      {/* Profile timeline: Education & Extracurriculars */}
      <ResumeSection />

      {/* Contacts and social blocks */}
      <Footer />
    </main>
  );
}
