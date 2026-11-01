import React from "react";
import { Navbar } from "@/components/Navbar";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { CustomCursor } from "@/components/CustomCursor";
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
    <main className="relative min-h-screen bg-bg-main text-text-primary selection:bg-brand-indigo/30 selection:text-text-primary">
      {/* Scroll Reading Progress Bar at the top */}
      <ScrollProgressBar />

      {/* Desktop Precision Custom Cursor */}
      <CustomCursor />

      {/* Sticky Premium Navigation */}
      <Navbar />

      {/* Section 01: Immersive Hero Section */}
      <HeroSection />

      {/* Section 02: About Me */}
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

      {/* Section 11: Premium Footer */}
      <FooterSection />
    </main>
  );
}
