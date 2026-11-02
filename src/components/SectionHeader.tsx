import React from "react";

interface SectionHeaderProps {
  title: string;
  badge?: string; // Optional legacy fallback if passed
  highlight?: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="mb-12 md:mb-14 text-center max-w-xl mx-auto">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-theme-primary font-display">
        {title}
      </h2>
      <div className="mt-3.5 mx-auto w-14 h-1 rounded-full bg-gradient-to-r from-theme-accent to-theme-cyan" />
    </div>
  );
}
