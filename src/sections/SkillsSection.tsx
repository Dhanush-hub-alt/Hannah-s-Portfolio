"use client";

import React from "react";
import { skillCategories } from "@/data/portfolio";
import { SectionHeader } from "@/components/SectionHeader";
import { Code, Database, Cpu, Wrench } from "lucide-react";

export function SkillsSection() {
  const categoryIcons = [Code, Database, Cpu, Wrench];

  return (
    <section id="skills" className="py-20 lg:py-24 relative bg-theme-bg border-t border-theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Exact Section Title Centered Matching Navbar */}
        <SectionHeader title="Skills" />

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = categoryIcons[index % categoryIcons.length];

            return (
              <div
                key={category.title}
                className="p-6 sm:p-7 rounded-3xl bg-theme-surface border border-theme-border hover:border-theme-accent transition-all duration-200 flex flex-col justify-between shadow-sm"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-theme-surfaceSecondary border border-theme-border text-theme-accent flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-theme-primary">
                        {category.title}
                      </h3>
                      <p className="text-xs text-theme-muted mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Tag Cloud */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                          skill.highlight
                            ? "bg-theme-accent/10 border border-theme-accent text-theme-accent font-bold"
                            : "bg-theme-surfaceSecondary border border-theme-border text-theme-secondary hover:text-theme-primary"
                        }`}
                      >
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-theme-accent" />
                        )}
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-theme-border flex items-center justify-between text-[11px] text-theme-muted font-mono">
                  <span>{category.skills.length} competencies</span>
                  <span className="text-theme-accent font-semibold">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills */}
        <div className="mt-8 p-6 rounded-3xl bg-theme-surface border border-theme-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div>
            <h4 className="text-base font-bold text-theme-primary">
              Core Methodologies &amp; Attributes
            </h4>
            <p className="text-xs text-theme-muted mt-0.5">
              Disciplined problem solving and engineering collaboration
            </p>
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
                className="px-3 py-1.5 rounded-lg bg-theme-surfaceSecondary border border-theme-border text-xs font-medium text-theme-primary"
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
