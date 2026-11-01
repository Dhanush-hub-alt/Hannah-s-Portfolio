import React from "react";

interface BrandLogoProps {
  className?: string;
  size?: number;
}

export function BrandLogo({ className = "", size = 42 }: BrandLogoProps) {
  return (
    <div
      className={`relative flex items-center justify-center rounded-full bg-black border-2 border-[#00EA64] transition-all duration-300 group-hover:bg-[#00EA64]/10 group-hover:scale-105 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[58%] h-[58%]"
      >
        {/* Left Vertical Pillar in HackerRank / Spotify Green */}
        <path
          d="M24 20H38V80H24V20Z"
          fill="#00EA64"
        />
        {/* Right Vertical Pillar in HackerRank / Spotify Green */}
        <path
          d="M62 20H76V80H62V20Z"
          fill="#00EA64"
        />
        {/* Modern Cybernetic Angular Bridge in Crisp Green-White */}
        <path
          d="M38 44H62V56H38V44Z"
          fill="#FFFFFF"
        />
        {/* Geometric Accent Cuts */}
        <path
          d="M38 32L46 20H54L46 32H38Z"
          fill="#00EA64"
        />
        <path
          d="M62 68L54 80H46L54 68H62Z"
          fill="#00EA64"
        />
      </svg>
    </div>
  );
}
