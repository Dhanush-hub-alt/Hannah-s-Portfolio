"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-full bg-transparent border border-transparent ${className}`} />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`p-2 rounded-full transition-all duration-300 flex items-center justify-center active:scale-95 ${
        isDark
          ? "bg-[#111C30] border border-[#26364D] text-[#60A5FA] hover:text-[#38BDF8] hover:border-[#60A5FA]"
          : "bg-[#FFFFFF] border border-[#E2E8F0] text-[#2563EB] hover:text-[#38BDF8] hover:border-[#2563EB]"
      } ${className}`}
      aria-label={`Switch to ${isDark ? "Light" : "Dark"} Mode`}
      title={`Switch to ${isDark ? "Light" : "Dark"} Mode`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}

