"use client";

import React from "react";
import { languages } from "@/data/portfolio";
import { SectionHeader } from "@/components/SectionHeader";
import { Languages, Check } from "lucide-react";

export function LanguagesSection() {
  return (
    <section id="languages" className="py-20 lg:py-24 relative bg-zinc-950 border-t border-white/10">
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
              className="p-6 rounded-2xl bg-zinc-900 border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center">
                    <Languages className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-black bg-white font-bold px-2 py-0.5 rounded">
                    {item.proficiency}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white tracking-tight">
                  {item.language}
                </h3>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-zinc-500">
                <span className="font-medium text-zinc-400">Fluency Level</span>
                <span className="font-semibold text-white flex items-center gap-1">
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
