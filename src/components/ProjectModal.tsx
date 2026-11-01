"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Project } from "@/types";
import { X, CheckCircle2, Cpu, Calendar, Tag, Layers, Image as ImageIcon } from "lucide-react";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { HealthcareDashboardPreview } from "./HealthcareDashboardPreview";
import { WaterPurificationDiagram } from "./WaterPurificationDiagram";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const getProjectImage = (id: string) => {
    if (id === "vehicle-ai-pileup-avoidance") return "/images/project_radar_ai.svg";
    if (id === "ai-healthcare-disease-analysis") return "/images/project_healthcare_bi.svg";
    return "/images/project_water_ozonolysis.svg";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Blurred Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-zinc-950 border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.95)] p-6 sm:p-8 z-10 custom-scrollbar">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-zinc-900 border border-white/15 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/50 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="pr-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-white text-black">
              PROJECT {project.number}
            </span>
            <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-300 border border-white/10 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {project.year}
            </span>
            <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-300 border border-white/10 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" />
              {project.category}
            </span>
            <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/10 text-white border border-white/20">
              {project.status}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="mt-2 text-zinc-400 text-base leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="mt-6 pt-5 border-t border-white/10">
          <div className="text-xs uppercase font-mono tracking-wider text-zinc-500 mb-2.5">
            Engineered With
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-lg bg-zinc-900 border border-white/10 text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Visual Graphic Representation */}
        <div className="mt-8">
          <div className="text-xs uppercase font-mono tracking-wider text-zinc-500 mb-3 flex items-center gap-2">
            <ImageIcon className="w-4 h-4 text-white" />
            System Visual Schematic
          </div>
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-black border border-white/15">
            <Image
              src={getProjectImage(project.id)}
              alt={`${project.title} Schematic`}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Interactive Diagram / Visualization */}
        <div className="mt-8">
          <div className="text-xs uppercase font-mono tracking-wider text-zinc-500 mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-white" />
            Interactive Technical Demonstration
          </div>
          {project.id === "vehicle-ai-pileup-avoidance" && <ArchitectureDiagram />}
          {project.id === "ai-healthcare-disease-analysis" && <HealthcareDashboardPreview />}
          {project.id === "ozonolysis-water-purification" && <WaterPurificationDiagram />}
        </div>

        {/* Detailed Overview */}
        <div className="mt-8 space-y-4">
          <h4 className="text-lg font-bold text-white">Detailed System Overview</h4>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {project.detailedOverview}
          </p>
        </div>

        {/* Key Functionality & Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-5 rounded-2xl bg-zinc-900 border border-white/10">
            <h5 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-white" />
              Key Functionality
            </h5>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400">
              {project.keyFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900 border border-white/10">
            <h5 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-zinc-300" />
              Technical Architecture Highlights
            </h5>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400">
              {project.architecturePoints.map((arch, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-1.5 shrink-0" />
                  <span>{arch}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Bottom Close */}
        <div className="mt-8 pt-5 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
