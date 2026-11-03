"use client";

import React from "react";
import { trainingWorkshops } from "@/data/portfolio";
import { SectionHeader } from "@/components/SectionHeader";
import { Shield, Box, Code, Laptop, Building2 } from "lucide-react";

export function TrainingSection() {
  const icons = [Shield, Box, Code, Laptop];

  return (
    <section
      id="training"
      className="min-h-screen flex flex-col justify-center pt-20 pb-8 sm:pt-24 sm:pb-12 relative bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Exact Section Title Centered Matching Navbar */}
        <SectionHeader title="Training" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-8">
          {trainingWorkshops.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={item.id}
                className="p-7 sm:p-8 rounded-3xl bg-theme-surface border border-theme-border hover:border-theme-accent transition-all duration-300 flex flex-col justify-between group shadow-card hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-theme-surfaceSecondary border border-theme-border text-theme-accent flex items-center justify-center font-bold shadow-subtle group-hover:bg-theme-accent group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] text-theme-accent uppercase tracking-wider px-2.5 py-1 rounded-full bg-theme-accent/10 border border-theme-accent/30 font-bold">
                      Completed
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-theme-primary group-hover:text-theme-accent transition-colors">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 mt-2 text-xs font-semibold text-theme-accent">
                    <Building2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.institution}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-theme-secondary mt-3 leading-relaxed">
                    {item.focus}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-theme-border flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-lg bg-theme-surfaceSecondary text-theme-secondary border border-theme-border font-medium"
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
