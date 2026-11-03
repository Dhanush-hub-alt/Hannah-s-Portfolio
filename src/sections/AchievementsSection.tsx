"use client";

import React from "react";
import { awards } from "@/data/portfolio";
import { SectionHeader } from "@/components/SectionHeader";
import { Trophy, Star, FileText, Music } from "lucide-react";

export function AchievementsSection() {
  const getIcon = (title: string) => {
    if (title.includes("Best Performer")) return Trophy;
    if (title.includes("Projects")) return Star;
    if (title.includes("Papers")) return FileText;
    return Music;
  };

  return (
    <section
      id="achievements"
      className="min-h-screen flex flex-col justify-center pt-20 pb-8 sm:pt-24 sm:pb-12 relative bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Exact Section Title Centered Matching Navbar */}
        <SectionHeader title="Achievements" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {awards.map((award) => {
            const Icon = getIcon(award.title);

            return (
              <div
                key={award.id}
                className="p-7 rounded-3xl bg-theme-surface border border-theme-border hover:border-theme-accent transition-all duration-300 flex flex-col justify-between shadow-card hover:-translate-y-1 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-theme-surfaceSecondary text-theme-accent border border-theme-border flex items-center justify-center transition-all group-hover:bg-theme-accent group-hover:text-white font-bold shadow-subtle">
                      <Icon className="w-5 h-5" />
                    </div>
                    {award.year ? (
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-theme-accent/10 text-theme-accent border border-theme-accent/30">
                        {award.year}
                      </span>
                    ) : (
                      <span className="text-[10px] uppercase text-theme-accent px-2 py-0.5 rounded bg-theme-surfaceSecondary border border-theme-border font-bold">
                        Award
                      </span>
                    )}
                  </div>

                  <span className="text-[10px] tracking-wider uppercase text-theme-muted font-bold">
                    {award.category}
                  </span>

                  <h3 className="text-base font-extrabold text-theme-primary mt-1 group-hover:text-theme-accent transition-colors">
                    {award.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-theme-secondary mt-2.5 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
