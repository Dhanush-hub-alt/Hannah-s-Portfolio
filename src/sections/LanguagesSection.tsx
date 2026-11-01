"use client";

import React from "react";
import { languages } from "@/data/portfolio";
import { SectionHeader } from "@/components/SectionHeader";
import { Languages, Check } from "lucide-react";

export function LanguagesSection() {
  return (
    <section id="languages" className="py-20 lg:py-24 relative bg-[#080B0E] border-t border-[#00EA64]/20">
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
              className="p-6 rounded-2xl bg-[#16202C] border border-[#00EA64]/20 hover:border-[#00EA64]/60 transition-all duration-300 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00EA64]/15 text-[#00EA64] flex items-center justify-center font-bold">
                    <Languages className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#080B0E] bg-[#00EA64] font-bold px-2 py-0.5 rounded shadow-sm">
                    {item.proficiency}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white tracking-tight">
                  {item.language}
                </h3>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="font-medium text-slate-300">Fluency Level</span>
                <span className="font-semibold text-[#00EA64] flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-[#00EA64]" />
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
