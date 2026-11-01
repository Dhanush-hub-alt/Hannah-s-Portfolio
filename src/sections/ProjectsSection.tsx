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
    <section id="projects" className="py-20 lg:py-28 relative bg-black border-t border-[#00EA64]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="APPLIED ENGINEERING"
          title="Selected"
          highlight="Projects"
          description="Detailed overview of technical projects spanning edge IoT sensor fusion, healthcare business intelligence, and scientific computational modeling."
        />

        {/* Projects Stack */}
        <div className="space-y-14">
          {projects.map((project) => {
            const currentView = activeViews[project.id] || "image";
            const projectImage = getProjectImage(project.id);

            return (
              <div
                key={project.id}
                className="rounded-3xl bg-black border border-[#00EA64]/25 p-6 sm:p-8 lg:p-10 transition-all duration-200 hover:border-[#00EA64] relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Column: Project Metadata & Description (5 cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                    <div>
                      {/* Number and Year */}
                      <div className="flex items-center gap-3">
                        <span className="text-3xl sm:text-4xl font-extrabold font-mono text-[#00EA64]">
                          {project.number}
                        </span>
                        <div className="h-4 w-[1px] bg-[#00EA64]/30" />
                        <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-black border border-[#00EA64]/30 text-[#00EA64] flex items-center gap-1.5">
                          <Calendar className="w-3 h-3 text-[#00EA64]" />
                          {project.year}
                        </span>
                        <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-black text-[#00EA64] border border-[#00EA64]">
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
                      <p className="text-sm sm:text-base text-[#A7F3D0] mt-3 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies Pill Group */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-black border border-[#00EA64]/25 text-white"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Key Features Bullet List */}
                      <div className="mt-6 space-y-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-[#00EA64] font-bold">
                          Key Capabilities
                        </span>
                        <ul className="space-y-1.5 mt-2">
                          {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                            <li
                              key={fIdx}
                              className="text-xs sm:text-sm text-white/90 flex items-start gap-2"
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
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-extrabold text-black bg-[#00EA64] hover:bg-[#10E56A] transition-colors shadow-btn active:scale-95"
                      >
                        <Maximize2 className="w-3.5 h-3.5 text-black" />
                        <span>Inspect System Specs &amp; Architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Related Technical Graphic Image + Interactive Switcher (7 cols) */}
                  <div className="lg:col-span-7 w-full">
                    {/* View Switcher Pills */}
                    <div className="flex items-center justify-between mb-3 px-1">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#A7F3D0]">
                        Technical Visual Representation
                      </span>
                      <div className="flex items-center gap-1.5 bg-black p-1 rounded-xl border border-[#00EA64]/30 text-xs">
                        <button
                          onClick={() => toggleView(project.id, "image")}
                          className={`px-3 py-1 rounded-lg font-bold flex items-center gap-1.5 transition-all ${
                            currentView === "image"
                              ? "bg-[#00EA64] text-black"
                              : "text-[#A7F3D0] hover:text-white"
                          }`}
                        >
                          <ImageIcon className="w-3.5 h-3.5" />
                          <span>System Visual</span>
                        </button>
                        <button
                          onClick={() => toggleView(project.id, "interactive")}
                          className={`px-3 py-1 rounded-lg font-bold flex items-center gap-1.5 transition-all ${
                            currentView === "interactive"
                              ? "bg-[#00EA64] text-black"
                              : "text-[#A7F3D0] hover:text-white"
                          }`}
                        >
                          <Sliders className="w-3.5 h-3.5" />
                          <span>Interactive Pipeline</span>
                        </button>
                      </div>
                    </div>

                    {/* Content View */}
                    <div className="rounded-2xl overflow-hidden border border-[#00EA64]/30 bg-black p-2 sm:p-3">
                      {currentView === "image" ? (
                        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-black border border-[#00EA64]/20">
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
