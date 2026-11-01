"use client";

import React from "react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import { ArrowDown, Download, Sparkles, MapPin, GraduationCap, ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background Radial Glow & Soft Ambient Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-brand-indigo/15 via-brand-violet/10 to-brand-cyan/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Identity & CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Introductory Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-indigo/10 border border-brand-indigo/25 text-brand-cyan text-xs font-semibold tracking-wider uppercase mb-5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              <span>HELLO, I&apos;M</span>
            </div>

            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-text-primary leading-[1.08]">
              Hannah <span className="bg-gradient-to-r from-brand-indigo via-brand-violet to-brand-cyan bg-clip-text text-transparent">K</span>
            </h1>

            {/* Professional Subheading */}
            <div className="mt-3 flex items-center gap-2 text-sm sm:text-base font-semibold text-brand-violet">
              <span>Computer Science and Engineering Student</span>
              <span className="text-text-muted">•</span>
              <span className="text-text-secondary">Nandha College of Technology</span>
            </div>

            {/* Core Value Headline */}
            <p className="mt-6 text-2xl sm:text-3xl font-bold tracking-tight text-text-primary leading-snug">
              {personalInfo.headline}
            </p>

            {/* Supporting Description */}
            <p className="mt-4 text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl font-normal">
              {personalInfo.shortBio}
            </p>

            {/* Location & Academic Details Meta */}
            <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-text-muted font-medium">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-brand-violet" />
                <span>Academic Period: {personalInfo.institutionPeriod}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-indigo via-brand-violet to-brand-cyan hover:opacity-95 transition-all shadow-indigo-glow flex items-center gap-2 group active:scale-95"
              >
                <span>Explore My Work</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Hannah_K_Resume.pdf"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-text-primary bg-bg-card hover:bg-bg-elevated border border-border-subtle hover:border-brand-indigo/40 transition-all flex items-center gap-2 active:scale-95 group shadow-sm"
              >
                <Download className="w-4 h-4 text-brand-cyan group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Actual Professional Photograph Frame (5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-brand-indigo/40 via-brand-violet/30 to-brand-cyan/30 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity" />

              {/* Main Photo Card Frame */}
              <div className="relative rounded-3xl bg-bg-card border border-white/10 p-2.5 shadow-2xl backdrop-blur-md overflow-hidden">
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-bg-secondary">
                  <Image
                    src={personalInfo.profileImage}
                    alt="Hannah K - Computer Science and Engineering Student"
                    fill
                    priority
                    className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-w-768px) 100vw, 400px"
                  />
                  {/* Subtle bottom gradient tint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-main/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Overlay Badge: Academic Institution */}
                <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-xl bg-bg-main/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-brand-cyan font-semibold">
                      Candidate Profile
                    </div>
                    <div className="text-xs font-bold text-text-primary mt-0.5">
                      B.E. Computer Science
                    </div>
                    <div className="text-[11px] text-text-muted">
                      Nandha College of Technology
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-brand-indigo/20 border border-brand-indigo/40 flex items-center justify-center text-brand-cyan">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-xs font-mono uppercase tracking-widest text-text-muted hover:text-brand-cyan transition-colors"
            aria-label="Scroll to About section"
          >
            <span>Scroll Down</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
