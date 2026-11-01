"use client";

import React, { useState } from "react";
import { certifications } from "@/data/portfolio";
import { SectionHeader } from "@/components/SectionHeader";
import { Award, Cloud, Code2, Globe, ShieldCheck } from "lucide-react";

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
    <section id="certifications" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="VALIDATED COMPETENCIES"
          title="Certifications &"
          highlight="Continuous Learning"
          description="Formal industry certifications, national technical credentials (NPTEL Elite), and competitive problem-solving recognitions."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === cat
                  ? "bg-brand-indigo text-white shadow-indigo-glow"
                  : "bg-bg-card border border-border-subtle text-text-secondary hover:text-text-primary hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCerts.map((cert) => {
            const isOracle = cert.issuer.includes("Oracle");
            const isNptel = cert.issuer.includes("NPTEL");
            const isHackerRank = cert.issuer.includes("HackerRank");

            return (
              <div
                key={cert.id}
                className="p-5 rounded-2xl bg-bg-card border border-border-subtle hover:border-brand-indigo/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold tracking-wider text-brand-cyan">
                      {cert.issuer}
                    </span>
                    {cert.level ? (
                      <span
                        className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                          cert.level.includes("Silver")
                            ? "bg-slate-400/10 text-slate-200 border-slate-400/30"
                            : "bg-amber-400/10 text-amber-300 border-amber-400/30"
                        }`}
                      >
                        {cert.level}
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-text-muted px-2 py-0.5 rounded bg-bg-elevated border border-white/5">
                        Verified
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-text-primary group-hover:text-white transition-colors">
                    {cert.name}
                  </h3>
                </div>

                <div className="mt-5 pt-3 border-t border-border-subtle flex items-center justify-between text-xs text-text-muted">
                  <span className="text-[11px] font-medium">{cert.category}</span>
                  <div className="w-7 h-7 rounded-lg bg-bg-elevated flex items-center justify-center text-text-secondary group-hover:text-brand-cyan group-hover:bg-brand-indigo/10 transition-colors">
                    {isOracle ? (
                      <Cloud className="w-3.5 h-3.5" />
                    ) : isNptel ? (
                      <Award className="w-3.5 h-3.5" />
                    ) : isHackerRank ? (
                      <Code2 className="w-3.5 h-3.5" />
                    ) : (
                      <Globe className="w-3.5 h-3.5" />
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
