"use client";

import React from "react";
import { educationList } from "@/data/portfolio";
import { SectionHeader } from "@/components/SectionHeader";
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-20 lg:py-28 relative bg-zinc-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FORMAL ACADEMICS"
          title="Academic"
          highlight="Journey"
          description="Educational milestones framing core theoretical knowledge and practical engineering foundations."
        />

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto mt-12">
          {/* Vertical Connecting Line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 -translate-x-1/2 w-[1px] bg-white/20 pointer-events-none" />

          <div className="space-y-12">
            {educationList.map((edu, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={edu.id}
                  className="relative flex flex-col sm:flex-row items-start"
                >
                  {/* Timeline Central Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black border-2 border-white flex items-center justify-center text-white z-10 shadow-[0_0_12px_rgba(255,255,255,0.3)]">
                    <GraduationCap className="w-4 h-4" />
                  </div>

                  {/* Content Card with Alternating Layout on sm+ screens */}
                  <div
                    className={`pl-12 sm:pl-0 w-full sm:w-1/2 ${
                      isEven ? "sm:pr-10 sm:text-right" : "sm:pl-10 sm:ml-auto sm:text-left"
                    }`}
                  >
                    <div className="p-6 rounded-2xl bg-zinc-900 border border-white/10 hover:border-white/30 transition-all duration-300 shadow-sm">
                      {/* Status / Duration Pill */}
                      <div
                        className={`flex items-center gap-2 mb-2 ${
                          isEven ? "sm:justify-end" : "sm:justify-start"
                        }`}
                      >
                        {edu.isCurrent && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-white text-black">
                            Current Degree
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-300">
                          <Calendar className="w-3.5 h-3.5" />
                          {edu.period}
                        </span>
                      </div>

                      {/* Institution Name */}
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {edu.institution}
                      </h3>

                      {/* Qualification */}
                      <p className="text-sm font-semibold text-zinc-300 mt-1">
                        {edu.qualification}
                      </p>

                      {/* Location */}
                      <div
                        className={`flex items-center gap-1.5 text-xs text-zinc-500 mt-2 ${
                          isEven ? "sm:justify-end" : "sm:justify-start"
                        }`}
                      >
                        <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{edu.location}</span>
                      </div>

                      {/* Highlights */}
                      <div className="mt-4 pt-3 border-t border-white/10 text-xs text-zinc-400 space-y-1.5">
                        {edu.highlights.map((h, i) => (
                          <div
                            key={i}
                            className={`flex items-start gap-1.5 ${
                              isEven ? "sm:flex-row-reverse sm:text-right" : "text-left"
                            }`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
