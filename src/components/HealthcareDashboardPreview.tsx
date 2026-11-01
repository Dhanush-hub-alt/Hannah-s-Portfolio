"use client";

import React, { useState } from "react";
import { BarChart3, TrendingUp, AlertCircle, CheckCircle2, Layers } from "lucide-react";

export function HealthcareDashboardPreview() {
  const [activeTab, setActiveTab] = useState<"overview" | "dax" | "anomalies">("overview");

  return (
    <div className="w-full rounded-2xl bg-black border border-[#00EA64]/30 p-4 sm:p-6">
      {/* Header and Filter Tab Switcher */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#00EA64]/20">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-black border border-[#00EA64]/30 text-[#00EA64] flex items-center justify-center font-bold">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono tracking-wider uppercase text-[#00EA64] font-bold">
              Power BI &amp; DAX Intelligence Suite
            </span>
            <h4 className="text-base sm:text-lg font-bold text-white">
              Patient Disease Analytics &amp; Anomaly Detection
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-1.5 bg-black p-1 rounded-xl border border-[#00EA64]/30 text-xs">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTab === "overview"
                ? "bg-[#00EA64] text-black"
                : "text-[#A7F3D0] hover:text-white"
            }`}
          >
            Dashboard View
          </button>
          <button
            onClick={() => setActiveTab("dax")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTab === "dax"
                ? "bg-[#00EA64] text-black"
                : "text-[#A7F3D0] hover:text-white"
            }`}
          >
            DAX Measures
          </button>
          <button
            onClick={() => setActiveTab("anomalies")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTab === "anomalies"
                ? "bg-[#00EA64] text-black"
                : "text-[#A7F3D0] hover:text-white"
            }`}
          >
            Anomaly Validation
          </button>
        </div>
      </div>

      {/* Tab 1: Overview Dashboard */}
      {activeTab === "overview" && (
        <div className="mt-5 space-y-4">
          {/* Key Metric Tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl bg-black border border-[#00EA64]/20">
              <span className="text-[11px] text-[#A7F3D0] uppercase font-bold">
                Analysis Scope
              </span>
              <div className="text-lg font-bold text-white mt-1">Multi-Cohort</div>
              <div className="text-[10px] text-[#00EA64] mt-0.5 flex items-center gap-1 font-semibold">
                <CheckCircle2 className="w-3 h-3 text-[#00EA64]" /> Historical &amp; Current
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-black border border-[#00EA64]/20">
              <span className="text-[11px] text-[#A7F3D0] uppercase font-bold">
                DAX Variance Index
              </span>
              <div className="text-lg font-bold text-[#00EA64] mt-1">± 2.45 σ</div>
              <div className="text-[10px] text-[#A7F3D0] mt-0.5">
                Dynamic threshold
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-black border border-[#00EA64]/20">
              <span className="text-[11px] text-[#A7F3D0] uppercase font-bold">
                Metric Tracking
              </span>
              <div className="text-lg font-bold text-white mt-1">Continuous</div>
              <div className="text-[10px] text-[#00EA64] mt-0.5 flex items-center gap-1 font-semibold">
                <TrendingUp className="w-3 h-3 text-[#00EA64]" /> Trend Validated
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-black border border-[#00EA64]/20">
              <span className="text-[11px] text-[#A7F3D0] uppercase font-bold">
                Reporting State
              </span>
              <div className="text-lg font-bold text-white mt-1">Interactive</div>
              <div className="text-[10px] text-[#A7F3D0] mt-0.5">
                Drill-down enabled
              </div>
            </div>
          </div>

          {/* Simulated Analytical Trend Bars */}
          <div className="p-4 rounded-xl bg-black border border-[#00EA64]/20">
            <div className="flex items-center justify-between mb-3 text-xs">
              <span className="font-bold text-white flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#00EA64]" /> Health Metric Longitudinal Trend Profile
              </span>
              <span className="text-[#A7F3D0] font-mono text-[11px]">Normalized Baseline vs Variance</span>
            </div>

            <div className="space-y-2.5">
              {[
                { label: "Cohort Metric A (Cardiovascular Indicators)", val: 78, status: "Normal", color: "bg-[#00EA64]" },
                { label: "Cohort Metric B (Metabolic & Glycemic Profile)", val: 92, status: "Variance Flagged", color: "bg-white" },
                { label: "Cohort Metric C (Respiratory & Oxygenation Index)", val: 64, status: "Normal", color: "bg-[#10E56A]" },
                { label: "Cohort Metric D (Longitudinal Stability Index)", val: 86, status: "Normal", color: "bg-[#00EA64]/70" },
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-[#A7F3D0]">{item.label}</span>
                    <span className={item.status.includes("Flagged") ? "text-white font-bold" : "text-[#00EA64]"}>
                      {item.status}
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-black overflow-hidden border border-[#00EA64]/20">
                    <div
                      className={`h-full rounded-full ${item.color} transition-all duration-500`}
                      style={{ width: `${item.val}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: DAX Logic */}
      {activeTab === "dax" && (
        <div className="mt-5 space-y-3">
          <div className="p-4 rounded-xl bg-black border border-[#00EA64]/30 font-mono text-xs text-[#A7F3D0] overflow-x-auto">
            <div className="text-[#00EA64] mb-2 font-sans font-bold text-[11px]">
              // DAX Measure: Adaptive Anomaly Identification Rule
            </div>
            <pre className="text-white leading-relaxed">
{`Anomaly_Flag = 
VAR Current_Reading = SELECTEDVALUE(HealthMetrics[ReadingValue])
VAR Moving_Average = 
    CALCULATE(
        AVERAGE(HealthMetrics[ReadingValue]),
        DATESINPERIOD(Calendar[Date], LASTDATE(Calendar[Date]), -14, DAY)
    )
VAR Standard_Dev = 
    CALCULATE(
        STDEV.P(HealthMetrics[ReadingValue]),
        DATESINPERIOD(Calendar[Date], LASTDATE(Calendar[Date]), -14, DAY)
    )
RETURN
    IF(
        ABS(Current_Reading - Moving_Average) > (2.0 * Standard_Dev),
        "Outlier / Anomaly Detected",
        "Within Clinical Baseline"
    )`}
            </pre>
          </div>
          <p className="text-xs text-[#A7F3D0] leading-relaxed">
            By embedding statistical measures into DAX, the report dynamically calculates deviation envelopes over rolling 14-day intervals without requiring manual recomputation.
          </p>
        </div>
      )}

      {/* Tab 3: Anomaly Validation */}
      {activeTab === "anomalies" && (
        <div className="mt-5 p-4 rounded-xl bg-black border border-[#00EA64]/20 space-y-3">
          <div className="flex items-center gap-2 text-[#00EA64] text-xs font-bold uppercase tracking-wider">
            <AlertCircle className="w-4 h-4 text-[#00EA64]" />
            Decision Support &amp; Data Comparison Workflow
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
            <div className="p-3 rounded-lg bg-black border border-[#00EA64]/20">
              <span className="font-bold text-white block">Data Verification</span>
              <p className="text-[#A7F3D0] mt-1 text-[11px]">
                Validation rules compare incoming real-time records against historical ranges to filter out sensor artifacts.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-black border border-[#00EA64]/20">
              <span className="font-bold text-white block">Trend Correlation</span>
              <p className="text-[#A7F3D0] mt-1 text-[11px]">
                Multi-metric correlation links secondary vital shifts with primary anomalies for holistic pattern review.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-black border border-[#00EA64]/20">
              <span className="font-bold text-white block">Visual Communication</span>
              <p className="text-[#A7F3D0] mt-1 text-[11px]">
                Translates abstract clinical statistics into clear graphical indicators for rapid decision support.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-[#00EA64]/20 flex items-center justify-between text-[11px] text-[#A7F3D0]">
        <span>Engineered with Power BI &amp; DAX</span>
        <span className="text-[#00EA64] font-bold">Clinical Decision Support Simulation</span>
      </div>
    </div>
  );
}
