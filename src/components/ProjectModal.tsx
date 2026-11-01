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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
      {/* Dark Backdrop */}
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-black border-2 border-[#00EA64] p-5 sm:p-8 z-10 custom-scrollbar shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 rounded-full bg-black border border-[#00EA64] flex items-center justify-center text-[#00EA64] hover:bg-[#00EA64] hover:text-black transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="pr-12">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold px-3 py-1 rounded-md bg-[#00EA64] text-black">
              PROJECT {project.number}
            </span>
            <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-black text-[#A7F3D0] border border-[#00EA64]/30 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#00EA64]" />
              {project.year}
            </span>
            <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-black text-[#A7F3D0] border border-[#00EA64]/30 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-[#00EA64]" />
              {project.category}
            </span>
            <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-black text-[#00EA64] border border-[#00EA64] font-bold">
              {project.status}
            </span>
          </div>

          <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="mt-2 text-[#A7F3D0] text-sm sm:text-base leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="mt-6 pt-5 border-t border-[#00EA64]/20">
          <div className="text-xs uppercase font-mono tracking-wider text-[#00EA64] mb-2.5 font-bold">
            Engineered With
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-semibold rounded-lg bg-black border border-[#00EA64]/30 text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Visual Graphic Representation */}
        <div className="mt-8">
          <div className="text-xs uppercase font-mono tracking-wider text-[#00EA64] mb-3 flex items-center gap-2 font-bold">
            <ImageIcon className="w-4 h-4 text-[#00EA64]" />
            System Visual Schematic
          </div>
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-black border border-[#00EA64]/30">
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
          <div className="text-xs uppercase font-mono tracking-wider text-[#00EA64] mb-3 flex items-center gap-2 font-bold">
            <Layers className="w-4 h-4 text-[#00EA64]" />
            Interactive Technical Demonstration
          </div>
          {project.id === "vehicle-ai-pileup-avoidance" && <ArchitectureDiagram />}
          {project.id === "ai-healthcare-disease-analysis" && <HealthcareDashboardPreview />}
          {project.id === "ozonolysis-water-purification" && <WaterPurificationDiagram />}
        </div>

        {/* Detailed Overview */}
        <div className="mt-8 space-y-3">
          <h4 className="text-lg font-bold text-white">Detailed System Overview</h4>
          <p className="text-[#A7F3D0] text-sm sm:text-base leading-relaxed">
            {project.detailedOverview}
          </p>
        </div>

        {/* Key Functionality & Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
          <div className="p-5 rounded-2xl bg-black border border-[#00EA64]/25">
            <h5 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00EA64]" />
              Key Functionality
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm text-white/90">
              {project.keyFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00EA64] mt-1.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-black border border-[#00EA64]/25">
            <h5 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#00EA64]" />
              Technical Architecture Highlights
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm text-white/90">
              {project.architecturePoints.map((arch, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00EA64] mt-1.5 shrink-0" />
                  <span>{arch}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Bottom Close */}
        <div className="mt-8 pt-5 border-t border-[#00EA64]/20 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#00EA64] text-black font-extrabold text-sm hover:bg-[#10E56A] transition-colors border-none"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
