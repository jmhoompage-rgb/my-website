import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0F",
        surface: "#13131A",
        surface2: "#1B1B24",
        text: "#F5F5F0",
        muted: "#9C9CA8",
        line: "rgba(245,245,240,0.08)",
        accent: {
          DEFAULT: "#FF5A1F",
          soft: "rgba(255,90,31,0.12)",
          deep: "#CC3F0E",
        },
      },
      fontFamily: {
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
