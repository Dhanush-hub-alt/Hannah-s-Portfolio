"use client";

import React, { useState } from "react";
import { certifications } from "@/data/portfolio";
import { SectionHeader } from "@/components/SectionHeader";
import { Award, Cloud, Code2, Globe } from "lucide-react";

export function CertificationsSection() {
  const [filter, setFilter] = useState<string>("All");

  const categories = [
    "All",
    "Cloud & AI",
    "Programming & Problem Solving",
    "Learning Platform",
  ];

  const filteredCerts =
    filter === "All"
      ? certifications
      : certifications.filter((c) => c.category === filter);

  return (
    <section
      id="certifications"
      className="min-h-screen flex flex-col justify-center pt-20 pb-8 sm:pt-24 sm:pb-12 relative bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Exact Section Title Centered Matching Navbar */}
        <SectionHeader title="Certifications" />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                filter === cat
                  ? "bg-theme-accent text-white shadow-subtle"
                  : "bg-theme-surface border border-theme-border text-theme-secondary hover:text-theme-primary hover:border-theme-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => {
            const isOracle = cert.issuer.includes("Oracle");
            const isNptel = cert.issuer.includes("NPTEL");
            const isHackerRank = cert.issuer.includes("HackerRank");

            return (
              <div
                key={cert.id}
                className="p-6 rounded-3xl bg-theme-surface border border-theme-border hover:border-theme-accent transition-all duration-300 flex flex-col justify-between group shadow-card hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold tracking-wider text-theme-accent">
                      {cert.issuer}
                    </span>
                    {cert.level ? (
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-theme-accent/40 bg-theme-accent/10 text-theme-accent">
                        {cert.level}
                      </span>
                    ) : (
                      <span className="text-[10px] text-theme-muted px-2 py-0.5 rounded bg-theme-surfaceSecondary border border-theme-border font-semibold">
                        Verified
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-theme-primary group-hover:text-theme-accent transition-colors">
                    {cert.name}
                  </h3>
                </div>

                <div className="mt-5 pt-3 border-t border-theme-border flex items-center justify-between text-xs text-theme-muted">
                  <span className="text-[11px] font-medium">{cert.category}</span>
                  <div className="w-8 h-8 rounded-xl bg-theme-surfaceSecondary flex items-center justify-center text-theme-accent group-hover:bg-theme-accent group-hover:text-white transition-all font-bold shadow-subtle">
                    {isOracle ? (
                      <Cloud className="w-4 h-4" />
                    ) : isNptel ? (
                      <Award className="w-4 h-4" />
                    ) : isHackerRank ? (
                      <Code2 className="w-4 h-4" />
                    ) : (
                      <Globe className="w-4 h-4" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
