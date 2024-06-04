import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "primary-background-color":"#92011b",
        "secondary-background-color":"#a3001d",
        "button-background-color":"#b31d38"
      }
    },
  },
  plugins: [],
};
export default config;
