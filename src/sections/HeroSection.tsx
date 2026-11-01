"use client";

import React from "react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import { ArrowDown, Download, MapPin, GraduationCap, ChevronRight, Terminal } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Architectural Grid & Subtle Pure Light Illumination */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-white/[0.04] blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Identity & Typography (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Introductory Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-white text-[11px] font-mono tracking-widest uppercase mb-5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>HELLO, I&apos;M</span>
            </div>

            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.06]">
              Hannah <span className="text-zinc-500">K</span>
            </h1>

            {/* Professional Subheading */}
            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm sm:text-base font-semibold text-zinc-300">
              <span>Computer Science and Engineering Student</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-400">Nandha College of Technology</span>
            </div>

            {/* Core Value Headline */}
            <p className="mt-6 text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
              {personalInfo.headline}
            </p>

            {/* Supporting Description */}
            <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl font-normal">
              {personalInfo.shortBio}
            </p>

            {/* Location & Academic Details Meta */}
            <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-400 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-white" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5 text-zinc-300" />
                <span>Academic Period: {personalInfo.institutionPeriod}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-black bg-white hover:bg-zinc-200 transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] flex items-center gap-2 group active:scale-95"
              >
                <span>Explore My Work</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Hannah_K_Resume.pdf"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-zinc-950 hover:bg-zinc-900 border border-white/20 hover:border-white/50 transition-all flex items-center gap-2 active:scale-95 group"
              >
                <Download className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Candidates Profile Photo - Circular with Pure White Background and NO TEXT */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              
              {/* Outer Ambient White Glow Ring */}
              <div className="absolute -inset-4 rounded-full bg-white/[0.06] blur-2xl pointer-events-none" />

              {/* Circular Framing Container with precision rings */}
              <div className="relative p-2 rounded-full border border-white/20 bg-zinc-950/60 backdrop-blur-md shadow-2xl">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-white border border-white/30 ring-4 ring-white/10 shadow-[0_0_40px_rgba(0,0,0,0.9)]">
                  <Image
                    src={personalInfo.profileImage}
                    alt="Hannah K - Computer Science and Engineering Student"
                    fill
                    priority
                    className="object-cover object-[center_20%] scale-105 hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 320px, 400px"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
            aria-label="Scroll to About section"
          >
            <span>Scroll Down</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-zinc-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
