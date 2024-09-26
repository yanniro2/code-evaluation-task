import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003E33",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        recoleta: ["Recoleta", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
