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
        sans: ["Sora", "Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["Sora", "Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 4px 20px -2px rgba(15, 23, 42, 0.08)",
        card: "0 10px 30px -5px rgba(11, 17, 32, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
