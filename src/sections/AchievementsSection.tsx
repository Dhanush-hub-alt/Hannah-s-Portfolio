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
    <section id="achievements" className="py-20 lg:py-28 relative bg-black border-t border-white/10">
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
                    ? "bg-zinc-900 border-white/40 shadow-[0_10px_30px_rgba(255,255,255,0.06)]"
                    : "bg-zinc-950 border-white/10 hover:border-white/30"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                        isBestPerformer
                          ? "bg-white text-black"
                          : "bg-white/10 text-white border border-white/10"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    {award.year ? (
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-white/10 text-white border border-white/20">
                        {award.year}
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono uppercase text-zinc-500 px-2 py-0.5 rounded bg-zinc-900 border border-white/5">
                        Award
                      </span>
                    )}
                  </div>

                  <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-500">
                    {award.category}
                  </span>

                  <h3 className="text-lg font-extrabold text-white mt-1 group-hover:text-zinc-200 transition-colors">
                    {award.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 mt-2.5 leading-relaxed">
                    {award.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
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
