"use client";

import React, { useState } from "react";
import { BarChart3, TrendingUp, AlertCircle, CheckCircle2, Sliders, Layers } from "lucide-react";

export function HealthcareDashboardPreview() {
  const [activeTab, setActiveTab] = useState<"overview" | "dax" | "anomalies">("overview");

  return (
    <div className="w-full rounded-2xl bg-bg-elevated/80 border border-border-subtle p-5 md:p-6 backdrop-blur-sm">
      {/* Header and Filter Tab Switcher */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-border-subtle">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-brand-cyan/15 text-brand-cyan flex items-center justify-center">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono tracking-wider uppercase text-brand-cyan">
              Power BI & DAX Intelligence Suite
            </span>
            <h4 className="text-base sm:text-lg font-bold text-text-primary">
              Patient Disease Analytics & Anomaly Detection
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-1.5 bg-bg-card p-1 rounded-xl border border-border-subtle text-xs">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === "overview"
                ? "bg-brand-indigo text-white"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            Dashboard View
          </button>
          <button
            onClick={() => setActiveTab("dax")}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === "dax"
                ? "bg-brand-indigo text-white"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            DAX Measures
          </button>
          <button
            onClick={() => setActiveTab("anomalies")}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === "anomalies"
                ? "bg-brand-indigo text-white"
                : "text-text-secondary hover:text-text-primary"
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
            <div className="p-3.5 rounded-xl bg-bg-card border border-border-subtle">
              <span className="text-[11px] text-text-muted uppercase font-medium">
                Analysis Scope
              </span>
              <div className="text-lg font-bold text-text-primary mt-1">Multi-Cohort</div>
              <div className="text-[10px] text-brand-cyan mt-0.5 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Historical & Current
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-bg-card border border-border-subtle">
              <span className="text-[11px] text-text-muted uppercase font-medium">
                DAX Variance Index
              </span>
              <div className="text-lg font-bold text-brand-violet mt-1">± 2.45 σ</div>
              <div className="text-[10px] text-text-secondary mt-0.5">
                Dynamic threshold
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-bg-card border border-border-subtle">
              <span className="text-[11px] text-text-muted uppercase font-medium">
                Metric Tracking
              </span>
              <div className="text-lg font-bold text-brand-cyan mt-1">Continuous</div>
              <div className="text-[10px] text-emerald-400 mt-0.5 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> Trend Validated
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-bg-card border border-border-subtle">
              <span className="text-[11px] text-text-muted uppercase font-medium">
                Reporting State
              </span>
              <div className="text-lg font-bold text-text-primary mt-1">Interactive</div>
              <div className="text-[10px] text-text-muted mt-0.5">
                Drill-down enabled
              </div>
            </div>
          </div>

          {/* Simulated Analytical Trend Bars */}
          <div className="p-4 rounded-xl bg-bg-card border border-border-subtle">
            <div className="flex items-center justify-between mb-3 text-xs">
              <span className="font-semibold text-text-primary flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-brand-indigo" /> Health Metric Longitudinal Trend Profile
              </span>
              <span className="text-text-muted font-mono text-[11px]">Normalized Baseline vs Variance</span>
            </div>

            <div className="space-y-2.5">
              {[
                { label: "Cohort Metric A (Cardiovascular Indicators)", val: 78, status: "Normal", color: "bg-brand-indigo" },
                { label: "Cohort Metric B (Metabolic & Glycemic Profile)", val: 92, status: "Variance Flagged", color: "bg-amber-400" },
                { label: "Cohort Metric C (Respiratory & Oxygenation Index)", val: 64, status: "Normal", color: "bg-brand-cyan" },
                { label: "Cohort Metric D (Longitudinal Stability Index)", val: 86, status: "Normal", color: "bg-brand-violet" },
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-text-secondary">{item.label}</span>
                    <span className={item.status.includes("Flagged") ? "text-amber-300 font-semibold" : "text-text-muted"}>
                      {item.status}
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-bg-elevated overflow-hidden">
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
          <div className="p-4 rounded-xl bg-bg-main border border-border-subtle font-mono text-xs text-text-secondary overflow-x-auto">
            <div className="text-text-muted mb-2 font-sans font-medium text-[11px]">
              // DAX Measure: Adaptive Anomaly Identification Rule
            </div>
            <pre className="text-brand-cyan leading-relaxed">
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
          <p className="text-xs text-text-secondary leading-relaxed">
            By embedding statistical measures into DAX, the report dynamically calculates deviation envelopes over rolling 14-day intervals without requiring manual recomputation.
          </p>
        </div>
      )}

      {/* Tab 3: Anomaly Validation */}
      {activeTab === "anomalies" && (
        <div className="mt-5 p-4 rounded-xl bg-bg-card border border-border-subtle space-y-3">
          <div className="flex items-center gap-2 text-brand-violet text-xs font-semibold uppercase tracking-wider">
            <AlertCircle className="w-4 h-4 text-brand-violet" />
            Decision Support & Data Comparison Workflow
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
            <div className="p-3 rounded-lg bg-bg-elevated border border-white/5">
              <span className="font-semibold text-text-primary block">Data Verification</span>
              <p className="text-text-secondary mt-1 text-[11px]">
                Validation rules compare incoming real-time records against historical ranges to filter out sensor artifacts.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-bg-elevated border border-white/5">
              <span className="font-semibold text-text-primary block">Trend Correlation</span>
              <p className="text-text-secondary mt-1 text-[11px]">
                Multi-metric correlation links secondary vital shifts with primary anomalies for holistic pattern review.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-bg-elevated border border-white/5">
              <span className="font-semibold text-text-primary block">Visual Communication</span>
              <p className="text-text-secondary mt-1 text-[11px]">
                Translates abstract clinical statistics into clear graphical indicators for rapid decision support.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-border-subtle flex items-center justify-between text-[11px] text-text-muted">
        <span>Engineered with Power BI & DAX</span>
        <span className="text-brand-cyan">Clinical Decision Support Simulation</span>
      </div>
    </div>
  );
}
