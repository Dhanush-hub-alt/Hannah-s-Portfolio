"use client";

import React from "react";
import { educationList } from "@/data/portfolio";
import { SectionHeader } from "@/components/SectionHeader";
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-20 lg:py-24 relative bg-theme-bg border-t border-theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Exact Section Title Centered Matching Navbar */}
        <SectionHeader title="Education" />

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto mt-8">
          {/* Vertical Connecting Line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 -translate-x-1/2 w-[2px] bg-theme-accent pointer-events-none" />

          <div className="space-y-10">
            {educationList.map((edu, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={edu.id}
                  className="relative flex flex-col sm:flex-row items-start"
                >
                  {/* Timeline Central Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-theme-surface border-2 border-theme-accent flex items-center justify-center text-theme-accent z-10 shadow-sm">
                    <GraduationCap className="w-4 h-4" />
                  </div>

                  {/* Content Card with Alternating Layout */}
                  <div
                    className={`pl-12 sm:pl-0 w-full sm:w-1/2 ${
                      isEven ? "sm:pr-10 sm:text-right" : "sm:pl-10 sm:ml-auto sm:text-left"
                    }`}
                  >
                    <div className="p-6 rounded-2xl bg-theme-surface border border-theme-border hover:border-theme-accent transition-all duration-200 shadow-sm">
                      {/* Period Pill */}
                      <div
                        className={`flex items-center gap-2 mb-2 ${
                          isEven ? "sm:justify-end" : "sm:justify-start"
                        }`}
                      >
                        {edu.isCurrent && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-theme-accent text-white">
                            Current
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-theme-accent">
                          <Calendar className="w-3.5 h-3.5" />
                          {edu.period}
                        </span>
                      </div>

                      {/* Institution Name */}
                      <h3 className="text-lg font-bold text-theme-primary tracking-tight font-display">
                        {edu.institution}
                      </h3>

                      {/* Qualification */}
                      <p className="text-sm font-semibold text-theme-accent mt-0.5">
                        {edu.qualification}
                      </p>

                      {/* Location */}
                      <div
                        className={`flex items-center gap-1.5 text-xs text-theme-muted mt-2 ${
                          isEven ? "sm:justify-end" : "sm:justify-start"
                        }`}
                      >
                        <MapPin className="w-3.5 h-3.5 text-theme-accent" />
                        <span>{edu.location}</span>
                      </div>

                      {/* Highlights */}
                      <div className="mt-4 pt-3 border-t border-theme-border text-xs text-theme-secondary space-y-1.5">
                        {edu.highlights.map((h, i) => (
                          <div
                            key={i}
                            className={`flex items-start gap-1.5 ${
                              isEven ? "sm:flex-row-reverse sm:text-right" : "text-left"
                            }`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" />
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
