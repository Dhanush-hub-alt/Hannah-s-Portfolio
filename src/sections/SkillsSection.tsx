"use client";

import React, { useState } from "react";
import { skillCategories } from "@/data/portfolio";
import { SectionHeader } from "@/components/SectionHeader";
import { Code, Database, Cpu, Wrench, CheckCircle } from "lucide-react";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const categoryIcons = [Code, Database, Cpu, Wrench];

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-[#080B0E] border-t border-[#00EA64]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="TECHNICAL COMPETENCIES"
          title="Technical"
          highlight="Expertise"
          description="Curated skills, languages, developer toolsets, and embedded hardware technologies supported by active coursework and project implementation."
        />

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = categoryIcons[index % categoryIcons.length];
            const isHovered = activeCategory === index;

            return (
              <div
                key={category.title}
                onMouseEnter={() => setActiveCategory(index)}
                onMouseLeave={() => setActiveCategory(null)}
                className={`p-6 sm:p-7 rounded-3xl bg-[#16202C] border transition-all duration-300 flex flex-col justify-between ${
                  isHovered
                    ? "border-[#00EA64] shadow-[0_10px_30px_rgba(0,234,100,0.15)] -translate-y-1"
                    : "border-[#00EA64]/20"
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#00EA64]/15 border border-[#00EA64]/30 text-[#00EA64] flex items-center justify-center font-bold">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {category.title}
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Skills Tag Cloud */}
                  <div className="flex flex-wrap gap-2.5 mt-5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                          skill.highlight
                            ? "bg-[#00EA64]/15 border border-[#00EA64]/40 text-white hover:border-[#00EA64]"
                            : "bg-[#0D1217] border border-white/10 text-slate-300 hover:text-white hover:border-[#00EA64]/30"
                        }`}
                      >
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00EA64]" />
                        )}
                        <span>{skill.name}</span>
                        <span className="text-[10px] text-slate-400 font-normal ml-1 border-l border-white/10 pl-1.5 hidden sm:inline">
                          {skill.categoryTag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom subtle note */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>{category.skills.length} verified technologies</span>
                  <span className="text-[#00EA64] flex items-center gap-1 font-semibold">
                    <CheckCircle className="w-3 h-3 text-[#00EA64]" /> Resume Documented
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills Section based on resume */}
        <div className="mt-12 p-6 sm:p-7 rounded-3xl bg-[#16202C] border border-[#00EA64]/20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#00EA64] font-semibold">
                Professional Attributes &amp; Soft Skills
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white mt-1">
                Collaborative Discipline &amp; Problem Solving
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Data Structures",
                "Problem Solving",
                "Web Development",
                "Team Work",
                "Communication",
              ].map((item) => (
                <span
                  key={item}
                  className="px-3.5 py-1.5 rounded-lg bg-[#0D1217] border border-[#00EA64]/20 text-xs font-medium text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
