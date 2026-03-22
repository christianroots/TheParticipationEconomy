import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Participation Economy
        primary: "#15803D",
        text: "#1A1A1A",
        muted: "#6B7280",
        rule: "#E5E7EB",
        "pull-bg": "#F8F8F6",
        dark: "#1A1A1A",
        // Abundance Thesis (unified light theme)
        "at-bg": "#FFFFFF",
        "at-surface": "#F8F8F6",
        "at-text": "#1A1A1A",
        "at-muted": "#6B7280",
        "at-accent": "#15803D",
        "at-accent-light": "#1A9D4A",
        "at-light": "#15803D",
        "at-rule": "#E5E7EB",
        "at-pull-bg": "#F8F8F6",
        // Hub (unified light theme)
        "hub-bg": "#FFFFFF",
        "hub-surface": "#F8F8F6",
        "hub-text": "#1A1A1A",
        "hub-muted": "#6B7280",
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        lora: ["var(--font-lora)", "Georgia", "serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      maxWidth: {
        content: "720px",
        chart: "800px",
      },
    },
  },
  plugins: [],
};
export default config;
