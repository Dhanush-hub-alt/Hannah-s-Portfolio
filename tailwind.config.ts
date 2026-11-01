import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          main: "#080B0E",
          secondary: "#0D1217",
          elevated: "#131922",
          card: "#16202C",
          cardHover: "#1C2938",
        },
        brand: {
          green: "#00EA64",
          greenBright: "#1ED760",
          spotify: "#1DB954",
          greenDim: "rgba(0, 234, 100, 0.15)",
          white: "#FFFFFF",
          muted: "#94A3B8",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#94A3B8",
          muted: "#64748B",
          accent: "#00EA64",
        },
        border: {
          subtle: "rgba(0, 234, 100, 0.14)",
          focus: "rgba(0, 234, 100, 0.45)",
          active: "#00EA64",
        },
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      backgroundImage: {
        "radial-green": "radial-gradient(circle at 50% 0%, rgba(0, 234, 100, 0.12) 0%, rgba(30, 215, 96, 0.04) 45%, transparent 70%)",
        "card-sheen": "linear-gradient(135deg, rgba(0, 234, 100, 0.08) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
      boxShadow: {
        'green-glow': '0 0 30px -5px rgba(0, 234, 100, 0.35)',
        'green-btn': '0 0 25px -4px rgba(0, 234, 100, 0.45)',
        'card-glow': '0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(0, 234, 100, 0.14)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
export default config;
