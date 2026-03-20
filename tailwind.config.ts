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
        // Participation Economy (light theme)
        primary: "#15803D",
        text: "#1A1A1A",
        muted: "#6B7280",
        rule: "#E5E7EB",
        "pull-bg": "#ECFDF5",
        dark: "#1A1A1A",
        // Abundance Thesis (dark theme)
        "at-bg": "#0E1A12",
        "at-surface": "#152019",
        "at-text": "#F0EDE4",
        "at-muted": "#8A9E8D",
        "at-accent": "#4A7C2F",
        "at-accent-light": "#6B9E4A",
        "at-light": "#C5D9A8",
        "at-rule": "#1A2E1F",
        "at-pull-bg": "#1A2E1F",
        // Hub
        "hub-bg": "#0A0F0C",
        "hub-surface": "#111A14",
        "hub-text": "#F0EDE4",
        "hub-muted": "#7A8E7D",
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
