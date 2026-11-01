"use client";

import React, { useState } from "react";
import { Cpu, Radio, CloudFog, AlertTriangle, ShieldCheck, Zap, Activity } from "lucide-react";

export function ArchitectureDiagram() {
  const [simulationMode, setSimulationMode] = useState<"clear" | "fog">("fog");

  const isFog = simulationMode === "fog";

  return (
    <div className="w-full rounded-2xl bg-black border border-[#00EA64]/30 p-4 sm:p-6">
      {/* Header and Toggle Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#00EA64]/20">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00EA64]" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#00EA64] font-bold">
              Interactive System Architecture
            </span>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-1">
            Offline Multi-Sensor Highway Safety Pipeline
          </h4>
        </div>

        <div className="flex items-center gap-1.5 bg-black p-1 rounded-xl border border-[#00EA64]/30 text-xs">
          <button
            onClick={() => setSimulationMode("clear")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              !isFog
                ? "bg-[#00EA64] text-black"
                : "text-[#A7F3D0] hover:text-white"
            }`}
          >
            Clear Weather
          </button>
          <button
            onClick={() => setSimulationMode("fog")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
              isFog
                ? "bg-[#00EA64] text-black"
                : "text-[#A7F3D0] hover:text-white"
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
            ? "bg-black border-[#00EA64] text-white"
            : "bg-black border-[#00EA64]/20 text-[#A7F3D0]"
        }`}
      >
        <div className="flex items-center gap-2 font-medium">
          {isFog ? (
            <AlertTriangle className="w-4 h-4 text-[#00EA64] shrink-0" />
          ) : (
            <ShieldCheck className="w-4 h-4 text-[#00EA64] shrink-0" />
          )}
          <span>
            {isFog
              ? "Visibility < 60m: Adaptive buffer expanded by 2.2x. Early deceleration threshold active."
              : "Visibility Normal: Standard highway headway buffer active. Continuous radar pinging."}
          </span>
        </div>
        <span className="hidden sm:inline-block font-mono text-xs px-2 py-0.5 rounded bg-black border border-[#00EA64]/30 text-[#00EA64] font-bold">
          Latency: &lt; 12ms
        </span>
      </div>

      {/* Flow Architecture Visual Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 relative mt-5">
        {/* Step 1: Physical Perception */}
        <div className="rounded-xl bg-black border border-[#00EA64]/20 p-4 flex flex-col justify-between hover:border-[#00EA64] transition-all">
          <div>
            <div className="w-8 h-8 rounded-lg bg-black border border-[#00EA64]/30 text-[#00EA64] flex items-center justify-center mb-3 font-bold">
              <Radio className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono tracking-wider text-[#00EA64] uppercase font-bold">
              Input Layer 01
            </span>
            <h5 className="text-sm font-bold text-white mt-0.5">
              77 GHz mmWave Radar
            </h5>
            <p className="text-xs text-[#A7F3D0] mt-1.5 leading-relaxed">
              Penetrates rain, fog, and darkness to capture target distance and relative velocity.
            </p>
          </div>
          <div className="mt-3 pt-2 border-t border-[#00EA64]/20 font-mono text-[11px] text-[#00EA64] font-bold">
            Target Echo: {isFog ? "42m @ 68 km/h" : "95m @ 80 km/h"}
          </div>
        </div>

        {/* Step 2: Environmental Sensing */}
        <div className="rounded-xl bg-black border border-[#00EA64]/20 p-4 flex flex-col justify-between hover:border-[#00EA64] transition-all">
          <div>
            <div className="w-8 h-8 rounded-lg bg-black border border-[#00EA64]/30 text-[#00EA64] flex items-center justify-center mb-3 font-bold">
              <CloudFog className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono tracking-wider text-[#00EA64] uppercase font-bold">
              Input Layer 02
            </span>
            <h5 className="text-sm font-bold text-white mt-0.5">
              Fog / Optical Sensor
            </h5>
            <p className="text-xs text-[#A7F3D0] mt-1.5 leading-relaxed">
              Monitors atmospheric backscatter and optical attenuation for ambient visibility.
            </p>
          </div>
          <div className="mt-3 pt-2 border-t border-[#00EA64]/20 font-mono text-[11px] text-white">
            Atmospheric Index: {isFog ? "Heavy Fog (0.28)" : "Clear (0.95)"}
          </div>
        </div>

        {/* Step 3: Edge Fusion Engine */}
        <div className="rounded-xl bg-black border border-[#00EA64]/20 p-4 flex flex-col justify-between hover:border-[#00EA64] transition-all">
          <div>
            <div className="w-8 h-8 rounded-lg bg-black border border-[#00EA64]/30 text-[#00EA64] flex items-center justify-center mb-3 font-bold">
              <Cpu className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono tracking-wider text-[#00EA64] uppercase font-bold">
              Processing Core
            </span>
            <h5 className="text-sm font-bold text-white mt-0.5">
              ESP32 &amp; Raspberry Pi
            </h5>
            <p className="text-xs text-[#A7F3D0] mt-1.5 leading-relaxed">
              Offline sensor fusion algorithms synthesize radar trajectory with visibility scalars.
            </p>
          </div>
          <div className="mt-3 pt-2 border-t border-[#00EA64]/20 font-mono text-[11px] text-[#00EA64] flex items-center gap-1 font-bold">
            <Zap className="w-3 h-3 text-[#00EA64]" />
            <span>Zero-Network Edge</span>
          </div>
        </div>

        {/* Step 4: Decision & Warning Engine */}
        <div
          className={`rounded-xl border p-4 flex flex-col justify-between transition-all ${
            isFog
              ? "bg-black border-[#00EA64]"
              : "bg-black border-[#00EA64]/20"
          }`}
        >
          <div>
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${
                isFog
                  ? "bg-[#00EA64] text-black font-bold"
                  : "bg-black border border-[#00EA64]/30 text-[#00EA64]"
              }`}
            >
              {isFog ? (
                <AlertTriangle className="w-4 h-4" />
              ) : (
                <Activity className="w-4 h-4" />
              )}
            </div>
            <span className="text-[10px] font-mono tracking-wider text-[#00EA64] uppercase font-bold">
              Safety Action
            </span>
            <h5 className="text-sm font-bold text-white mt-0.5">
              Warning Response
            </h5>
            <p className="text-xs text-white/90 mt-1.5 leading-relaxed">
              {isFog
                ? "Immediate visual warning & audible buzzer triggered: Impending slowdown risk."
                : "Safe headway maintained. Continuous telemetry validation."}
            </p>
          </div>
          <div
            className={`mt-3 pt-2 border-t font-mono text-[11px] font-bold ${
              isFog
                ? "border-[#00EA64]/30 text-[#00EA64]"
                : "border-[#00EA64]/20 text-[#A7F3D0]"
            }`}
          >
            Status: {isFog ? "TRIGGER PILEUP ALERT" : "MONITORING ACTIVE"}
          </div>
        </div>
      </div>

      {/* Legend Footer */}
      <div className="mt-4 pt-3 border-t border-[#00EA64]/20 flex flex-wrap items-center justify-between text-[11px] text-[#A7F3D0] gap-2">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#00EA64]" /> 77 GHz mmWave Sensor
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-white" /> Visibility Attenuation Filter
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#10E56A]" /> ESP32/Pi Offline Fusion
        </span>
        <span className="text-white font-medium">
          Target Domain: Remote &amp; Low-Connectivity Highways
        </span>
      </div>
    </div>
  );
}
