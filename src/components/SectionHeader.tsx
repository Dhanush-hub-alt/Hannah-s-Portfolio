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
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-white text-[11px] font-mono tracking-widest uppercase mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        {badge}
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
        {title}{" "}
        {highlight && (
          <span className="text-zinc-400">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
