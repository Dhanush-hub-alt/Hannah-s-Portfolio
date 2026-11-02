"use client";

import React, { useState } from "react";
import { BarChart3, TrendingUp, AlertCircle, CheckCircle2, Layers } from "lucide-react";

export function HealthcareDashboardPreview() {
  const [activeTab, setActiveTab] = useState<"overview" | "dax" | "anomalies">("overview");

  return (
    <div className="w-full rounded-2xl bg-theme-surface border border-theme-border p-4 sm:p-6 shadow-sm">
      {/* Header and Filter Tab Switcher */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-theme-border">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-theme-surfaceSecondary border border-theme-border text-theme-accent flex items-center justify-center font-bold">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono tracking-wider uppercase text-theme-accent font-bold">
              Power BI &amp; DAX Intelligence
            </span>
            <h4 className="text-base sm:text-lg font-bold text-theme-primary">
              Patient Analytics &amp; Anomaly Detection
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-1.5 bg-theme-surfaceSecondary p-1 rounded-xl border border-theme-border text-xs">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTab === "overview"
                ? "bg-theme-accent text-white"
                : "text-theme-muted hover:text-theme-primary"
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab("dax")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTab === "dax"
                ? "bg-theme-accent text-white"
                : "text-theme-muted hover:text-theme-primary"
            }`}
          >
            DAX Logic
          </button>
          <button
            onClick={() => setActiveTab("anomalies")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTab === "anomalies"
                ? "bg-theme-accent text-white"
                : "text-theme-muted hover:text-theme-primary"
            }`}
          >
            Validation
          </button>
        </div>
      </div>

      {/* Tab 1: Overview Dashboard */}
      {activeTab === "overview" && (
        <div className="mt-5 space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl bg-theme-surfaceSecondary border border-theme-border">
              <span className="text-[11px] text-theme-muted uppercase font-bold">Scope</span>
              <div className="text-lg font-bold text-theme-primary mt-1">Multi-Cohort</div>
              <div className="text-[10px] text-theme-accent mt-0.5 flex items-center gap-1 font-semibold">
                <CheckCircle2 className="w-3 h-3" /> Historical &amp; Current
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-theme-surfaceSecondary border border-theme-border">
              <span className="text-[11px] text-theme-muted uppercase font-bold">Variance</span>
              <div className="text-lg font-bold text-theme-accent mt-1">± 2.45 σ</div>
              <div className="text-[10px] text-theme-muted mt-0.5">Dynamic envelope</div>
            </div>

            <div className="p-3.5 rounded-xl bg-theme-surfaceSecondary border border-theme-border">
              <span className="text-[11px] text-theme-muted uppercase font-bold">Tracking</span>
              <div className="text-lg font-bold text-theme-primary mt-1">Continuous</div>
              <div className="text-[10px] text-theme-accent mt-0.5 flex items-center gap-1 font-semibold">
                <TrendingUp className="w-3 h-3" /> Trend Validated
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-theme-surfaceSecondary border border-theme-border">
              <span className="text-[11px] text-theme-muted uppercase font-bold">Reporting</span>
              <div className="text-lg font-bold text-theme-primary mt-1">Interactive</div>
              <div className="text-[10px] text-theme-muted mt-0.5">Drill-down enabled</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-theme-surfaceSecondary border border-theme-border">
            <div className="flex items-center justify-between mb-3 text-xs">
              <span className="font-bold text-theme-primary flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-theme-accent" /> Longitudinal Profile
              </span>
              <span className="text-theme-muted font-mono text-[11px]">Normalized Baseline vs Variance</span>
            </div>

            <div className="space-y-2.5">
              {[
                { label: "Cardiovascular Indicators", val: 78, status: "Normal", color: "bg-theme-accent" },
                { label: "Metabolic & Glycemic Profile", val: 92, status: "Variance Flagged", color: "bg-theme-cyan" },
                { label: "Respiratory & Oxygenation Index", val: 64, status: "Normal", color: "bg-theme-accent" },
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-theme-secondary">{item.label}</span>
                    <span className={item.status.includes("Flagged") ? "text-theme-accent font-bold" : "text-theme-muted"}>
                      {item.status}
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-theme-surface overflow-hidden border border-theme-border">
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
          <div className="p-4 rounded-xl bg-theme-surfaceSecondary border border-theme-border font-mono text-xs text-theme-secondary overflow-x-auto">
            <div className="text-theme-accent mb-2 font-sans font-bold text-[11px]">
              // DAX Measure: Adaptive Anomaly Identification Rule
            </div>
            <pre className="text-theme-primary leading-relaxed">
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
        "Outlier Detected",
        "Baseline"
    )`}
            </pre>
          </div>
        </div>
      )}

      {/* Tab 3: Anomaly Validation */}
      {activeTab === "anomalies" && (
        <div className="mt-5 p-4 rounded-xl bg-theme-surfaceSecondary border border-theme-border space-y-3">
          <div className="flex items-center gap-2 text-theme-accent text-xs font-bold uppercase tracking-wider">
            <AlertCircle className="w-4 h-4 text-theme-accent" />
            Decision Support &amp; Verification
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
            <div className="p-3 rounded-lg bg-theme-surface border border-theme-border">
              <span className="font-bold text-theme-primary block">Data Verification</span>
              <p className="text-theme-muted mt-1 text-[11px]">
                Validates incoming records against historical ranges to filter artifacts.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-theme-surface border border-theme-border">
              <span className="font-bold text-theme-primary block">Trend Correlation</span>
              <p className="text-theme-muted mt-1 text-[11px]">
                Multi-metric correlation links secondary vital shifts with primary anomalies.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-theme-surface border border-theme-border">
              <span className="font-bold text-theme-primary block">Visual Communication</span>
              <p className="text-theme-muted mt-1 text-[11px]">
                Translates abstract statistics into clear graphical indicators for clinicians.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
