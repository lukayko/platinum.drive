/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#38bdf8",
        tertiary: "#212529",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
