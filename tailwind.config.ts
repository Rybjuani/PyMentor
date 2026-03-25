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
        ink: "#08111A",
        mist: "#0B1620",
        frost: "#132432",
        sky: "#18354A",
        brand: {
          50: "#E8FFF7",
          100: "#C8FDEA",
          200: "#8AF4CB",
          300: "#4BE3A8",
          400: "#1DD38B",
          500: "#0CB971",
          600: "#0A935A",
          700: "#0A7449"
        },
        sage: "#10251D",
        gold: "#FFD66B",
        coral: "#FF8B76"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0, 0, 0, 0.45)",
        glow: "0 0 0 1px rgba(29,211,139,0.18), 0 0 36px rgba(29,211,139,0.18)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top left, rgba(29,211,139,0.24), transparent 32%), radial-gradient(circle at 80% 20%, rgba(33,150,243,0.22), transparent 28%), radial-gradient(circle at bottom right, rgba(255,214,107,0.12), transparent 30%)"
      }
    }
  },
  darkMode: "class",
  plugins: []
};

export default config;
