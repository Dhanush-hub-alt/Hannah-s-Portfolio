"use client";

import React from "react";
import { trainingWorkshops } from "@/data/portfolio";
import { SectionHeader } from "@/components/SectionHeader";
import { Shield, Box, Code, Laptop, Building2 } from "lucide-react";

export function TrainingSection() {
  const icons = [Shield, Box, Code, Laptop];

  return (
    <section id="training" className="py-20 lg:py-28 relative bg-[#080B0E] border-t border-[#00EA64]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="SPECIALIZED VOCATIONAL SKILLS"
          title="Training &amp;"
          highlight="Workshops"
          description="Intensive hands-on technical bootcamps and specialized institutional training programs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {trainingWorkshops.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={item.id}
                className="p-6 sm:p-7 rounded-3xl bg-[#16202C] border border-[#00EA64]/20 hover:border-[#00EA64]/60 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-[0_0_20px_rgba(0,234,100,0.15)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#00EA64]/15 border border-[#00EA64]/30 text-[#00EA64] flex items-center justify-center group-hover:scale-105 transition-transform font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-[#00EA64] uppercase tracking-wider px-2 py-0.5 rounded bg-[#080B0E] border border-[#00EA64]/20 font-bold">
                      Completed
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#00EA64] transition-colors">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 mt-2 text-xs font-semibold text-[#00EA64]">
                    <Building2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.institution}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                    {item.focus}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#080B0E] text-slate-300 border border-[#00EA64]/15"
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
