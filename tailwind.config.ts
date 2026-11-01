import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          main: "#0F1117",
          secondary: "#16171F",
          elevated: "#1C1D24",
          card: "#24252E",
        },
        brand: {
          indigo: "#6366F1",
          violet: "#8B5CF6",
          cyan: "#06B6D4",
        },
        text: {
          primary: "#F4F3FA",
          secondary: "#A5A3B5",
          muted: "#777887",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          glow: "rgba(99, 102, 241, 0.3)",
        },
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.08) 35%, rgba(15, 17, 23, 0) 70%)",
        "glow-indigo-violet": "linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.15) 50%, rgba(6, 182, 212, 0.1) 100%)",
      },
      boxShadow: {
        'card-glow': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'indigo-glow': '0 0 25px -5px rgba(99, 102, 241, 0.35)',
        'cyan-glow': '0 0 25px -5px rgba(6, 182, 212, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 7s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
