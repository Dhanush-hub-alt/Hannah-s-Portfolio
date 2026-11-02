"use client";

import React, { useState } from "react";
import { Cpu, Radio, CloudFog, AlertTriangle, ShieldCheck, Zap, Activity } from "lucide-react";

export function ArchitectureDiagram() {
 const [simulationMode, setSimulationMode] = useState<"clear" | "fog">("fog");
 const isFog = simulationMode === "fog";

 return (
 <div className="w-full rounded-2xl bg-theme-surface border border-theme-border p-4 sm:p-6 shadow-sm">
 {/* Header and Toggle Controls */}
 <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-theme-border">
 <div>
 <div className="flex items-center gap-2">
 <span className="w-2 h-2 rounded-full bg-theme-accent" />
 <span className="text-[10px] tracking-widest uppercase text-theme-accent font-bold">
 System Architecture
 </span>
 </div>
 <h4 className="text-base sm:text-lg font-bold text-theme-primary mt-1">
 Offline Multi-Sensor Highway Safety Pipeline
 </h4>
 </div>

 <div className="flex items-center gap-1.5 bg-theme-surfaceSecondary p-1 rounded-xl border border-theme-border text-xs">
 <button
 onClick={() => setSimulationMode("clear")}
 className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
 !isFog
 ? "bg-theme-accent text-white"
 : "text-theme-muted hover:text-theme-primary"
 }`}
 >
 Clear Weather
 </button>
 <button
 onClick={() => setSimulationMode("fog")}
 className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
 isFog
 ? "bg-theme-accent text-white"
 : "text-theme-muted hover:text-theme-primary"
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
 ? "bg-theme-accent/10 border-theme-accent text-theme-primary"
 : "bg-theme-surfaceSecondary border-theme-border text-theme-secondary"
 }`}
 >
 <div className="flex items-center gap-2 font-medium">
 {isFog ? (
 <AlertTriangle className="w-4 h-4 text-theme-accent shrink-0" />
 ) : (
 <ShieldCheck className="w-4 h-4 text-theme-accent shrink-0" />
 )}
 <span>
 {isFog
 ? "Visibility < 60m: Adaptive buffer expanded by 2.2x. Early deceleration threshold active."
 : "Visibility Normal: Standard highway headway buffer active. Continuous radar pinging."}
 </span>
 </div>
 <span className="hidden sm:inline-block text-xs px-2 py-0.5 rounded bg-theme-surface border border-theme-border text-theme-accent font-bold">
 Latency: &lt; 12ms
 </span>
 </div>

 {/* Flow Architecture Visual Grid */}
 <div className="grid grid-cols-1 md:grid-cols-4 gap-3 relative mt-5">
 {/* Step 1: Physical Perception */}
 <div className="rounded-xl bg-theme-surfaceSecondary border border-theme-border p-4 flex flex-col justify-between hover:border-theme-accent transition-all">
 <div>
 <div className="w-8 h-8 rounded-lg bg-theme-surface border border-theme-border text-theme-accent flex items-center justify-center mb-3 font-bold">
 <Radio className="w-4 h-4" />
 </div>
 <span className="text-[10px] tracking-wider text-theme-accent uppercase font-bold">
 Input 01
 </span>
 <h5 className="text-sm font-bold text-theme-primary mt-0.5">
 77 GHz Radar
 </h5>
 <p className="text-xs text-theme-secondary mt-1 leading-relaxed">
 Penetrates rain, fog, and darkness to capture distance and velocity.
 </p>
 </div>
 <div className="mt-3 pt-2 border-t border-theme-border text-[11px] text-theme-accent font-bold">
 Echo: {isFog ? "42m @ 68 km/h" : "95m @ 80 km/h"}
 </div>
 </div>

 {/* Step 2: Environmental Sensing */}
 <div className="rounded-xl bg-theme-surfaceSecondary border border-theme-border p-4 flex flex-col justify-between hover:border-theme-accent transition-all">
 <div>
 <div className="w-8 h-8 rounded-lg bg-theme-surface border border-theme-border text-theme-accent flex items-center justify-center mb-3 font-bold">
 <CloudFog className="w-4 h-4" />
 </div>
 <span className="text-[10px] tracking-wider text-theme-accent uppercase font-bold">
 Input 02
 </span>
 <h5 className="text-sm font-bold text-theme-primary mt-0.5">
 Fog / Optical
 </h5>
 <p className="text-xs text-theme-secondary mt-1 leading-relaxed">
 Monitors backscatter and optical attenuation for ambient visibility.
 </p>
 </div>
 <div className="mt-3 pt-2 border-t border-theme-border text-[11px] text-theme-primary">
 Index: {isFog ? "Heavy Fog (0.28)" : "Clear (0.95)"}
 </div>
 </div>

 {/* Step 3: Edge Fusion Engine */}
 <div className="rounded-xl bg-theme-surfaceSecondary border border-theme-border p-4 flex flex-col justify-between hover:border-theme-accent transition-all">
 <div>
 <div className="w-8 h-8 rounded-lg bg-theme-surface border border-theme-border text-theme-accent flex items-center justify-center mb-3 font-bold">
 <Cpu className="w-4 h-4" />
 </div>
 <span className="text-[10px] tracking-wider text-theme-accent uppercase font-bold">
 Edge Core
 </span>
 <h5 className="text-sm font-bold text-theme-primary mt-0.5">
 ESP32 &amp; Pi
 </h5>
 <p className="text-xs text-theme-secondary mt-1 leading-relaxed">
 Offline sensor fusion synthesizes trajectory with visibility data.
 </p>
 </div>
 <div className="mt-3 pt-2 border-t border-theme-border text-[11px] text-theme-accent flex items-center gap-1 font-bold">
 <Zap className="w-3 h-3 text-theme-accent" />
 <span>Zero-Network Edge</span>
 </div>
 </div>

 {/* Step 4: Decision & Warning Engine */}
 <div
 className={`rounded-xl border p-4 flex flex-col justify-between transition-all ${
 isFog
 ? "bg-theme-accent/10 border-theme-accent"
 : "bg-theme-surfaceSecondary border-theme-border"
 }`}
 >
 <div>
 <div
 className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${
 isFog
 ? "bg-theme-accent text-white font-bold"
 : "bg-theme-surface text-theme-accent border border-theme-border"
 }`}
 >
 {isFog ? (
 <AlertTriangle className="w-4 h-4" />
 ) : (
 <Activity className="w-4 h-4" />
 )}
 </div>
 <span className="text-[10px] tracking-wider text-theme-accent uppercase font-bold">
 Action
 </span>
 <h5 className="text-sm font-bold text-theme-primary mt-0.5">
 Warning Response
 </h5>
 <p className="text-xs text-theme-secondary mt-1 leading-relaxed">
 {isFog
 ? "Immediate visual warning & audible buzzer triggered."
 : "Safe headway maintained. Continuous telemetry."}
 </p>
 </div>
 <div
 className={`mt-3 pt-2 border-t text-[11px] font-bold ${
 isFog
 ? "border-theme-accent/30 text-theme-accent"
 : "border-theme-border text-theme-muted"
 }`}
 >
 Status: {isFog ? "PILEUP ALERT" : "MONITORING"}
 </div>
 </div>
 </div>
 </div>
 );
}
