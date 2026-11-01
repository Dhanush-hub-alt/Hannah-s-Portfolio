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
    <section id="projects" className="py-20 lg:py-28 relative bg-black border-t border-white/10">
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
                className="rounded-3xl bg-zinc-950 border border-white/10 p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-white/30 shadow-[0_15px_35px_rgba(0,0,0,0.85)] relative overflow-hidden"
              >
                {/* Background Corner Glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Column: Project Metadata & Description (5 cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                    <div>
                      {/* Number and Year */}
                      <div className="flex items-center gap-3">
                        <span className="text-3xl sm:text-4xl font-extrabold font-mono text-zinc-500">
                          {project.number}
                        </span>
                        <div className="h-4 w-[1px] bg-white/15" />
                        <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-zinc-900 border border-white/10 text-zinc-300 flex items-center gap-1.5">
                          <Calendar className="w-3 h-3 text-zinc-400" />
                          {project.year}
                        </span>
                        <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-white/10 text-white border border-white/15">
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-4 leading-snug">
                        {project.title}
                      </h3>

                      {/* Tagline */}
                      <p className="text-sm font-semibold text-zinc-300 mt-1">
                        {project.tagline}
                      </p>

                      {/* Short Description */}
                      <p className="text-sm sm:text-base text-zinc-400 mt-3 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies Pill Group */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-medium rounded-lg bg-zinc-900 border border-white/10 text-zinc-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Key Features Bullet List */}
                      <div className="mt-6 space-y-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                          Key Capabilities
                        </span>
                        <ul className="space-y-1.5 mt-2">
                          {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                            <li
                              key={fIdx}
                              className="text-xs sm:text-sm text-zinc-400 flex items-start gap-2"
                            >
                              <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Trigger Full Modal */}
                    <div className="pt-4 border-t border-white/10">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-black bg-white hover:bg-zinc-200 transition-all group"
                      >
                        <Maximize2 className="w-3.5 h-3.5 text-black" />
                        <span>Inspect System Specs & Architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Related Technical Graphic Image + Interactive Switcher (7 cols) */}
                  <div className="lg:col-span-7 w-full">
                    {/* View Switcher Pills */}
                    <div className="flex items-center justify-between mb-3 px-1">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                        Technical Visual Representation
                      </span>
                      <div className="flex items-center gap-1.5 bg-black p-1 rounded-xl border border-white/15 text-xs">
                        <button
                          onClick={() => toggleView(project.id, "image")}
                          className={`px-3 py-1 rounded-lg font-semibold flex items-center gap-1.5 transition-all ${
                            currentView === "image"
                              ? "bg-white text-black"
                              : "text-zinc-400 hover:text-white"
                          }`}
                        >
                          <ImageIcon className="w-3.5 h-3.5" />
                          <span>System Visual</span>
                        </button>
                        <button
                          onClick={() => toggleView(project.id, "interactive")}
                          className={`px-3 py-1 rounded-lg font-semibold flex items-center gap-1.5 transition-all ${
                            currentView === "interactive"
                              ? "bg-white text-black"
                              : "text-zinc-400 hover:text-white"
                          }`}
                        >
                          <Sliders className="w-3.5 h-3.5" />
                          <span>Interactive Pipeline</span>
                        </button>
                      </div>
                    </div>

                    {/* Content View */}
                    <div className="rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 p-2 sm:p-3">
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
