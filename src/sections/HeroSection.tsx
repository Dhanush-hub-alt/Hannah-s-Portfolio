"use client";

import React from "react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import { CS3DCore } from "@/components/CS3DCore";
import { ArrowDown, Download, MapPin, GraduationCap, ChevronRight, Terminal } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-center overflow-hidden bg-black"
    >
      {/* Background Architectural Artwork: Uploaded AI Robot Hand in the Background itself */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-15">
        <Image
          src="/images/ai_human_robot_hand.jpg"
          alt="AI and Human Technology Synergy Background"
          fill
          priority
          className="object-cover object-right-top mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
      </div>

      {/* Background Technical Grid (Matte, No Glow) */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Main Hero Split: Identity (Left) & Enlarged Profile Photo (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Identity & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Introductory Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black border border-[#00EA64]/40 text-[#00EA64] text-xs font-mono tracking-widest uppercase mb-5">
              <span className="w-2 h-2 rounded-full bg-[#00EA64]" />
              <span>HELLO, I&apos;M</span>
            </div>

            {/* Main Name Heading with HackerRank Green Accent */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              Hannah <span className="text-[#00EA64]">K</span>
            </h1>

            {/* Professional Subheading */}
            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm sm:text-base font-bold text-[#A7F3D0]">
              <span className="text-[#00EA64]">Computer Science and Engineering Student</span>
              <span className="text-[#00EA64]/40">•</span>
              <span className="text-white">Nandha College of Technology</span>
            </div>

            {/* Core Value Headline */}
            <p className="mt-5 text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-snug">
              {personalInfo.headline}
            </p>

            {/* Supporting Description */}
            <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#A7F3D0] leading-relaxed max-w-2xl font-normal">
              {personalInfo.shortBio}
            </p>

            {/* Location & Academic Details Meta */}
            <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#00EA64] font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" />
                <span className="text-white">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5" />
                <span className="text-white">Academic Period: {personalInfo.institutionPeriod}</span>
              </div>
            </div>

            {/* Action Buttons in Solid HackerRank Green */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-full font-extrabold text-sm text-black bg-[#00EA64] hover:bg-[#10E56A] transition-colors flex items-center gap-2 border-none shadow-btn active:scale-95"
              >
                <span>Explore My Work</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Hannah_K_Resume.pdf"
                className="px-7 py-3.5 rounded-full font-bold text-sm text-white bg-black hover:bg-black/80 border-2 border-[#00EA64] hover:border-[#10E56A] transition-colors flex items-center gap-2 active:scale-95"
              >
                <Download className="w-4 h-4 text-[#00EA64]" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Prominent Large Circular Profile Photo with Natural White BG (NO Green Border) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Large Profile Image: 300px on mobile, 360px on tablet, 430px on desktop, pure white background, no green border */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[430px] xl:h-[430px] rounded-full overflow-hidden bg-white shadow-2xl">
                <Image
                  src={personalInfo.profileImage}
                  alt="Hannah K - Computer Science and Engineering Student"
                  fill
                  priority
                  className="object-cover object-top scale-105 hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 384px, 430px"
                />
              </div>
            </div>
          </div>

        </div>

        {/* 3D Computer Science Interactive Core in Proper Dedicated Position */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-[#00EA64]/20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#00EA64] font-bold">
                Computer Science &amp; Engineering 3D Interactive System
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                Real-Time 3D Computing Node &amp; Memory Matrix
              </h3>
            </div>
            <span className="text-xs font-mono text-[#A7F3D0] bg-black px-3 py-1 rounded-md border border-[#00EA64]/30">
              Interactive 3D Engine • Move Cursor Over Matrix
            </span>
          </div>

          {/* Responsive 3D Core Container */}
          <CS3DCore />
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00EA64] hover:text-white transition-colors"
            aria-label="Scroll to About section"
          >
            <span>Scroll Down</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#00EA64]" />
          </a>
        </div>
      </div>
    </section>
  );
}
