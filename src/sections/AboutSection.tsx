"use client";

import React from "react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import { SectionHeader } from "@/components/SectionHeader";
import { Code2, Cpu, BookOpen, Layers, CheckCircle2, Sparkles, HardDrive } from "lucide-react";

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
    <section id="about" className="py-20 lg:py-28 relative bg-[#0D1217] border-t border-[#00EA64]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="IDENTITY & TRAJECTORY"
          title="About"
          highlight="Hannah K"
          description="A Computer Science and Engineering student focused on building practical, dependable technology solutions."
        />

        {/* First Row: Editorial Overview & Quick Facts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Editorial Text (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base sm:text-lg">
            {personalInfo.aboutParagraphs.map((para, index) => (
              <p key={index} className="font-normal">
                {para}
              </p>
            ))}

            {/* Quick Facts Strip */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-[#16202C] border border-[#00EA64]/20">
                <span className="text-[10px] font-mono uppercase text-[#00EA64] tracking-wider font-bold">Degree Target</span>
                <div className="text-sm font-bold text-white mt-1">B.E. Computer Science</div>
                <div className="text-xs text-slate-400 mt-0.5 font-mono">2023 – 2027</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#16202C] border border-[#00EA64]/20">
                <span className="text-[10px] font-mono uppercase text-[#00EA64] tracking-wider font-bold">Base Location</span>
                <div className="text-sm font-bold text-white mt-1">Erode, Tamil Nadu</div>
                <div className="text-xs text-slate-400 mt-0.5">India</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#16202C] border border-[#00EA64]/20 col-span-2 sm:col-span-1">
                <span className="text-[10px] font-mono uppercase text-[#00EA64] tracking-wider font-bold">Recognition</span>
                <div className="text-sm font-bold text-white mt-1">Best Performer</div>
                <div className="text-xs text-slate-400 mt-0.5 font-mono">Year 2025 Awardee</div>
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
                  className="p-5 rounded-2xl bg-[#16202C] border border-[#00EA64]/20 hover:border-[#00EA64]/50 transition-all duration-300 group shadow-sm hover:shadow-[0_0_20px_rgba(0,234,100,0.15)]"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-[#00EA64]/15 text-[#00EA64] group-hover:bg-[#00EA64] group-hover:text-[#080B0E] transition-colors flex items-center justify-center font-bold">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#080B0E] border border-[#00EA64]/20 text-[#00EA64]">
                      {pillar.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Second Row: Visual Showcase Cards with Uploaded Computer Engineering Imagery */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Hardware & Physical Computing (Exploded Laptop) */}
          <div className="rounded-3xl bg-[#16202C] border border-[#00EA64]/20 overflow-hidden hover:border-[#00EA64]/50 transition-all duration-300 group flex flex-col justify-between">
            <div className="relative aspect-[4/3] w-full bg-black overflow-hidden">
              <Image
                src="/images/hardware_exploded_laptop.jpg"
                alt="Computer Engineering Hardware Exploded View"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16202C] via-transparent to-transparent" />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#080B0E]/85 border border-[#00EA64]/30 text-[#00EA64] text-[10px] font-mono font-bold">
                PHYSICAL COMPUTING
              </div>
            </div>
            <div className="p-5">
              <h4 className="text-base font-bold text-white">
                Hardware &amp; Architecture
              </h4>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                Hands-on understanding of low-level microarchitectures, board-level peripherals, and sensor interfaces from ESP32 to single-board computers.
              </p>
            </div>
          </div>

          {/* Card 2: AI & Human-Machine Convergence */}
          <div className="rounded-3xl bg-[#16202C] border border-[#00EA64]/20 overflow-hidden hover:border-[#00EA64]/50 transition-all duration-300 group flex flex-col justify-between">
            <div className="relative aspect-[4/3] w-full bg-black overflow-hidden">
              <Image
                src="/images/ai_human_robot_hand.jpg"
                alt="AI and Human Technology Convergence"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16202C] via-transparent to-transparent" />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#080B0E]/85 border border-[#00EA64]/30 text-[#00EA64] text-[10px] font-mono font-bold">
                APPLIED AI &amp; ROBOTICS
              </div>
            </div>
            <div className="p-5">
              <h4 className="text-base font-bold text-white">
                Intelligent Edge Systems
              </h4>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                Bridging human safety decisions with autonomous sensor fusion algorithms, high-frequency mmWave radar, and real-time inference.
              </p>
            </div>
          </div>

          {/* Card 3: Algorithmic Orchestration */}
          <div className="rounded-3xl bg-[#16202C] border border-[#00EA64]/20 overflow-hidden hover:border-[#00EA64]/50 transition-all duration-300 group flex flex-col justify-between">
            <div className="relative aspect-[4/3] w-full bg-black overflow-hidden">
              <Image
                src="/images/cyber_marionette_orchestration.jpg"
                alt="Algorithmic Control & Software Orchestration"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16202C] via-transparent to-transparent" />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#080B0E]/85 border border-[#00EA64]/30 text-[#00EA64] text-[10px] font-mono font-bold">
                SOFTWARE CONTROL
              </div>
            </div>
            <div className="p-5">
              <h4 className="text-base font-bold text-white">
                Algorithmic Orchestration
              </h4>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                Deterministic control logic, multi-threaded state machines, and synchronized data pipelines built across C++, Python, and Java.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
