import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"]
      },
      colors: {
        ink: "#102033",
        mist: "#F3F7FB",
        frost: "#E6EEF7",
        sky: "#D5E9FF",
        brand: {
          50: "#F3F8FF",
          100: "#E6F0FF",
          200: "#B7D7FF",
          300: "#7EB6FF",
          400: "#4D92FF",
          500: "#2D74F5",
          600: "#2059C2",
          700: "#1A4695"
        },
        sage: "#DDEEE7",
        gold: "#FFF1C2",
        coral: "#FFE0D8"
      },
      boxShadow: {
        soft: "0 20px 50px rgba(15, 23, 42, 0.08)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top left, rgba(126,182,255,0.55), transparent 40%), radial-gradient(circle at bottom right, rgba(221,238,231,0.9), transparent 35%)"
      }
    }
  },
  darkMode: "class",
  plugins: []
};

export default config;
