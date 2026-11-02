"use client";

import React, { useState } from "react";
import { Droplet, Beaker, Atom, Sparkles, Binary, Activity } from "lucide-react";

export function WaterPurificationDiagram() {
  const [activeStage, setActiveStage] = useState<number>(1);

  const stages = [
    {
      id: 1,
      title: "Ozone Gas Contact",
      badge: "Stage 01",
      icon: Atom,
      description:
        "Ozone (O3) microbubbles are injected into aqueous samples containing persistent organic pollutant compounds.",
      highlight: "O3 Mass Transfer & Dissolution",
      computationalNote: "Calculated mass transfer coefficients in MATLAB for reactor sizing.",
    },
    {
      id: 2,
      title: "Oxidative Cleavage",
      badge: "Stage 02",
      icon: Sparkles,
      description:
        "Direct ozonolysis and secondary hydroxyl radical (·OH) reactions cleave unsaturated carbon double bonds in pollutant molecules.",
      highlight: "Electrophilic Attack on C=C Bonds",
      computationalNote: "Kinetic decay reaction models plotted using Python NumPy and Matplotlib.",
    },
    {
      id: 3,
      title: "Contaminant Degradation",
      badge: "Stage 03",
      icon: Beaker,
      description:
        "Harmful complex refractory compounds undergo molecular breakdown into simpler organic intermediates and mineralized products.",
      highlight: "Organic Pollutant Reduction",
      computationalNote: "Empirical spectrophotometric data validation to assess compound reduction.",
    },
    {
      id: 4,
      title: "Enhanced Water Quality",
      badge: "Stage 04",
      icon: Droplet,
      description:
        "Purified aqueous medium exhibits marked reduction in organic pollutant burden, enhancing safety and overall water quality.",
      highlight: "Treated & Stabilized Effluent",
      computationalNote: "Multi-parameter comparative regression analysis across varied contact durations.",
    },
  ];

  const currentStageData = stages.find((s) => s.id === activeStage) || stages[0];

  return (
    <div className="w-full rounded-2xl bg-theme-surface border border-theme-border p-4 sm:p-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-theme-border">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-theme-surfaceSecondary border border-theme-border text-theme-accent flex items-center justify-center font-bold">
            <Droplet className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono tracking-wider uppercase text-theme-accent font-bold">
              Scientific Modeling
            </span>
            <h4 className="text-base sm:text-lg font-bold text-theme-primary">
              Ozonolysis Reaction Mechanics &amp; Cleavage
            </h4>
          </div>
        </div>

        <div className="text-xs text-theme-accent font-mono px-3 py-1.5 rounded-lg bg-theme-surfaceSecondary border border-theme-border flex items-center gap-1.5 font-bold">
          <Binary className="w-3.5 h-3.5" />
          <span>Python + MATLAB</span>
        </div>
      </div>

      {/* Interactive Step Navigator */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-5">
        {stages.map((stage) => {
          const Icon = stage.icon;
          const isActive = stage.id === activeStage;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStage(stage.id)}
              className={`p-3 rounded-xl border text-left transition-all ${
                isActive
                  ? "bg-theme-accent text-white border-theme-accent font-bold"
                  : "bg-theme-surfaceSecondary border-theme-border text-theme-secondary hover:text-theme-primary"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span
                  className={`text-[10px] font-mono uppercase ${
                    isActive ? "text-white font-extrabold" : "text-theme-accent"
                  }`}
                >
                  {stage.badge}
                </span>
                <Icon
                  className={`w-4 h-4 ${
                    isActive ? "text-white" : "text-theme-accent"
                  }`}
                />
              </div>
              <div
                className={`text-xs leading-tight ${
                  isActive ? "text-white font-extrabold" : "text-theme-primary font-semibold"
                }`}
              >
                {stage.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Stage Deep Dive */}
      <div className="p-4 rounded-xl bg-theme-surfaceSecondary border border-theme-border grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-theme-accent font-bold">
            Mechanism
          </span>
          <h5 className="text-sm font-bold text-theme-primary mt-1">
            {currentStageData.highlight}
          </h5>
          <p className="text-xs text-theme-secondary mt-2 leading-relaxed">
            {currentStageData.description}
          </p>
        </div>

        <div className="rounded-lg bg-theme-surface p-3.5 border border-theme-border flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-theme-accent text-xs font-bold">
              <Activity className="w-3.5 h-3.5" />
              Computational &amp; Lab Modeling Focus
            </div>
            <p className="text-xs text-theme-secondary mt-2 leading-relaxed">
              {currentStageData.computationalNote}
            </p>
          </div>
          <div className="mt-3 pt-2 border-t border-theme-border flex items-center justify-between text-[11px] text-theme-muted font-mono">
            <span>Python | MATLAB</span>
            <span className="text-theme-accent font-bold">Validated</span>
          </div>
        </div>
      </div>
    </div>
  );
}
