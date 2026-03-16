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
        primary: "#15803D",
        text: "#1A1A1A",
        muted: "#6B7280",
        rule: "#E5E7EB",
        "pull-bg": "#ECFDF5",
        dark: "#1A1A1A",
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        content: "720px",
      },
    },
  },
  plugins: [],
};
export default config;
