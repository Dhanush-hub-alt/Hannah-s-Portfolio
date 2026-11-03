import React from "react";
import { Navbar } from "@/components/Navbar";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { StarfieldBackground } from "@/components/StarfieldBackground";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { EducationSection } from "@/sections/EducationSection";
import { CertificationsSection } from "@/sections/CertificationsSection";
import { TrainingSection } from "@/sections/TrainingSection";
import { AchievementsSection } from "@/sections/AchievementsSection";
import { LanguagesSection } from "@/sections/LanguagesSection";
import { ContactSection } from "@/sections/ContactSection";
import { FooterSection } from "@/sections/FooterSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-theme-bg text-theme-primary selection:bg-theme-accent selection:text-white transition-colors duration-200">
      {/* 3D Visual Starfield Background */}
      <StarfieldBackground />

      {/* Scroll Reading Progress Bar */}
      <ScrollProgressBar />

      {/* Static Fixed Top Navigation with modern 'H' brand logo */}
      <Navbar />

      {/* Section 01: Hero with circular profile photo & effective border */}
      <HeroSection />

      {/* Section 02: About Me with structured engineering domains and academic profile */}
      <AboutSection />

      {/* Section 03: Technical Skills & Expertise */}
      <SkillsSection />

      {/* Section 04: Selected Projects Showcase */}
      <ProjectsSection />

      {/* Section 05: Academic Journey / Education */}
      <EducationSection />

      {/* Section 06: Certifications & Continuous Learning */}
      <CertificationsSection />

      {/* Section 07: Training & Workshops */}
      <TrainingSection />

      {/* Section 08: Honors & Achievements */}
      <AchievementsSection />

      {/* Section 09: Linguistic Fluency */}
      <LanguagesSection />

      {/* Section 10: Contact & Collaboration */}
      <ContactSection />

      {/* Section 11: Footer */}
      <FooterSection />
    </main>
  );
}
