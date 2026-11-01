import React from "react";

interface BrandLogoProps {
  className?: string;
  size?: number;
}

export function BrandLogo({ className = "", size = 40 }: BrandLogoProps) {
  return (
    <div
      className={`relative flex items-center justify-center rounded-2xl bg-black border border-white/20 shadow-2xl transition-all duration-300 group-hover:border-white/60 group-hover:scale-105 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[62%] h-[62%]"
      >
        {/* Left Vertical Pillar */}
        <path
          d="M24 20H38V80H24V20Z"
          fill="white"
        />
        {/* Right Vertical Pillar */}
        <path
          d="M62 20H76V80H62V20Z"
          fill="white"
        />
        {/* Modern Cybernetic Angular Bridge with Precision Notch */}
        <path
          d="M38 44H62V56H38V44Z"
          fill="white"
        />
        {/* Geometric Accent Cuts */}
        <path
          d="M38 32L46 20H54L46 32H38Z"
          fill="white"
          fillOpacity="0.8"
        />
        <path
          d="M62 68L54 80H46L54 68H62Z"
          fill="white"
          fillOpacity="0.8"
        />
      </svg>
    </div>
  );
}
