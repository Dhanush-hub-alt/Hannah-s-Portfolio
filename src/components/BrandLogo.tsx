import React from "react";

interface BrandLogoProps {
  className?: string;
  size?: number;
}

export function BrandLogo({ className = "", size = 48 }: BrandLogoProps) {
  return (
    <div
      className={`relative flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Left Vertical Pillar in HackerRank / Spotify Green */}
        <path
          d="M16 12H34V88H16V12Z"
          fill="#00EA64"
        />
        {/* Right Vertical Pillar in HackerRank / Spotify Green */}
        <path
          d="M66 12H84V88H66V12Z"
          fill="#00EA64"
        />
        {/* Modern Cybernetic Central Bridge */}
        <path
          d="M34 42H66V58H34V42Z"
          fill="#00EA64"
        />
        {/* Architectural Diagonal Accent Cuts */}
        <path
          d="M34 26L46 12H56L44 26H34Z"
          fill="#00EA64"
        />
        <path
          d="M66 74L54 88H44L56 74H66Z"
          fill="#00EA64"
        />
      </svg>
    </div>
  );
}
