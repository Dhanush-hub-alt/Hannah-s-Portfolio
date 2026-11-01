"use client";

import React, { useState } from "react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import { CS3DCore } from "@/components/CS3DCore";
import { ArrowDown, Download, MapPin, GraduationCap, ChevronRight, Sparkles, Terminal } from "lucide-react";

export function HeroSection() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setTilt({ x: x * 10, y: -y * 10 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-[#080B0E]"
    >
      {/* Background Technical Grid & Spotify/HackerRank Green Ambient Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-[#00EA64]/[0.08] blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#1DB954]/[0.05] blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Identity, Value Proposition & CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Introductory Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00EA64]/10 border border-[#00EA64]/30 text-[#00EA64] text-[11px] font-mono tracking-widest uppercase mb-5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#00EA64] animate-pulse" />
              <span>HELLO, I&apos;M</span>
            </div>

            {/* Main Name Heading with HackerRank Green Accent */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.06]">
              Hannah <span className="text-[#00EA64]">K</span>
            </h1>

            {/* Professional Subheading */}
            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm sm:text-base font-semibold text-slate-300">
              <span className="text-[#00EA64]">Computer Science and Engineering Student</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">Nandha College of Technology</span>
            </div>

            {/* Core Value Headline */}
            <p className="mt-6 text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
              {personalInfo.headline}
            </p>

            {/* Supporting Description */}
            <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl font-normal">
              {personalInfo.shortBio}
            </p>

            {/* Location & Academic Details Meta */}
            <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#00EA64]" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5 text-[#00EA64]" />
                <span>Academic Period: {personalInfo.institutionPeriod}</span>
              </div>
            </div>

            {/* Action Buttons in Spotify/HackerRank Signature Green */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-[#080B0E] bg-[#00EA64] hover:bg-[#1ED760] transition-all shadow-green-btn flex items-center gap-2 group active:scale-95"
              >
                <span>Explore My Work</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Hannah_K_Resume.pdf"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-[#0D1217] hover:bg-[#131922] border border-[#00EA64]/30 hover:border-[#00EA64] transition-all flex items-center gap-2 active:scale-95 group"
              >
                <Download className="w-4 h-4 text-[#00EA64] group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: New Circular Profile with White Background + 3D Interactive CS Core */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6">
            
            {/* New Replaced Profile Photo: Circle with White Background and NO TEXT */}
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
              }}
            >
              {/* Outer Ambient HackerRank Green Halo */}
              <div className="absolute -inset-4 rounded-full bg-[#00EA64]/20 blur-2xl pointer-events-none" />

              {/* Circular Framing Container with Green Ring */}
              <div className="relative p-2 rounded-full border border-[#00EA64]/40 bg-[#0D1217]/80 backdrop-blur-md shadow-[0_0_40px_rgba(0,234,100,0.25)]">
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden bg-white border-2 border-white ring-4 ring-[#00EA64]/30 shadow-2xl">
                  <Image
                    src={personalInfo.profileImage}
                    alt="Hannah K - Computer Science and Engineering Student"
                    fill
                    priority
                    className="object-cover object-top scale-105 hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 250px, 320px"
                  />
                </div>
              </div>
            </div>

            {/* 3D Computer Science & Engineering Interactive Effect */}
            <div className="w-full">
              <CS3DCore />
            </div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 hover:text-[#00EA64] transition-colors"
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
