"use client";

import React from "react";
import { skillCategories } from "@/data/portfolio";
import { SectionHeader } from "@/components/SectionHeader";
import { Terminal, Cpu, Sparkles } from "lucide-react";

export function SkillsSection() {
  const categoryIcons = [Terminal, Cpu];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center pt-20 pb-8 sm:pt-24 sm:pb-12 relative bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Exact Section Title Centered Matching Navbar */}
        <SectionHeader title="Skills" />

        {/* Skill Category Cards Symmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => {
            const Icon = categoryIcons[index % categoryIcons.length];

            return (
              <div
                key={category.title}
                className="p-7 sm:p-8 rounded-3xl bg-theme-surface border border-theme-border hover:border-theme-accent transition-all duration-300 flex flex-col justify-between shadow-card hover:-translate-y-1 group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-theme-surfaceSecondary border border-theme-border text-theme-accent group-hover:bg-theme-accent group-hover:text-white transition-all flex items-center justify-center font-bold shadow-subtle">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-theme-primary group-hover:text-theme-accent transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-theme-muted mt-1 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid / Cloud - Uniform styling, black font, identical hover effect */}
                  <div className="flex flex-wrap gap-2.5 mt-6">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 bg-theme-surfaceSecondary border border-theme-border text-black dark:text-white hover:border-theme-accent hover:text-theme-accent transition-all duration-200 cursor-default shadow-sm"
                      >
                        <span className="font-bold text-black dark:text-white">
                          {skill.name}
                        </span>
                        <span className="text-[10px] text-theme-muted font-normal">
                          • {skill.categoryTag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Methodologies & Engineering Attributes - Uniform styling with black font */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-theme-surface border border-theme-border flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-card hover:border-theme-accent transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-theme-surfaceSecondary border border-theme-border text-theme-accent flex items-center justify-center font-bold shrink-0 shadow-subtle">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-theme-primary">
                Core Methodologies &amp; Attributes
              </h4>
              <p className="text-xs sm:text-sm text-theme-muted mt-0.5">
                Disciplined problem solving, structured software design, and engineering collaboration
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Data Structures",
              "Problem Solving",
              "Web Development",
              "System Architecture",
              "Team Work",
              "Communication",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-xl bg-theme-surfaceSecondary border border-theme-border text-xs sm:text-sm font-bold text-black dark:text-white hover:border-theme-accent hover:text-theme-accent transition-all duration-200 cursor-default shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
