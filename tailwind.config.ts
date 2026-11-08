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
          primary: "#902376", // morado ciruela — color principal
          "primary-dark": "#6F1A5B", // hover / texto sobre rosa
          secondary: "#C671A5", // acento; solo sobre fondos oscuros
          light: "#EED6E8", // rosa claro de marca
          blush: "#F8EEF4", // rosa muy claro para fondos de sección
          ink: "#2A2328", // gris oscuro para títulos y texto
          muted: "#5E5560", // texto secundario (≥ 7:1 sobre paper)
          line: "#E8DFE4", // divisores y bordes finos
          paper: "#FCFAF8", // blanco cálido de fondo
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
        soft: "0 12px 32px -20px rgba(42, 35, 40, 0.25)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
