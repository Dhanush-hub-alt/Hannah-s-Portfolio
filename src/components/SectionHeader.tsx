"use client";

import React from "react";

interface SectionHeaderProps {
 title: string;
 badge?: string;
 highlight?: string;
 description?: string;
 centered?: boolean;
}

export function SectionHeader({ title }: SectionHeaderProps) {
 return (
 <div className="mb-12 md:mb-14 text-center max-w-xl mx-auto group cursor-default select-none">
 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-theme-primary transition-all duration-300 group-hover:tracking-wider group-hover:text-theme-accent inline-block">
 {title}
 </h2>
 
 {/* Dynamic Animated Underline with Modern Micro-Interactions */}
 <div className="mt-3.5 flex items-center justify-center gap-1.5">
 <span className="w-1.5 h-1.5 rounded-full bg-theme-accent opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0" />
 <div className="w-14 h-1 rounded-full bg-gradient-to-r from-theme-accent via-theme-cyan to-theme-accent transition-all duration-500 ease-out group-hover:w-28" />
 <span className="w-1.5 h-1.5 rounded-full bg-theme-cyan opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0" />
 </div>
 </div>
 );
}
