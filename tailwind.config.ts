import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: "#0f1210",
        carbon: "#161817",
        fern: "#95c83d",
        moss: "#6f9440",
        stone: "#d9d5ca",
      },
      fontFamily: {
        sans: ["Inter", "Geist", "Satoshi", "General Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 28px 90px rgba(0, 0, 0, 0.32)",
      },
    },
  },
  plugins: [],
};

export default config;
