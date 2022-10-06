/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { primaryColor: "#F9A826" },
    },
    fontFamily: {
      display: ["Nunito", "sans-serif"]
    }
  },
  plugins: [],
};
