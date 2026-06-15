import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#172018",
        emerald: "#596b45",
        mist: "#f1f3ed",
      },
      boxShadow: {
        soft: "0 24px 70px -38px rgba(35, 47, 33, 0.34)",
      },
    },
  },
  plugins: [],
};

export default config;
