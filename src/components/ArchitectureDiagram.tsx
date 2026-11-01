"use client";

import React, { useState } from "react";
import { Cpu, Radio, CloudFog, AlertTriangle, ShieldCheck, Zap, Activity } from "lucide-react";

export function ArchitectureDiagram() {
  const [simulationMode, setSimulationMode] = useState<"clear" | "fog">("fog");

  const isFog = simulationMode === "fog";

  return (
    <div className="w-full rounded-2xl bg-bg-elevated/80 border border-border-subtle p-5 md:p-6 backdrop-blur-sm">
      {/* Header and Toggle Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-border-subtle">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
            <span className="text-xs font-semibold tracking-wider uppercase text-brand-cyan">
              Interactive System Architecture
            </span>
          </div>
          <h4 className="text-lg font-bold text-text-primary mt-1">
            Offline Multi-Sensor Highway Safety Pipeline
          </h4>
        </div>

        <div className="flex items-center gap-2 bg-bg-card p-1 rounded-xl border border-border-subtle text-xs">
          <button
            onClick={() => setSimulationMode("clear")}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              !isFog
                ? "bg-brand-indigo text-white shadow-sm"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            Clear Weather
          </button>
          <button
            onClick={() => setSimulationMode("fog")}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
              isFog
                ? "bg-brand-violet text-white shadow-sm"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            <CloudFog className="w-3.5 h-3.5" />
            Dense Fog Condition
          </button>
        </div>
      </div>

      {/* Dynamic Condition Banner */}
      <div
        className={`my-4 p-3 rounded-xl border text-xs sm:text-sm flex items-center justify-between transition-colors ${
          isFog
            ? "bg-amber-500/10 border-amber-500/30 text-amber-200"
            : "bg-emerald-500/10 border-emerald-500/30 text-emerald-200"
        }`}
      >
        <div className="flex items-center gap-2">
          {isFog ? (
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
          ) : (
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          )}
          <span>
            {isFog
              ? "Visibility < 60m: Adaptive buffer expanded by 2.2x. Early deceleration threshold active."
              : "Visibility Normal: Standard highway headway buffer active. Continuous radar pinging."}
          </span>
        </div>
        <span className="hidden sm:inline-block font-mono text-xs px-2 py-0.5 rounded bg-bg-main/60 border border-white/10">
          Latency: &lt; 12ms
        </span>
      </div>

      {/* Flow Architecture Visual Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 relative mt-6">
        {/* Step 1: Physical Perception */}
        <div className="rounded-xl bg-bg-card/90 border border-border-subtle p-4 flex flex-col justify-between hover:border-brand-indigo/50 transition-all">
          <div>
            <div className="w-8 h-8 rounded-lg bg-brand-indigo/20 text-brand-indigo flex items-center justify-center mb-3">
              <Radio className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono tracking-wider text-text-muted uppercase">
              Input Layer 01
            </span>
            <h5 className="text-sm font-bold text-text-primary mt-0.5">
              77 GHz mmWave Radar
            </h5>
            <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
              Penetrates rain, fog, and darkness to capture target distance and relative velocity.
            </p>
          </div>
          <div className="mt-3 pt-2 border-t border-white/5 font-mono text-[11px] text-brand-cyan">
            Target Echo: {isFog ? "42m @ 68 km/h" : "95m @ 80 km/h"}
          </div>
        </div>

        {/* Step 2: Environmental Sensing */}
        <div className="rounded-xl bg-bg-card/90 border border-border-subtle p-4 flex flex-col justify-between hover:border-brand-violet/50 transition-all">
          <div>
            <div className="w-8 h-8 rounded-lg bg-brand-violet/20 text-brand-violet flex items-center justify-center mb-3">
              <CloudFog className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono tracking-wider text-text-muted uppercase">
              Input Layer 02
            </span>
            <h5 className="text-sm font-bold text-text-primary mt-0.5">
              Fog / Optical Sensor
            </h5>
            <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
              Monitors atmospheric backscatter and optical attenuation for ambient visibility.
            </p>
          </div>
          <div className="mt-3 pt-2 border-t border-white/5 font-mono text-[11px] text-brand-violet">
            Atmospheric Index: {isFog ? "Heavy Fog (0.28)" : "Clear (0.95)"}
          </div>
        </div>

        {/* Step 3: Edge Fusion Engine */}
        <div className="rounded-xl bg-bg-card/90 border border-border-subtle p-4 flex flex-col justify-between hover:border-brand-cyan/50 transition-all">
          <div>
            <div className="w-8 h-8 rounded-lg bg-brand-cyan/20 text-brand-cyan flex items-center justify-center mb-3">
              <Cpu className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono tracking-wider text-text-muted uppercase">
              Processing Core
            </span>
            <h5 className="text-sm font-bold text-text-primary mt-0.5">
              ESP32 & Raspberry Pi
            </h5>
            <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
              Offline sensor fusion algorithms synthesize radar trajectory with visibility scalars.
            </p>
          </div>
          <div className="mt-3 pt-2 border-t border-white/5 font-mono text-[11px] text-brand-cyan flex items-center gap-1">
            <Zap className="w-3 h-3 text-amber-400" />
            <span>Zero-Network Edge</span>
          </div>
        </div>

        {/* Step 4: Decision & Warning Engine */}
        <div
          className={`rounded-xl border p-4 flex flex-col justify-between transition-all ${
            isFog
              ? "bg-amber-500/10 border-amber-500/40"
              : "bg-bg-card/90 border-border-subtle"
          }`}
        >
          <div>
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${
                isFog
                  ? "bg-amber-500/20 text-amber-400"
                  : "bg-emerald-500/20 text-emerald-400"
              }`}
            >
              {isFog ? (
                <AlertTriangle className="w-4 h-4" />
              ) : (
                <Activity className="w-4 h-4" />
              )}
            </div>
            <span className="text-[10px] font-mono tracking-wider text-text-muted uppercase">
              Safety Action
            </span>
            <h5 className="text-sm font-bold text-text-primary mt-0.5">
              Warning Response
            </h5>
            <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
              {isFog
                ? "Immediate visual warning & audible buzzer triggered: Impending slowdown risk."
                : "Safe headway maintained. Continuous telemetry validation."}
            </p>
          </div>
          <div
            className={`mt-3 pt-2 border-t font-mono text-[11px] font-semibold ${
              isFog
                ? "border-amber-500/30 text-amber-300"
                : "border-white/5 text-emerald-400"
            }`}
          >
            Status: {isFog ? "TRIGGER PILEUP ALERT" : "MONITORING ACTIVE"}
          </div>
        </div>
      </div>

      {/* Legend Footer */}
      <div className="mt-4 pt-3 border-t border-border-subtle flex flex-wrap items-center justify-between text-[11px] text-text-muted gap-2">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-brand-indigo" /> 77 GHz mmWave Sensor
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-brand-violet" /> Visibility Attenuation Filter
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-brand-cyan" /> ESP32/Pi Offline Fusion
        </span>
        <span className="text-text-secondary">
          Target Domain: Remote & Low-Connectivity Highways
        </span>
      </div>
    </div>
  );
}
