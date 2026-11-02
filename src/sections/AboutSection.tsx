"use client";

import React from "react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import { SectionHeader } from "@/components/SectionHeader";
import { Code2, Cpu, BookOpen, Layers } from "lucide-react";

export function AboutSection() {
  const pillars = [
    {
      icon: Code2,
      title: "Algorithmic Foundation",
      description:
        "Strong fundamentals in Data Structures, Object-Oriented design, and problem solving across Python, Java, C++, and C.",
      tag: "Core Science",
    },
    {
      icon: Cpu,
      title: "Applied System Prototyping",
      description:
        "Hands-on integration with 77 GHz mmWave radar, visibility sensors, ESP32, and Raspberry Pi for offline edge intelligence.",
      tag: "Hardware & Edge",
    },
    {
      icon: Layers,
      title: "Analytical Intelligence",
      description:
        "Transforming complex multi-dimensional health datasets into intuitive Power BI dashboards with tailored DAX measures.",
      tag: "Data & BI",
    },
    {
      icon: BookOpen,
      title: "Disciplined Learning",
      description:
        "Active commitment to self-directed growth, earning Elite NPTEL certifications and multiple HackerRank endorsements.",
      tag: "Continuous Growth",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-24 relative bg-theme-bg border-t border-theme-border overflow-hidden">
      
      {/* Background Architectural Artwork: Uploaded Exploded Hardware & Orchestration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 right-0 w-full sm:w-1/2 h-full">
          <Image
            src="/images/hardware_exploded_laptop.jpg"
            alt="Hardware Architecture Background Schematic"
            fill
            className="object-contain object-right-top mix-blend-luminosity"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full sm:w-1/3 h-1/2 opacity-60">
          <Image
            src="/images/cyber_marionette_orchestration.jpg"
            alt="Algorithmic Control Background Schematic"
            fill
            className="object-contain object-left-bottom mix-blend-luminosity"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-theme-bg via-transparent to-theme-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-theme-bg via-theme-bg/90 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Exact Section Title Centered Matching Navbar */}
        <SectionHeader title="About" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Streamlined Editorial Text (7 cols) */}
          <div className="lg:col-span-7 space-y-4 text-theme-secondary leading-relaxed text-sm sm:text-base">
            <p className="text-theme-primary font-medium text-base sm:text-lg">
              I am a Computer Science and Engineering student at Nandha College of Technology (2023–2027), Erode, Tamil Nadu.
            </p>
            <p>
              My focus centers on developing reliable, applied technical systems — bridging algorithms, edge IoT sensor fusion, and data visualization. I enjoy translating abstract computational concepts into working solutions for real-world engineering challenges.
            </p>

            {/* Quick Facts Strip */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-theme-surface border border-theme-border shadow-sm">
                <span className="text-[11px] font-mono uppercase text-theme-accent tracking-wider font-bold">Degree</span>
                <div className="text-sm font-bold text-theme-primary mt-1">B.E. Computer Science</div>
                <div className="text-xs text-theme-muted mt-0.5 font-mono">2023 – 2027</div>
              </div>

              <div className="p-4 rounded-2xl bg-theme-surface border border-theme-border shadow-sm">
                <span className="text-[11px] font-mono uppercase text-theme-accent tracking-wider font-bold">Location</span>
                <div className="text-sm font-bold text-theme-primary mt-1">Erode, Tamil Nadu</div>
                <div className="text-xs text-theme-muted mt-0.5">India</div>
              </div>

              <div className="p-4 rounded-2xl bg-theme-surface border border-theme-border shadow-sm col-span-2 sm:col-span-1">
                <span className="text-[11px] font-mono uppercase text-theme-accent tracking-wider font-bold">Recognition</span>
                <div className="text-sm font-bold text-theme-primary mt-1">Best Performer</div>
                <div className="text-xs text-theme-muted mt-0.5 font-mono">2025 Awardee</div>
              </div>
            </div>
          </div>

          {/* Right Highlights Cards (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-theme-surface border border-theme-border hover:border-theme-accent transition-all duration-200 group shadow-sm"
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="w-8 h-8 rounded-xl bg-theme-surfaceSecondary text-theme-accent group-hover:bg-theme-accent group-hover:text-white transition-colors flex items-center justify-center font-bold">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-theme-surfaceSecondary border border-theme-border text-theme-accent font-bold">
                      {pillar.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-theme-primary">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-theme-secondary mt-1 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
