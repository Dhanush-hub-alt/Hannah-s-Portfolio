"use client";

import React from "react";
import { trainingWorkshops } from "@/data/portfolio";
import { SectionHeader } from "@/components/SectionHeader";
import { Shield, Box, Code, Laptop, Building2 } from "lucide-react";

export function TrainingSection() {
  const icons = [Shield, Box, Code, Laptop];

  return (
    <section id="training" className="py-20 lg:py-24 relative bg-theme-bg border-t border-theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Exact Section Title Centered Matching Navbar */}
        <SectionHeader title="Training" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {trainingWorkshops.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={item.id}
                className="p-6 sm:p-7 rounded-3xl bg-theme-surface border border-theme-border hover:border-theme-accent transition-all duration-200 flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-theme-surfaceSecondary border border-theme-border text-theme-accent flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-theme-accent uppercase tracking-wider px-2 py-0.5 rounded bg-theme-surfaceSecondary border border-theme-border font-bold">
                      Completed
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-theme-primary group-hover:text-theme-accent transition-colors font-display">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 mt-2 text-xs font-semibold text-theme-accent">
                    <Building2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.institution}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-theme-secondary mt-2.5 leading-relaxed">
                    {item.focus}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-theme-border flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-theme-surfaceSecondary text-theme-secondary border border-theme-border"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
