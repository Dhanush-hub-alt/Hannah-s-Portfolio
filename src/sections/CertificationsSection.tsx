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
    <section id="certifications" className="py-20 lg:py-28 relative bg-[#0D1217] border-t border-[#00EA64]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="VALIDATED COMPETENCIES"
          title="Certifications &amp;"
          highlight="Continuous Learning"
          description="Formal industry certifications, national technical credentials (NPTEL Elite), and competitive problem-solving recognitions."
        />

        {/* Filter Pills in HackerRank Green */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === cat
                  ? "bg-[#00EA64] text-[#080B0E] font-bold shadow-green-btn"
                  : "bg-[#16202C] border border-[#00EA64]/20 text-slate-300 hover:text-white hover:border-[#00EA64]"
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
                className="p-5 rounded-2xl bg-[#16202C] border border-[#00EA64]/20 hover:border-[#00EA64]/60 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-[0_0_20px_rgba(0,234,100,0.15)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold tracking-wider text-[#00EA64]">
                      {cert.issuer}
                    </span>
                    {cert.level ? (
                      <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border border-[#00EA64]/40 bg-[#00EA64]/15 text-[#00EA64]">
                        {cert.level}
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-[#080B0E] border border-white/5">
                        Verified
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-[#00EA64] transition-colors">
                    {cert.name}
                  </h3>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="text-[11px] font-medium text-slate-300">{cert.category}</span>
                  <div className="w-7 h-7 rounded-lg bg-[#080B0E] flex items-center justify-center text-slate-400 group-hover:text-[#00EA64] group-hover:bg-[#00EA64]/15 transition-colors">
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
