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
    <section id="achievements" className="py-20 lg:py-28 relative bg-black border-t border-[#00EA64]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="HONORS &amp; RECOGNITION"
          title="Honors &amp;"
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
                className={`p-6 rounded-3xl border transition-all duration-200 flex flex-col justify-between group ${
                  isBestPerformer
                    ? "bg-black border-2 border-[#00EA64]"
                    : "bg-black border border-[#00EA64]/25 hover:border-[#00EA64]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                        isBestPerformer
                          ? "bg-[#00EA64] text-black font-extrabold"
                          : "bg-black text-[#00EA64] border border-[#00EA64]/30"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    {award.year ? (
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-black text-[#00EA64] border border-[#00EA64]">
                        {award.year}
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono uppercase text-[#00EA64] px-2 py-0.5 rounded bg-black border border-[#00EA64]/20 font-bold">
                        Award
                      </span>
                    )}
                  </div>

                  <span className="text-[10px] font-mono tracking-wider uppercase text-[#A7F3D0] font-bold">
                    {award.category}
                  </span>

                  <h3 className="text-lg font-extrabold text-white mt-1 group-hover:text-[#00EA64] transition-colors">
                    {award.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/90 mt-2.5 leading-relaxed">
                    {award.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#00EA64]/20 flex items-center gap-1.5 text-[11px] font-mono text-[#00EA64] font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-[#00EA64]" />
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
