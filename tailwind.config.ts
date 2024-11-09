import type { Config } from "tailwindcss";

export default {
  presets: [require('./my-preset.ts')],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: [],
} satisfies Config;
