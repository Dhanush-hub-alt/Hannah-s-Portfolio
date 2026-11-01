"use client";

import React from "react";
import { trainingWorkshops } from "@/data/portfolio";
import { SectionHeader } from "@/components/SectionHeader";
import { Shield, Box, Code, Laptop, ExternalLink, Building2 } from "lucide-react";

export function TrainingSection() {
  const icons = [Shield, Box, Code, Laptop];

  return (
    <section id="training" className="py-20 lg:py-28 relative bg-bg-secondary/40 border-y border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="SPECIALIZED VOCATIONAL SKILLS"
          title="Training &"
          highlight="Workshops"
          description="Intensive hands-on technical bootcamps and specialized institutional training programs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {trainingWorkshops.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={item.id}
                className="p-6 sm:p-7 rounded-3xl bg-bg-card border border-border-subtle hover:border-brand-violet/40 transition-all duration-300 flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-violet/15 border border-brand-violet/30 text-brand-violet flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider px-2 py-0.5 rounded bg-bg-elevated border border-white/5">
                      Completed
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-text-primary group-hover:text-white transition-colors">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 mt-2 text-xs font-semibold text-brand-cyan">
                    <Building2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.institution}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-text-secondary mt-3 leading-relaxed">
                    {item.focus}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border-subtle flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-bg-elevated text-text-muted border border-white/5"
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
