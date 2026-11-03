"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Project } from "@/types";
import { X, CheckCircle2, Cpu, Calendar, Tag, Image as ImageIcon } from "lucide-react";

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
    if (id === "vehicle-ai-pileup-avoidance") return "/images/project_vehicle_radar_ai.jpg";
    if (id === "ai-healthcare-disease-analysis") return "/images/project_healthcare_analytics.jpg";
    return "/images/project_water_ozonolysis.jpg";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
      {/* Dark Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card (Scrollable without visible scrollbar line) */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-theme-surface border border-theme-border p-5 sm:p-8 z-10 shadow-2xl no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 rounded-full bg-theme-surfaceSecondary border border-theme-border flex items-center justify-center text-theme-secondary hover:text-theme-accent hover:border-theme-accent transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="pr-12">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs font-bold px-3 py-1 rounded-md bg-theme-accent text-white">
              PROJECT {project.number}
            </span>
            <span className="text-xs px-2.5 py-1 rounded-md bg-theme-surfaceSecondary text-theme-secondary border border-theme-border flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-theme-accent" />
              {project.year}
            </span>
            <span className="text-xs px-2.5 py-1 rounded-md bg-theme-surfaceSecondary text-theme-secondary border border-theme-border flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-theme-accent" />
              {project.category}
            </span>
            <span className="text-xs px-2.5 py-1 rounded-md bg-theme-accent/10 text-theme-accent border border-theme-accent/30 font-bold">
              {project.status}
            </span>
          </div>

          <h3 className="text-xl sm:text-3xl font-extrabold text-theme-primary tracking-tight">
            {project.title}
          </h3>
          <p className="mt-2 text-theme-secondary text-sm sm:text-base leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="mt-6 pt-5 border-t border-theme-border">
          <div className="text-xs uppercase tracking-wider text-theme-accent mb-2.5 font-bold">
            Engineered With
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-semibold rounded-lg bg-theme-surfaceSecondary border border-theme-border text-theme-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* High-Resolution System Visual Graphic */}
        <div className="mt-8">
          <div className="text-xs uppercase tracking-wider text-theme-accent mb-3 flex items-center gap-2 font-bold">
            <ImageIcon className="w-4 h-4 text-theme-accent" />
            AI System Visual Representation
          </div>
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-theme-surfaceSecondary border border-theme-border shadow-card">
            <Image
              src={getProjectImage(project.id)}
              alt={`${project.title} Representation`}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Detailed Overview */}
        <div className="mt-8 space-y-3">
          <h4 className="text-lg font-bold text-theme-primary">System Overview</h4>
          <p className="text-theme-secondary text-sm sm:text-base leading-relaxed">
            {project.detailedOverview}
          </p>
        </div>

        {/* Key Functionality & Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
          <div className="p-5 rounded-2xl bg-theme-surfaceSecondary border border-theme-border">
            <h5 className="text-sm font-bold text-theme-primary mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-theme-accent" />
              Key Functionality
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm text-theme-secondary">
              {project.keyFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-theme-accent mt-1.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-theme-surfaceSecondary border border-theme-border">
            <h5 className="text-sm font-bold text-theme-primary mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-theme-accent" />
              Technical Architecture Highlights
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm text-theme-secondary">
              {project.architecturePoints.map((arch, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-theme-accent mt-1.5 shrink-0" />
                  <span>{arch}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Bottom Close */}
        <div className="mt-8 pt-5 border-t border-theme-border flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-theme-accent text-white font-bold text-sm hover:bg-theme-accentHover transition-colors border-none"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
