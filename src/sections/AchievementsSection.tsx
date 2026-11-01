"use client";

import React from "react";
import { awards } from "@/data/portfolio";
import { SectionHeader } from "@/components/SectionHeader";
import { Trophy, Star, FileText, Music, Sparkles } from "lucide-react";

export function AchievementsSection() {
  const getIcon = (title: string) => {
    if (title.includes("Best Performer")) return Trophy;
    if (title.includes("Projects")) return Star;
    if (title.includes("Papers")) return FileText;
    return Music;
  };

  return (
    <section id="achievements" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="HONORS & RECOGNITION"
          title="Honors &"
          highlight="Achievements"
          description="Institutional commendations, project innovation victories, research paper honors, and cultural achievements."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {awards.map((award) => {
            const Icon = getIcon(award.title);
            const isBestPerformer = award.title.includes("Best Performer");

            return (
              <div
                key={award.id}
                className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between group ${
                  isBestPerformer
                    ? "bg-gradient-to-b from-brand-indigo/15 to-bg-card border-brand-indigo/40 shadow-indigo-glow"
                    : "bg-bg-card border-border-subtle hover:border-brand-violet/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                        isBestPerformer
                          ? "bg-amber-400/20 text-amber-300 border border-amber-400/30"
                          : "bg-brand-indigo/15 text-brand-cyan border border-brand-indigo/30"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    {award.year ? (
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-brand-indigo/20 text-brand-cyan border border-brand-indigo/30">
                        {award.year}
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono uppercase text-brand-violet px-2 py-0.5 rounded bg-bg-elevated border border-white/5">
                        Award
                      </span>
                    )}
                  </div>

                  <span className="text-[10px] font-mono tracking-wider uppercase text-text-muted">
                    {award.category}
                  </span>

                  <h3 className="text-lg font-extrabold text-text-primary mt-1 group-hover:text-white transition-colors">
                    {award.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-text-secondary mt-2.5 leading-relaxed">
                    {award.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-border-subtle flex items-center gap-1.5 text-[11px] font-mono text-brand-cyan">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Resume Documented Honor</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
