"use client";

import React from "react";
import { personalInfo } from "@/data/portfolio";
import { SectionHeader } from "@/components/SectionHeader";
import { Terminal, Code2, Cpu, Sparkles, BookOpen, Layers } from "lucide-react";

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
        "Active commitment to self-directed growth, earning Elite NPTEL certifications and multiple HackerRank skill endorsements.",
      tag: "Continuous Growth",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="IDENTITY & TRAJECTORY"
          title="About"
          highlight="Hannah K"
          description="A Computer Science and Engineering student focused on building practical, dependable technology solutions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Editorial Text (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-text-secondary leading-relaxed text-base sm:text-lg">
            {personalInfo.aboutParagraphs.map((para, index) => (
              <p key={index} className="font-normal">
                {para}
              </p>
            ))}

            {/* Quick Facts Strip */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-bg-card border border-border-subtle">
                <span className="text-[10px] font-mono uppercase text-brand-cyan">Degree Target</span>
                <div className="text-sm font-bold text-text-primary mt-1">B.E. Computer Science</div>
                <div className="text-xs text-text-muted mt-0.5">Sep 2023 – May 2027</div>
              </div>

              <div className="p-3.5 rounded-xl bg-bg-card border border-border-subtle">
                <span className="text-[10px] font-mono uppercase text-brand-violet">Base Location</span>
                <div className="text-sm font-bold text-text-primary mt-1">Erode, Tamil Nadu</div>
                <div className="text-xs text-text-muted mt-0.5">India</div>
              </div>

              <div className="p-3.5 rounded-xl bg-bg-card border border-border-subtle col-span-2 sm:col-span-1">
                <span className="text-[10px] font-mono uppercase text-brand-indigo">Recognition</span>
                <div className="text-sm font-bold text-text-primary mt-1">Best Performer</div>
                <div className="text-xs text-text-muted mt-0.5">Year 2025 Awardee</div>
              </div>
            </div>
          </div>

          {/* Right Highlights Cards (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-bg-card border border-border-subtle hover:border-brand-indigo/40 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-brand-indigo/15 text-brand-indigo group-hover:bg-brand-indigo group-hover:text-white transition-colors flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-bg-elevated border border-white/5 text-brand-cyan">
                      {pillar.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-text-primary">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary mt-1.5 leading-relaxed">
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
