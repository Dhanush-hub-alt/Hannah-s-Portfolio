import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/context/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: "var(--bg-app)",
          surface: "var(--surface-app)",
          surfaceSecondary: "var(--surface-secondary)",
          primaryText: "var(--text-primary)",
          secondaryText: "var(--text-secondary)",
          mutedText: "var(--text-muted)",
          border: "var(--border-app)",
          accent: "var(--accent-app)",
          accentHover: "var(--accent-hover)",
          cyan: "var(--accent-cyan)",
        },
        brand: {
          electricBlue: "#2563EB",
          electricBlueDark: "#60A5FA",
          midnightNavy: "#0F172A",
          darkNavy: "#0B1120",
          iceCyan: "#38BDF8",
          deepSlate: "#111C30",
          arcticWhite: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["Sora", "sans-serif"],
        display: ["Sora", "sans-serif"],
        mono: ["Sora", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(0, 0, 0, 0.05)",
        card: "0 4px 20px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
