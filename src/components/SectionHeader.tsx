import React from "react";

interface SectionHeaderProps {
  badge: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({
  badge,
  title,
  highlight,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        centered ? "text-center max-w-2xl mx-auto" : "max-w-2xl"
      }`}
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo/10 border border-brand-indigo/25 text-brand-cyan text-xs font-semibold tracking-wider uppercase mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
        {badge}
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-tight">
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-brand-indigo via-brand-violet to-brand-cyan bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
