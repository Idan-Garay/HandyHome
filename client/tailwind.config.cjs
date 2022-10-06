/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { 
        primaryColor: "#F9A826",
        secondaryColor: "#2F2E41",
      },
    },
    fontFamily: {
      display: ["Nunito", "sans-serif"]
    }
  },
  plugins: [],
};
