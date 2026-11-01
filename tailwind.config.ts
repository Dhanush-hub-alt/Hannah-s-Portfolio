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
          main: "#000000",
          secondary: "#080F0B",
          elevated: "#0E1812",
          card: "#122018",
          cardHover: "#172A20",
        },
        brand: {
          green: "#00EA64",
          greenHover: "#10E56A",
          greenDark: "#062B16",
          greenMuted: "#0F3820",
          black: "#000000",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#A7F3D0",
          accent: "#00EA64",
          muted: "#4ADE80",
          dark: "#000000",
        },
        border: {
          subtle: "rgba(0, 234, 100, 0.2)",
          active: "#00EA64",
        },
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        // Clean crisp flat borders and standard elevation only - NO fuzzy glowing effects
        'flat-card': '0 4px 12px rgba(0, 0, 0, 0.95)',
        'btn': '0 2px 4px rgba(0, 0, 0, 0.8)',
      },
    },
  },
  plugins: [],
};
export default config;
