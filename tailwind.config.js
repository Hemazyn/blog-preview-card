/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Figtree: ["Figtree", "sans-serif"],
      },
    },
    colors: {
      blueC: "hsl(228, 45%, 44%)",
      // Primary
      Yellow: "hsl(47, 88%, 63%)",
      // Neutral
      White: "hsl(0, 0%, 100%)",
      Grey: "hsl(0, 0%, 50%)",
      Black: "hsl(0, 0%, 7%)"
    },
  },
  plugins: [],
}