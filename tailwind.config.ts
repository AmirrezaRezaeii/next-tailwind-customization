import type { Config } from "tailwindcss";

export default {
  presets: [require('./my-preset.ts')], 
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // Customizing via theme option

  // theme: {
  //   colors: {
  //     primary: {
  //       light: "#85d7ff",
  //       DEFAULT: "#1fb6ff",
  //       dark: "#009eeb",
  //     },
  //     secondry: {
  //       light: "#ff7ce5",
  //       DEFAULT: "#ff49db",
  //       dark: "#ff16d1",
  //     },
  //   },
  //   extend: {
  //     flexGrow: {
  //       2: "2",
  //       3: "3",
  //     },
  //     zIndex: {
  //       60: "60",
  //       70: "70",
  //       80: "80",
  //       90: "90",
  //       100: "100",
  //     },
  //   },
  // },
  plugins: [],
} satisfies Config;
