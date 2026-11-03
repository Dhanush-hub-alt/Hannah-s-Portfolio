"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/portfolio";
import { Project } from "@/types";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectModal } from "@/components/ProjectModal";
import { ArrowUpRight, Calendar, CheckCircle2, Maximize2 } from "lucide-react";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getProjectImage = (id: string) => {
    if (id === "vehicle-ai-pileup-avoidance") return "/images/project_vehicle_radar_ai.jpg";
    if (id === "ai-healthcare-disease-analysis") return "/images/project_healthcare_analytics.jpg";
    return "/images/project_water_ozonolysis.jpg";
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center pt-20 pb-8 sm:pt-24 sm:pb-12 relative bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Exact Section Title Centered Matching Navbar */}
        <SectionHeader title="Projects" />

        {/* Projects Stack */}
        <div className="space-y-10 lg:space-y-12">
          {projects.map((project) => {
            const projectImage = getProjectImage(project.id);

            return (
              <div
                key={project.id}
                className="rounded-3xl bg-theme-surface border border-theme-border p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-theme-accent relative overflow-hidden shadow-card"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                  
                  {/* Left Column: Project Details (6 cols) */}
                  <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-5">
                    <div>
                      {/* Number and Year */}
                      <div className="flex items-center gap-3">
                        <span className="text-3xl font-extrabold text-theme-accent">
                          {project.number}
                        </span>
                        <div className="h-4 w-[1px] bg-theme-border" />
                        <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-theme-surfaceSecondary border border-theme-border text-theme-secondary flex items-center gap-1.5">
                          <Calendar className="w-3 h-3 text-theme-accent" />
                          {project.year}
                        </span>
                        <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-theme-accent/10 text-theme-accent border border-theme-accent/30">
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-theme-primary tracking-tight mt-4 leading-snug">
                        {project.title}
                      </h3>

                      {/* Tagline */}
                      <p className="text-sm font-semibold text-theme-accent mt-1.5">
                        {project.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-theme-secondary mt-3 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies Pills */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-semibold rounded-lg bg-theme-surfaceSecondary border border-theme-border text-theme-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Key Capabilities */}
                      <div className="mt-5 space-y-2">
                        <ul className="space-y-2">
                          {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                            <li
                              key={fIdx}
                              className="text-xs sm:text-sm text-theme-secondary flex items-start gap-2.5"
                            >
                              <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Trigger Full Modal */}
                    <div className="pt-4 border-t border-theme-border">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-theme-accent hover:bg-theme-accentHover transition-all shadow-subtle hover:scale-105 active:scale-95"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Inspect Architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: High-Res Modern AI Generated Project Image (6 cols) */}
                  <div className="lg:col-span-6 w-full">
                    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-theme-surfaceSecondary border border-theme-border shadow-card group">
                      <Image
                        src={projectImage}
                        alt={`${project.title} - AI Technical Visualization`}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 600px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
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
