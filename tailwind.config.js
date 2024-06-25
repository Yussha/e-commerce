/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mr: "344px",
      },
      width: {
        tableWidthmr: "80vh",
        // tablewidthxl: "170vh"
      },
    },
  },
  plugins: [],
}

