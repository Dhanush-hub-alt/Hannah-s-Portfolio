import React from "react";
import { Navbar } from "@/components/Navbar";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
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
    <main className="relative min-h-screen bg-black text-white selection:bg-[#00EA64] selection:text-black">
      {/* Scroll Reading Progress Bar in Spotify/HackerRank Green */}
      <ScrollProgressBar />

      {/* Sticky Premium Navigation with modern 'H' brand logo */}
      <Navbar />

      {/* Section 01: Hero with new circular white-bg photo & 3D Computer Science Interactive Core */}
      <HeroSection />

      {/* Section 02: About Me with Computer Engineering Imagery (Exploded hardware, AI robotic hand, orchestration) */}
      <AboutSection />

      {/* Section 03: Technical Skills & Expertise */}
      <SkillsSection />

      {/* Section 04: Selected Projects Showcase with Related Visual Images & Interactive Pipeline */}
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
