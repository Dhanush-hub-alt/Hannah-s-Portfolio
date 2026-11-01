"use client";

import React, { useState } from "react";
import { Cpu, Radio, CloudFog, AlertTriangle, ShieldCheck, Zap, Activity } from "lucide-react";

export function ArchitectureDiagram() {
  const [simulationMode, setSimulationMode] = useState<"clear" | "fog">("fog");

  const isFog = simulationMode === "fog";

  return (
    <div className="w-full rounded-2xl bg-zinc-950 border border-white/10 p-5 md:p-6 backdrop-blur-sm">
      {/* Header and Toggle Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-white font-bold">
              Interactive System Architecture
            </span>
          </div>
          <h4 className="text-lg font-bold text-white mt-1">
            Offline Multi-Sensor Highway Safety Pipeline
          </h4>
        </div>

        <div className="flex items-center gap-2 bg-black p-1 rounded-xl border border-white/15 text-xs">
          <button
            onClick={() => setSimulationMode("clear")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              !isFog
                ? "bg-white text-black shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Clear Weather
          </button>
          <button
            onClick={() => setSimulationMode("fog")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
              isFog
                ? "bg-white text-black shadow-sm"
                : "text-zinc-400 hover:text-white"
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
            ? "bg-white/[0.06] border-white/30 text-white"
            : "bg-zinc-900 border-white/10 text-zinc-300"
        }`}
      >
        <div className="flex items-center gap-2">
          {isFog ? (
            <AlertTriangle className="w-4 h-4 text-white shrink-0" />
          ) : (
            <ShieldCheck className="w-4 h-4 text-zinc-400 shrink-0" />
          )}
          <span>
            {isFog
              ? "Visibility < 60m: Adaptive buffer expanded by 2.2x. Early deceleration threshold active."
              : "Visibility Normal: Standard highway headway buffer active. Continuous radar pinging."}
          </span>
        </div>
        <span className="hidden sm:inline-block font-mono text-xs px-2 py-0.5 rounded bg-black border border-white/20 text-white">
          Latency: &lt; 12ms
        </span>
      </div>

      {/* Flow Architecture Visual Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 relative mt-6">
        {/* Step 1: Physical Perception */}
        <div className="rounded-xl bg-zinc-900/90 border border-white/10 p-4 flex flex-col justify-between hover:border-white/40 transition-all">
          <div>
            <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center mb-3">
              <Radio className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase">
              Input Layer 01
            </span>
            <h5 className="text-sm font-bold text-white mt-0.5">
              77 GHz mmWave Radar
            </h5>
            <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
              Penetrates rain, fog, and darkness to capture target distance and relative velocity.
            </p>
          </div>
          <div className="mt-3 pt-2 border-t border-white/10 font-mono text-[11px] text-white">
            Target Echo: {isFog ? "42m @ 68 km/h" : "95m @ 80 km/h"}
          </div>
        </div>

        {/* Step 2: Environmental Sensing */}
        <div className="rounded-xl bg-zinc-900/90 border border-white/10 p-4 flex flex-col justify-between hover:border-white/40 transition-all">
          <div>
            <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center mb-3">
              <CloudFog className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase">
              Input Layer 02
            </span>
            <h5 className="text-sm font-bold text-white mt-0.5">
              Fog / Optical Sensor
            </h5>
            <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
              Monitors atmospheric backscatter and optical attenuation for ambient visibility.
            </p>
          </div>
          <div className="mt-3 pt-2 border-t border-white/10 font-mono text-[11px] text-zinc-300">
            Atmospheric Index: {isFog ? "Heavy Fog (0.28)" : "Clear (0.95)"}
          </div>
        </div>

        {/* Step 3: Edge Fusion Engine */}
        <div className="rounded-xl bg-zinc-900/90 border border-white/10 p-4 flex flex-col justify-between hover:border-white/40 transition-all">
          <div>
            <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center mb-3">
              <Cpu className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase">
              Processing Core
            </span>
            <h5 className="text-sm font-bold text-white mt-0.5">
              ESP32 & Raspberry Pi
            </h5>
            <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
              Offline sensor fusion algorithms synthesize radar trajectory with visibility scalars.
            </p>
          </div>
          <div className="mt-3 pt-2 border-t border-white/10 font-mono text-[11px] text-white flex items-center gap-1">
            <Zap className="w-3 h-3 text-white" />
            <span>Zero-Network Edge</span>
          </div>
        </div>

        {/* Step 4: Decision & Warning Engine */}
        <div
          className={`rounded-xl border p-4 flex flex-col justify-between transition-all ${
            isFog
              ? "bg-white/[0.08] border-white/40"
              : "bg-zinc-900/90 border-white/10"
          }`}
        >
          <div>
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${
                isFog
                  ? "bg-white text-black"
                  : "bg-zinc-800 text-white"
              }`}
            >
              {isFog ? (
                <AlertTriangle className="w-4 h-4" />
              ) : (
                <Activity className="w-4 h-4" />
              )}
            </div>
            <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase">
              Safety Action
            </span>
            <h5 className="text-sm font-bold text-white mt-0.5">
              Warning Response
            </h5>
            <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
              {isFog
                ? "Immediate visual warning & audible buzzer triggered: Impending slowdown risk."
                : "Safe headway maintained. Continuous telemetry validation."}
            </p>
          </div>
          <div
            className={`mt-3 pt-2 border-t font-mono text-[11px] font-bold ${
              isFog
                ? "border-white/20 text-white"
                : "border-white/10 text-zinc-400"
            }`}
          >
            Status: {isFog ? "TRIGGER PILEUP ALERT" : "MONITORING ACTIVE"}
          </div>
        </div>
      </div>

      {/* Legend Footer */}
      <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] text-zinc-500 gap-2">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-white" /> 77 GHz mmWave Sensor
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-zinc-400" /> Visibility Attenuation Filter
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-zinc-600" /> ESP32/Pi Offline Fusion
        </span>
        <span className="text-zinc-400">
          Target Domain: Remote & Low-Connectivity Highways
        </span>
      </div>
    </div>
  );
}
