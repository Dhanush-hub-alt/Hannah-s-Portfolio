"use client";

import React from "react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import { Download, MapPin, GraduationCap, ChevronRight } from "lucide-react";

export function HeroSection() {
 return (
 <section
 id="home"
 className="relative min-h-[85vh] pt-32 pb-16 lg:pt-40 lg:pb-20 flex flex-col justify-center overflow-hidden bg-theme-bg"
 >
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
 
 {/* Left Column: Identity & CTAs (7 cols) */}
 <div className="lg:col-span-7 flex flex-col items-start text-left">
 {/* Small Introductory Tag */}
 <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-theme-surface border border-theme-border text-theme-accent text-xs tracking-widest uppercase mb-4 shadow-subtle">
 <span className="w-2 h-2 rounded-full bg-theme-accent animate-pulse" />
 <span>HELLO, I&apos;M</span>
 </div>

 {/* Main Name Heading with Electric Blue Accent */}
 <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-theme-primary leading-[1.05]">
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
 <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-theme-muted">
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
 className="px-7 py-3.5 rounded-full font-bold text-sm text-white bg-theme-accent hover:bg-theme-accentHover transition-all flex items-center gap-2 shadow-subtle hover:scale-105 active:scale-95"
 >
 <span>Explore Work</span>
 <ChevronRight className="w-4 h-4" />
 </a>

 <a
 href={personalInfo.resumePath}
 download="Hannah_K_Resume.pdf"
 className="px-7 py-3.5 rounded-full font-bold text-sm text-theme-primary bg-theme-surface hover:bg-theme-surfaceSecondary border border-theme-border transition-all flex items-center gap-2 shadow-subtle hover:scale-105 active:scale-95"
 >
 <Download className="w-4 h-4 text-theme-accent" />
 <span>Download Resume</span>
 </a>
 </div>
 </div>

 {/* Right Column: Prominent Circular Profile Photo with Effective Border & Smooth Hover Effect */}
 <div className="lg:col-span-5 flex justify-center lg:justify-end">
 <div className="relative group cursor-pointer">
 {/* Effective Multi-Layer Border Ring */}
 <div className="p-2 sm:p-2.5 rounded-full bg-gradient-to-tr from-theme-accent via-theme-cyan to-theme-accent shadow-card transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
 {/* White Backdrop Circular Frame with Crisp Inner Separation */}
 <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-[320px] xl:h-[320px] rounded-full overflow-hidden bg-white border-2 border-theme-bg">
 <Image
 src={personalInfo.profileImage}
 alt="Hannah K - Computer Science and Engineering Student"
 fill
 priority
 className="object-cover object-top scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
 sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 320px"
 />
 </div>
 </div>
 </div>
 </div>

 </div>
 </div>
 </section>
 );
}
