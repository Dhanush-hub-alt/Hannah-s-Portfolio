"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/portfolio";
import { Project } from "@/types";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectModal } from "@/components/ProjectModal";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { HealthcareDashboardPreview } from "@/components/HealthcareDashboardPreview";
import { WaterPurificationDiagram } from "@/components/WaterPurificationDiagram";
import { ArrowUpRight, Calendar, CheckCircle2, Maximize2, Image as ImageIcon, Sliders } from "lucide-react";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeViews, setActiveViews] = useState<Record<string, "image" | "interactive">>({
    "vehicle-ai-pileup-avoidance": "image",
    "ai-healthcare-disease-analysis": "image",
    "ozonolysis-water-purification": "image",
  });

  const toggleView = (projectId: string, view: "image" | "interactive") => {
    setActiveViews((prev) => ({ ...prev, [projectId]: view }));
  };

  const getProjectImage = (id: string) => {
    if (id === "vehicle-ai-pileup-avoidance") return "/images/project_radar_ai.svg";
    if (id === "ai-healthcare-disease-analysis") return "/images/project_healthcare_bi.svg";
    return "/images/project_water_ozonolysis.svg";
  };

  return (
    <section id="projects" className="py-20 lg:py-28 relative bg-[#0D1217] border-t border-[#00EA64]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="APPLIED ENGINEERING"
          title="Selected"
          highlight="Projects"
          description="Detailed overview of technical projects spanning edge IoT sensor fusion, healthcare business intelligence, and scientific computational modeling."
        />

        {/* Projects Stack */}
        <div className="space-y-16">
          {projects.map((project) => {
            const currentView = activeViews[project.id] || "image";
            const projectImage = getProjectImage(project.id);

            return (
              <div
                key={project.id}
                className="rounded-3xl bg-[#16202C] border border-[#00EA64]/20 p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-[#00EA64]/50 shadow-[0_15px_35px_rgba(0,0,0,0.85)] relative overflow-hidden"
              >
                {/* Background Corner Glow in Spotify Green */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#00EA64]/[0.05] rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Column: Project Metadata & Description (5 cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                    <div>
                      {/* Number and Year */}
                      <div className="flex items-center gap-3">
                        <span className="text-3xl sm:text-4xl font-extrabold font-mono text-[#00EA64]">
                          {project.number}
                        </span>
                        <div className="h-4 w-[1px] bg-white/15" />
                        <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-[#0D1217] border border-[#00EA64]/25 text-slate-300 flex items-center gap-1.5">
                          <Calendar className="w-3 h-3 text-[#00EA64]" />
                          {project.year}
                        </span>
                        <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-[#00EA64]/15 text-[#00EA64] border border-[#00EA64]/30">
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-4 leading-snug">
                        {project.title}
                      </h3>

                      {/* Tagline */}
                      <p className="text-sm font-semibold text-[#00EA64] mt-1">
                        {project.tagline}
                      </p>

                      {/* Short Description */}
                      <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies Pill Group */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-medium rounded-lg bg-[#0D1217] border border-[#00EA64]/20 text-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Key Features Bullet List */}
                      <div className="mt-6 space-y-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                          Key Capabilities
                        </span>
                        <ul className="space-y-1.5 mt-2">
                          {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                            <li
                              key={fIdx}
                              className="text-xs sm:text-sm text-slate-300 flex items-start gap-2"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#00EA64] shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Trigger Full Modal */}
                    <div className="pt-4 border-t border-[#00EA64]/20">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-[#080B0E] bg-[#00EA64] hover:bg-[#1ED760] transition-all shadow-green-btn group"
                      >
                        <Maximize2 className="w-3.5 h-3.5 text-[#080B0E]" />
                        <span>Inspect System Specs &amp; Architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#080B0E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Related Technical Graphic Image + Interactive Switcher (7 cols) */}
                  <div className="lg:col-span-7 w-full">
                    {/* View Switcher Pills */}
                    <div className="flex items-center justify-between mb-3 px-1">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        Technical Visual Representation
                      </span>
                      <div className="flex items-center gap-1.5 bg-[#080B0E] p-1 rounded-xl border border-[#00EA64]/25 text-xs">
                        <button
                          onClick={() => toggleView(project.id, "image")}
                          className={`px-3 py-1 rounded-lg font-semibold flex items-center gap-1.5 transition-all ${
                            currentView === "image"
                              ? "bg-[#00EA64] text-[#080B0E] font-bold"
                              : "text-slate-400 hover:text-white"
                          }`}
                        >
                          <ImageIcon className="w-3.5 h-3.5" />
                          <span>System Visual</span>
                        </button>
                        <button
                          onClick={() => toggleView(project.id, "interactive")}
                          className={`px-3 py-1 rounded-lg font-semibold flex items-center gap-1.5 transition-all ${
                            currentView === "interactive"
                              ? "bg-[#00EA64] text-[#080B0E] font-bold"
                              : "text-slate-400 hover:text-white"
                          }`}
                        >
                          <Sliders className="w-3.5 h-3.5" />
                          <span>Interactive Pipeline</span>
                        </button>
                      </div>
                    </div>

                    {/* Content View */}
                    <div className="rounded-2xl overflow-hidden border border-[#00EA64]/25 bg-[#080B0E] p-2 sm:p-3">
                      {currentView === "image" ? (
                        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-black border border-white/10">
                          <Image
                            src={projectImage}
                            alt={`${project.title} - Technical Representation`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 700px"
                          />
                        </div>
                      ) : (
                        <div>
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
