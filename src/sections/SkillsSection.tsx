"use client";

import React, { useState } from "react";
import { skillCategories } from "@/data/portfolio";
import { SectionHeader } from "@/components/SectionHeader";
import { Code, Database, Cpu, Wrench, CheckCircle } from "lucide-react";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const categoryIcons = [Code, Database, Cpu, Wrench];

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-bg-secondary/40 border-y border-border-subtle">
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
                className={`p-6 sm:p-7 rounded-3xl bg-bg-card border transition-all duration-300 flex flex-col justify-between ${
                  isHovered
                    ? "border-brand-indigo/50 shadow-card-glow translate-y-[-2px]"
                    : "border-border-subtle"
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-indigo/15 border border-brand-indigo/30 text-brand-cyan flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-text-primary">
                          {category.title}
                        </h3>
                        <p className="text-xs text-text-muted mt-0.5">
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
                            ? "bg-brand-indigo/15 border border-brand-indigo/35 text-text-primary hover:border-brand-cyan"
                            : "bg-bg-elevated border border-border-subtle text-text-secondary hover:text-text-primary hover:border-white/20"
                        }`}
                      >
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                        )}
                        <span>{skill.name}</span>
                        <span className="text-[10px] text-text-muted font-normal ml-1 border-l border-white/10 pl-1.5 hidden sm:inline">
                          {skill.categoryTag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom subtle note */}
                <div className="mt-6 pt-4 border-t border-border-subtle/80 flex items-center justify-between text-[11px] text-text-muted font-mono">
                  <span>{category.skills.length} verified technologies</span>
                  <span className="text-brand-violet flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Resume Documented
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills Section based on resume */}
        <div className="mt-12 p-6 sm:p-7 rounded-3xl bg-bg-elevated/70 border border-border-subtle">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-brand-cyan font-semibold">
                Professional Attributes & Soft Skills
              </span>
              <h4 className="text-base sm:text-lg font-bold text-text-primary mt-1">
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
                  className="px-3.5 py-1.5 rounded-lg bg-bg-card border border-border-subtle text-xs font-medium text-text-primary"
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
