import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        poppins: "var(--font-poppins), sans-serif",
        inconsolata: "var(--font-inconsolata), monospace",
        asap: "var(--font-asap), sans-serif",
        maven: "var(--font-maven), sans-serif",
      },
    },
  },
  plugins: [],
};

export default config;
