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
    <section id="projects" className="py-20 lg:py-24 relative bg-theme-bg border-t border-theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Exact Section Title Centered Matching Navbar */}
        <SectionHeader title="Projects" />

        {/* Projects Stack */}
        <div className="space-y-12">
          {projects.map((project) => {
            const currentView = activeViews[project.id] || "image";
            const projectImage = getProjectImage(project.id);

            return (
              <div
                key={project.id}
                className="rounded-3xl bg-theme-surface border border-theme-border p-6 sm:p-8 lg:p-10 transition-all duration-200 hover:border-theme-accent relative overflow-hidden shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Column: Project Details (5 cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-5">
                    <div>
                      {/* Number and Year */}
                      <div className="flex items-center gap-3">
                        <span className="text-3xl font-extrabold font-mono text-theme-accent">
                          {project.number}
                        </span>
                        <div className="h-4 w-[1px] bg-theme-border" />
                        <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-theme-surfaceSecondary border border-theme-border text-theme-secondary flex items-center gap-1.5">
                          <Calendar className="w-3 h-3 text-theme-accent" />
                          {project.year}
                        </span>
                        <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-theme-accent/10 text-theme-accent border border-theme-accent/30">
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-extrabold text-theme-primary tracking-tight mt-4 leading-snug font-display">
                        {project.title}
                      </h3>

                      {/* Tagline */}
                      <p className="text-sm font-semibold text-theme-accent mt-1">
                        {project.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-theme-secondary mt-2.5 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies Pills */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-theme-surfaceSecondary border border-theme-border text-theme-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Key Capabilities */}
                      <div className="mt-5 space-y-1.5">
                        <ul className="space-y-1.5">
                          {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                            <li
                              key={fIdx}
                              className="text-xs text-theme-secondary flex items-start gap-2"
                            >
                              <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Trigger Full Modal */}
                    <div className="pt-3 border-t border-theme-border">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-theme-accent hover:bg-theme-accentHover transition-colors shadow-sm active:scale-95"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Inspect Architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Visual Switcher & Interactive Display (7 cols) */}
                  <div className="lg:col-span-7 w-full">
                    {/* View Switcher Controls */}
                    <div className="flex items-center justify-between mb-3 px-1">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-theme-muted">
                        Technical Visualization
                      </span>
                      <div className="flex items-center gap-1.5 bg-theme-surfaceSecondary p-1 rounded-xl border border-theme-border text-xs">
                        <button
                          onClick={() => toggleView(project.id, "image")}
                          className={`px-3 py-1 rounded-lg font-bold flex items-center gap-1.5 transition-all ${
                            currentView === "image"
                              ? "bg-theme-accent text-white"
                              : "text-theme-muted hover:text-theme-primary"
                          }`}
                        >
                          <ImageIcon className="w-3.5 h-3.5" />
                          <span>Schematic</span>
                        </button>
                        <button
                          onClick={() => toggleView(project.id, "interactive")}
                          className={`px-3 py-1 rounded-lg font-bold flex items-center gap-1.5 transition-all ${
                            currentView === "interactive"
                              ? "bg-theme-accent text-white"
                              : "text-theme-muted hover:text-theme-primary"
                          }`}
                        >
                          <Sliders className="w-3.5 h-3.5" />
                          <span>Interactive Pipeline</span>
                        </button>
                      </div>
                    </div>

                    {/* Content View Container */}
                    <div className="rounded-2xl overflow-hidden border border-theme-border bg-theme-surfaceSecondary p-2 sm:p-3">
                      {currentView === "image" ? (
                        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-theme-surface border border-theme-border">
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
