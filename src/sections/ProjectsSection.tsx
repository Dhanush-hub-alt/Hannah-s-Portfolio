"use client";

import React, { useState } from "react";
import { projects } from "@/data/portfolio";
import { Project } from "@/types";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectModal } from "@/components/ProjectModal";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { HealthcareDashboardPreview } from "@/components/HealthcareDashboardPreview";
import { WaterPurificationDiagram } from "@/components/WaterPurificationDiagram";
import { ArrowUpRight, Calendar, Sparkles, CheckCircle2, Maximize2 } from "lucide-react";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="APPLIED ENGINEERING"
          title="Selected"
          highlight="Projects"
          description="Detailed overview of technical projects spanning edge IoT sensor fusion, healthcare business intelligence, and scientific computational modeling."
        />

        {/* Projects Stack */}
        <div className="space-y-16">
          {projects.map((project, index) => {
            return (
              <div
                key={project.id}
                className="rounded-3xl bg-bg-card border border-border-subtle p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-brand-indigo/40 shadow-card-glow relative overflow-hidden"
              >
                {/* Background Corner Glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-indigo/5 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Column: Project Metadata & Description (5 cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                    <div>
                      {/* Number and Year */}
                      <div className="flex items-center gap-3">
                        <span className="text-3xl sm:text-4xl font-extrabold font-mono text-brand-cyan/40">
                          {project.number}
                        </span>
                        <div className="h-4 w-[1px] bg-border-subtle" />
                        <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-bg-elevated border border-border-subtle text-text-secondary flex items-center gap-1.5">
                          <Calendar className="w-3 h-3 text-brand-violet" />
                          {project.year}
                        </span>
                        <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-brand-indigo/15 text-brand-indigo border border-brand-indigo/25">
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight mt-4 leading-snug">
                        {project.title}
                      </h3>

                      {/* Tagline */}
                      <p className="text-sm font-semibold text-brand-cyan mt-1">
                        {project.tagline}
                      </p>

                      {/* Short Description */}
                      <p className="text-sm sm:text-base text-text-secondary mt-3 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies Pill Group */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-medium rounded-lg bg-bg-elevated border border-border-subtle text-text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Key Features Bullet List */}
                      <div className="mt-6 space-y-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-text-muted">
                          Key Capabilities
                        </span>
                        <ul className="space-y-1.5 mt-2">
                          {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                            <li
                              key={fIdx}
                              className="text-xs sm:text-sm text-text-secondary flex items-start gap-2"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Trigger Full Modal */}
                    <div className="pt-4 border-t border-border-subtle">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-bg-elevated border border-border-subtle hover:border-brand-indigo/60 hover:bg-brand-indigo/15 transition-all group"
                      >
                        <Maximize2 className="w-3.5 h-3.5 text-brand-cyan" />
                        <span>Inspect System Specs & Architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Embedded Technical Diagram / Visual Architecture (7 cols) */}
                  <div className="lg:col-span-7 w-full">
                    <div className="rounded-2xl overflow-hidden border border-border-subtle/80 bg-bg-elevated/40 p-2 sm:p-3">
                      {project.id === "vehicle-ai-pileup-avoidance" && (
                        <ArchitectureDiagram />
                      )}
                      {project.id === "ai-healthcare-disease-analysis" && (
                        <HealthcareDashboardPreview />
                      )}
                      {project.id === "ozonolysis-water-purification" && (
                        <WaterPurificationDiagram />
                      )}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Deep Dive Inspection */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
