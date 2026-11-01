"use client";

import React, { useEffect } from "react";
import { Project } from "@/types";
import { X, CheckCircle2, Cpu, Calendar, Tag, Layers } from "lucide-react";
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Blurred Backdrop */}
      <div
        className="fixed inset-0 bg-bg-main/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-bg-card border border-border-subtle shadow-2xl p-6 sm:p-8 z-10 custom-scrollbar">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-bg-elevated border border-border-subtle flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-brand-indigo/50 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="pr-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-brand-indigo/20 text-brand-indigo border border-brand-indigo/30">
              PROJECT {project.number}
            </span>
            <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-bg-elevated text-text-secondary border border-border-subtle flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {project.year}
            </span>
            <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/25 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" />
              {project.category}
            </span>
            <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-brand-violet/15 text-brand-violet border border-brand-violet/25">
              {project.status}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
            {project.title}
          </h3>
          <p className="mt-2 text-text-secondary text-base leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="mt-6 pt-5 border-t border-border-subtle">
          <div className="text-xs uppercase font-mono tracking-wider text-text-muted mb-2.5">
            Engineered With
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-lg bg-bg-elevated border border-border-subtle text-text-primary hover:border-brand-indigo/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Interactive Diagram / Visualization */}
        <div className="mt-8">
          <div className="text-xs uppercase font-mono tracking-wider text-text-muted mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-brand-cyan" />
            Interactive Technical Demonstration
          </div>
          {project.id === "vehicle-ai-pileup-avoidance" && <ArchitectureDiagram />}
          {project.id === "ai-healthcare-disease-analysis" && <HealthcareDashboardPreview />}
          {project.id === "ozonolysis-water-purification" && <WaterPurificationDiagram />}
        </div>

        {/* Detailed Overview */}
        <div className="mt-8 space-y-4">
          <h4 className="text-lg font-bold text-text-primary">Detailed System Overview</h4>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            {project.detailedOverview}
          </p>
        </div>

        {/* Key Functionality & Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-5 rounded-2xl bg-bg-elevated/70 border border-border-subtle">
            <h5 className="text-sm font-bold text-text-primary mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Key Functionality
            </h5>
            <ul className="space-y-2.5 text-xs sm:text-sm text-text-secondary">
              {project.keyFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-bg-elevated/70 border border-border-subtle">
            <h5 className="text-sm font-bold text-text-primary mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-brand-violet" />
              Technical Architecture Highlights
            </h5>
            <ul className="space-y-2.5 text-xs sm:text-sm text-text-secondary">
              {project.architecturePoints.map((arch, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-violet mt-1.5 shrink-0" />
                  <span>{arch}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Bottom Close */}
        <div className="mt-8 pt-5 border-t border-border-subtle flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-bg-elevated border border-border-subtle text-text-primary hover:border-brand-indigo font-semibold text-sm transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
