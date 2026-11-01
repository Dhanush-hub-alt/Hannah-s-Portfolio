"use client";

import React, { useState } from "react";
import { skillCategories } from "@/data/portfolio";
import { SectionHeader } from "@/components/SectionHeader";
import { Code, Database, Cpu, Wrench, CheckCircle } from "lucide-react";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const categoryIcons = [Code, Database, Cpu, Wrench];

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-black border-t border-white/10">
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
                className={`p-6 sm:p-7 rounded-3xl bg-zinc-950 border transition-all duration-300 flex flex-col justify-between ${
                  isHovered
                    ? "border-white/40 shadow-[0_10px_30px_rgba(0,0,0,0.8)] -translate-y-1"
                    : "border-white/10"
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/15 text-white flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {category.title}
                        </h3>
                        <p className="text-xs text-zinc-500 mt-0.5">
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
                            ? "bg-white/10 border border-white/25 text-white hover:border-white/60"
                            : "bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
                        }`}
                      >
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        )}
                        <span>{skill.name}</span>
                        <span className="text-[10px] text-zinc-500 font-normal ml-1 border-l border-white/10 pl-1.5 hidden sm:inline">
                          {skill.categoryTag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom subtle note */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                  <span>{category.skills.length} verified technologies</span>
                  <span className="text-zinc-400 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-white" /> Resume Documented
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills Section based on resume */}
        <div className="mt-12 p-6 sm:p-7 rounded-3xl bg-zinc-950 border border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                Professional Attributes & Soft Skills
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white mt-1">
                Collaborative Discipline & Problem Solving
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
                  className="px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-white/10 text-xs font-medium text-zinc-300"
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
