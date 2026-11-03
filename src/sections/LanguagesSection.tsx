"use client";

import React from "react";
import { languages } from "@/data/portfolio";
import { SectionHeader } from "@/components/SectionHeader";
import { Languages, Check } from "lucide-react";

export function LanguagesSection() {
  return (
    <section
      id="languages"
      className="min-h-screen flex flex-col justify-center pt-20 pb-8 sm:pt-24 sm:pb-12 relative bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Exact Section Title Centered Matching Navbar */}
        <SectionHeader title="Languages" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {languages.map((item) => (
            <div
              key={item.language}
              className="p-7 rounded-3xl bg-theme-surface border border-theme-border hover:border-theme-accent transition-all duration-300 flex flex-col justify-between shadow-card hover:-translate-y-1 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-theme-surfaceSecondary border border-theme-border text-theme-accent group-hover:bg-theme-accent group-hover:text-white transition-all flex items-center justify-center font-bold shadow-subtle">
                    <Languages className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-theme-accent bg-theme-accent/10 border border-theme-accent/30 font-bold px-2.5 py-1 rounded-full">
                    {item.proficiency}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-theme-primary tracking-tight group-hover:text-theme-accent transition-colors">
                  {item.language}
                </h3>
              </div>

              <div className="mt-6 pt-4 border-t border-theme-border flex items-center justify-between text-xs text-theme-secondary">
                <span className="font-medium text-theme-muted">Proficiency</span>
                <span className="font-bold text-theme-accent flex items-center gap-1.5">
                  <Check className="w-4 h-4" />
                  {item.proficiency}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
