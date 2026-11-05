/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Geist"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"Geist Mono"', '"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        canvas: "#FAF9F6",
        line: "#E2E2DF",
        ink: "#09090B",
        muted: "#52525B",
        butter: "#FDE047",
        "butter-soft": "#FEF08A",
      },
    },
  },
  plugins: [],
};
