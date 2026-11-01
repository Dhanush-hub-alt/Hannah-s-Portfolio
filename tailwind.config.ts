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
          secondary: "#080808",
          elevated: "#111111",
          card: "#171717",
          cardHover: "#202020",
        },
        brand: {
          white: "#FFFFFF",
          silver: "#E4E4E7",
          muted: "#71717A",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#A1A1AA",
          muted: "#71717A",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.1)",
          focus: "rgba(255, 255, 255, 0.35)",
          active: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      backgroundImage: {
        "radial-light": "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 40%, transparent 70%)",
        "card-sheen": "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
        "monochrome-gradient": "linear-gradient(180deg, #FFFFFF 0%, #A1A1AA 100%)",
      },
      boxShadow: {
        'card-glow': '0 8px 30px -10px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(255, 255, 255, 0.08)',
        'white-glow': '0 0 35px -5px rgba(255, 255, 255, 0.25)',
        'rim': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
export default config;
