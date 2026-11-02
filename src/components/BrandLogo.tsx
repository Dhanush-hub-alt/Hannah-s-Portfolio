"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";

interface BrandLogoProps {
  className?: string;
  size?: number;
}

export function BrandLogo({ className = "", size = 44 }: BrandLogoProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Dynamic colors based on application theme
  const primaryColor = isDark ? "#60A5FA" : "#2563EB"; // Electric Blue
  const secondaryColor = isDark ? "#38BDF8" : "#0F172A"; // Cyan in dark, Navy in light
  const accentLight = isDark ? "#F8FAFC" : "#38BDF8";

  return (
    <div
      className={`relative flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        <defs>
          <linearGradient id="hLeftPillar" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>
          <linearGradient id="hRightPillar" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={secondaryColor} />
            <stop offset="100%" stopColor={primaryColor} />
          </linearGradient>
          <linearGradient id="hCrossbar" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="50%" stopColor={accentLight} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>
        </defs>

        {/* Left Futuristic Angled Pillar */}
        <path
          d="M18 10L32 10L32 60L25 66L18 60L18 10Z"
          fill="url(#hLeftPillar)"
        />
        <path
          d="M18 60L25 66L25 90L18 84L18 60Z"
          fill={primaryColor}
          opacity="0.9"
        />
        <path
          d="M25 66L32 60L32 84L25 90L25 66Z"
          fill={secondaryColor}
        />

        {/* Right Futuristic Angled Pillar */}
        <path
          d="M68 40L75 34L82 40L82 90L68 90L68 40Z"
          fill="url(#hRightPillar)"
        />
        <path
          d="M68 16L75 10L75 34L68 40L68 16Z"
          fill={primaryColor}
        />
        <path
          d="M75 10L82 16L82 40L75 34L75 10Z"
          fill={secondaryColor}
          opacity="0.85"
        />

        {/* Intersecting Cybernetic Cross Bridge */}
        <path
          d="M32 44L68 44L62 56L26 56L32 44Z"
          fill="url(#hCrossbar)"
        />

        {/* Geometric High-Tech Nano Notches */}
        <path
          d="M32 20L44 20L38 28L32 28L32 20Z"
          fill={accentLight}
          opacity="0.8"
        />
        <path
          d="M68 80L56 80L62 72L68 72L68 80Z"
          fill={accentLight}
          opacity="0.8"
        />
      </svg>
    </div>
  );
}
