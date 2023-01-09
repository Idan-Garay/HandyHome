/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{ 
        primaryColor: "#323145",
        secondaryColor: "#EEF5F9",
        highlightColor: "#C8E5F9",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}