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
    <section id="achievements" className="py-20 lg:py-24 relative bg-theme-bg border-t border-theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Exact Section Title Centered Matching Navbar */}
        <SectionHeader title="Achievements" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {awards.map((award) => {
            const Icon = getIcon(award.title);
            const isBestPerformer = award.title.includes("Best Performer");

            return (
              <div
                key={award.id}
                className={`p-6 rounded-3xl border transition-all duration-200 flex flex-col justify-between group shadow-sm ${
                  isBestPerformer
                    ? "bg-theme-surface border-2 border-theme-accent"
                    : "bg-theme-surface border-theme-border hover:border-theme-accent"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                        isBestPerformer
                          ? "bg-theme-accent text-white font-extrabold"
                          : "bg-theme-surfaceSecondary text-theme-accent border border-theme-border"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    {award.year ? (
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-theme-accent/10 text-theme-accent border border-theme-accent/30">
                        {award.year}
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono uppercase text-theme-accent px-2 py-0.5 rounded bg-theme-surfaceSecondary border border-theme-border font-bold">
                        Award
                      </span>
                    )}
                  </div>

                  <span className="text-[10px] font-mono tracking-wider uppercase text-theme-muted font-bold">
                    {award.category}
                  </span>

                  <h3 className="text-base font-extrabold text-theme-primary mt-1 group-hover:text-theme-accent transition-colors font-display">
                    {award.title}
                  </h3>

                  <p className="text-xs text-theme-secondary mt-2 leading-relaxed">
                    {award.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-theme-border flex items-center gap-1.5 text-[11px] font-mono text-theme-accent font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-theme-accent" />
                  <span>Resume Documented</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
