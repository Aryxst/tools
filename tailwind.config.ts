import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: "36px", lineHeight: "44.8px" },
        h2: { fontSize: "28px", lineHeight: "32px" },
        h3: { fontSize: "24 px" },
      });
    }),
  ],
};
export default config;
