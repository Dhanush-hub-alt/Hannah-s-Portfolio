"use client";

import React from "react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import { ArrowDown, Download, MapPin, GraduationCap, ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-32 pb-16 lg:pt-40 lg:pb-24 flex flex-col justify-center overflow-hidden bg-theme-bg"
    >
      {/* Background Architectural Artwork: Uploaded AI Robot Hand with subtle blending */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-10 dark:opacity-15">
        <Image
          src="/images/ai_human_robot_hand.jpg"
          alt="AI and Technology Synergy Background"
          fill
          priority
          className="object-cover object-right-top mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-theme-bg via-theme-bg/80 to-theme-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-theme-bg via-theme-bg/90 to-transparent" />
      </div>

      {/* Background Technical Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Identity & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Introductory Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-theme-surface border border-theme-border text-theme-accent text-xs font-mono tracking-widest uppercase mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-theme-accent animate-pulse" />
              <span>HELLO, I&apos;M</span>
            </div>

            {/* Main Name Heading with Electric Blue Accent */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-theme-primary font-display leading-[1.05]">
              Hannah <span className="text-theme-accent">K</span>
            </h1>

            {/* Professional Subheading */}
            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm sm:text-base font-bold text-theme-secondary">
              <span className="text-theme-accent">Computer Science and Engineering Student</span>
              <span className="text-theme-muted">•</span>
              <span className="text-theme-primary">Nandha College of Technology</span>
            </div>

            {/* Core Value Headline */}
            <p className="mt-5 text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-theme-primary leading-snug">
              {personalInfo.headline}
            </p>

            {/* Streamlined Description */}
            <p className="mt-4 text-sm sm:text-base text-theme-secondary leading-relaxed max-w-xl font-normal">
              {personalInfo.shortBio}
            </p>

            {/* Quick Meta: Location & Period */}
            <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-theme-muted font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-theme-accent" />
                <span className="text-theme-primary font-medium">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5 text-theme-accent" />
                <span className="text-theme-primary font-medium">{personalInfo.institutionPeriod}</span>
              </div>
            </div>

            {/* Action Buttons in Arctic Blue */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-full font-bold text-sm text-white bg-theme-accent hover:bg-theme-accentHover transition-all flex items-center gap-2 shadow-sm active:scale-95"
              >
                <span>Explore Work</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Hannah_K_Resume.pdf"
                className="px-7 py-3.5 rounded-full font-bold text-sm text-theme-primary bg-theme-surface hover:bg-theme-surfaceSecondary border border-theme-border transition-all flex items-center gap-2 shadow-sm active:scale-95"
              >
                <Download className="w-4 h-4 text-theme-accent" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Prominent Circular Profile Photo on Pure Studio White Background */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[380px] lg:h-[380px] xl:w-[420px] xl:h-[420px] rounded-full overflow-hidden bg-white shadow-card">
                <Image
                  src={personalInfo.profileImage}
                  alt="Hannah K - Computer Science and Engineering Student"
                  fill
                  priority
                  className="object-cover object-top scale-105 hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 384px, 420px"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-xs font-mono uppercase tracking-widest text-theme-muted hover:text-theme-accent transition-colors"
            aria-label="Scroll to About section"
          >
            <span>Scroll Down</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-theme-accent" />
          </a>
        </div>
      </div>
    </section>
  );
}
