"use client";

import React from "react";
import { languages } from "@/data/portfolio";
import { SectionHeader } from "@/components/SectionHeader";
import { Languages, Check } from "lucide-react";

export function LanguagesSection() {
 return (
 <section id="languages" className="py-20 lg:py-24 relative bg-theme-bg">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 {/* Exact Section Title Centered Matching Navbar */}
 <SectionHeader title="Languages" />

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
 {languages.map((item) => (
 <div
 key={item.language}
 className="p-6 rounded-2xl bg-theme-surface border border-theme-border hover:border-theme-accent transition-all duration-200 flex flex-col justify-between shadow-sm"
 >
 <div>
 <div className="flex items-center justify-between mb-3">
 <div className="w-8 h-8 rounded-lg bg-theme-surfaceSecondary border border-theme-border text-theme-accent flex items-center justify-center font-bold">
 <Languages className="w-4 h-4" />
 </div>
 <span className="text-[10px] uppercase tracking-wider text-theme-accent bg-theme-accent/10 border border-theme-accent/30 font-bold px-2 py-0.5 rounded">
 {item.proficiency}
 </span>
 </div>

 <h3 className="text-xl font-extrabold text-theme-primary tracking-tight ">
 {item.language}
 </h3>
 </div>

 <div className="mt-5 pt-3 border-t border-theme-border flex items-center justify-between text-xs text-theme-secondary">
 <span className="font-medium text-theme-muted">Proficiency</span>
 <span className="font-bold text-theme-accent flex items-center gap-1">
 <Check className="w-3.5 h-3.5" />
 {item.proficiency}
 </span>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}
