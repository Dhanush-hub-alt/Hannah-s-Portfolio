"use client";

import React from "react";
import { languages } from "@/data/portfolio";
import { SectionHeader } from "@/components/SectionHeader";
import { Languages, Check } from "lucide-react";

export function LanguagesSection() {
  return (
    <section id="languages" className="py-20 lg:py-24 relative bg-bg-secondary/40 border-y border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="MULTILINGUAL PROFICIENCY"
          title="Linguistic"
          highlight="Fluency"
          description="Proficiencies supporting professional communication, collaborative coordination, and global outlook."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {languages.map((item) => (
            <div
              key={item.language}
              className="p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-brand-cyan/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-cyan/15 text-brand-cyan flex items-center justify-center">
                    <Languages className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-brand-cyan px-2 py-0.5 rounded bg-brand-cyan/10 border border-brand-cyan/20">
                    {item.proficiency}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-text-primary tracking-tight">
                  {item.language}
                </h3>
              </div>

              <div className="mt-5 pt-3 border-t border-border-subtle flex items-center justify-between text-xs text-text-muted">
                <span className="font-medium text-text-secondary">Fluency Level</span>
                <span className="font-semibold text-brand-cyan flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
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
