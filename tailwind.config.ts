import type { Config } from "tailwindcss";

// Sarenti design tokens.
// Update brand colors here — they cascade through the entire site.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sarenti: {
          primary: "#902376",
          secondary: "#C671A5",
          light: "#EED6E8",
          ink: "#221B20",
          paper: "#FFFFFF",
        },
      },
      fontFamily: {
        serif: ["var(--font-editorial)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        soft: "0 8px 30px -12px rgba(34, 27, 32, 0.15)",
        card: "0 4px 20px -8px rgba(144, 35, 118, 0.15)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
