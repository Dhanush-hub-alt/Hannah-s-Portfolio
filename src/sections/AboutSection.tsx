"use client";

import React from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Code2, Cpu, BookOpen, Layers, GraduationCap, MapPin, Award } from "lucide-react";

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
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center pt-20 pb-8 sm:pt-24 sm:pb-12 relative bg-transparent overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        
        {/* Exact Section Title Centered Matching Navbar with Hover Effect */}
        <SectionHeader title="About" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Academic & Technical Profile Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-theme-surface border border-theme-border shadow-card hover:border-theme-accent transition-all duration-300">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-surfaceSecondary text-theme-accent text-xs font-bold uppercase tracking-wider mb-4">
                <span>Profile Overview</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-theme-primary leading-snug">
                Computer Science and Engineering Scholar
              </h3>
              
              <p className="mt-4 text-sm sm:text-base text-theme-secondary leading-relaxed">
                I am an engineering student at Nandha College of Technology (2023–2027), Erode, Tamil Nadu. My passion lies in engineering robust, reliable computational solutions that connect software algorithms with physical embedded sensors and clear business intelligence dashboards.
              </p>
            </div>

            {/* Structured Academic & Recognition Facts */}
            <div className="mt-8 pt-6 border-t border-theme-border/70 space-y-3">
              <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-theme-surfaceSecondary/60 transition-colors hover:bg-theme-surfaceSecondary">
                <div className="w-10 h-10 rounded-xl bg-theme-surface border border-theme-border text-theme-accent flex items-center justify-center shrink-0 font-bold">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-theme-muted font-semibold">Degree & Institution</div>
                  <div className="text-sm font-bold text-theme-primary">B.E. CSE • Nandha College of Technology (2023–2027)</div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-theme-surfaceSecondary/60 transition-colors hover:bg-theme-surfaceSecondary">
                <div className="w-10 h-10 rounded-xl bg-theme-surface border border-theme-border text-theme-accent flex items-center justify-center shrink-0 font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-theme-muted font-semibold">Location</div>
                  <div className="text-sm font-bold text-theme-primary">Erode, Tamil Nadu, India</div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-theme-surfaceSecondary/60 transition-colors hover:bg-theme-surfaceSecondary">
                <div className="w-10 h-10 rounded-xl bg-theme-surface border border-theme-border text-theme-accent flex items-center justify-center shrink-0 font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-theme-muted font-semibold">Academic Recognition</div>
                  <div className="text-sm font-bold text-theme-primary">Best Performer in Academics (2025)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 Grid of Engineering Pillars (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-theme-surface border border-theme-border hover:border-theme-accent transition-all duration-300 hover:-translate-y-1 group shadow-card flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-theme-surfaceSecondary text-theme-accent group-hover:bg-theme-accent group-hover:text-white transition-all flex items-center justify-center font-bold">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-theme-surfaceSecondary text-theme-accent">
                        {pillar.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-theme-primary group-hover:text-theme-accent transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-theme-secondary mt-2 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
