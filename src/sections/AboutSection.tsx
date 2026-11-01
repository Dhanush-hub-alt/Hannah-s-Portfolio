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
        "Active commitment to self-directed growth, earning Elite NPTEL certifications and multiple HackerRank skill endorsements.",
      tag: "Continuous Growth",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative bg-black border-t border-[#00EA64]/20 overflow-hidden">
      
      {/* Background Architectural Artwork: Uploaded Exploded Hardware & Orchestration in the Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-10">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="IDENTITY & TRAJECTORY"
          title="About"
          highlight="Hannah K"
          description="A Computer Science and Engineering student focused on building practical, dependable technology solutions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Editorial Text (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-[#A7F3D0] leading-relaxed text-base sm:text-lg">
            {personalInfo.aboutParagraphs.map((para, index) => (
              <p key={index} className="font-normal text-white/90">
                {para}
              </p>
            ))}

            {/* Quick Facts Strip in Pure Black & Green */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-black border border-[#00EA64]/30">
                <span className="text-[10px] font-mono uppercase text-[#00EA64] tracking-wider font-bold">Degree Target</span>
                <div className="text-sm font-bold text-white mt-1">B.E. Computer Science</div>
                <div className="text-xs text-[#A7F3D0] mt-0.5 font-mono">2023 – 2027</div>
              </div>

              <div className="p-4 rounded-2xl bg-black border border-[#00EA64]/30">
                <span className="text-[10px] font-mono uppercase text-[#00EA64] tracking-wider font-bold">Base Location</span>
                <div className="text-sm font-bold text-white mt-1">Erode, Tamil Nadu</div>
                <div className="text-xs text-[#A7F3D0] mt-0.5">India</div>
              </div>

              <div className="p-4 rounded-2xl bg-black border border-[#00EA64]/30 col-span-2 sm:col-span-1">
                <span className="text-[10px] font-mono uppercase text-[#00EA64] tracking-wider font-bold">Recognition</span>
                <div className="text-sm font-bold text-white mt-1">Best Performer</div>
                <div className="text-xs text-[#A7F3D0] mt-0.5 font-mono">Year 2025 Awardee</div>
              </div>
            </div>
          </div>

          {/* Right Highlights Cards in Pure Black & Green (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-black border border-[#00EA64]/25 hover:border-[#00EA64] transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-black border border-[#00EA64]/30 text-[#00EA64] group-hover:bg-[#00EA64] group-hover:text-black transition-colors flex items-center justify-center font-bold">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black border border-[#00EA64]/30 text-[#00EA64] font-bold">
                      {pillar.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A7F3D0] mt-1.5 leading-relaxed">
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
