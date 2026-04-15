import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        charcoal: "#151b2d",
        brandBlue: "#1e3a8a",
      },
      fontFamily: {
        serif: ["var(--font-bodoni)"],
        sans: ["var(--font-inter-tight)"],
      },
    },
  },
  plugins: [],
};

export default config;
