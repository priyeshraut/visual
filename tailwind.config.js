/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        exact426: "26.625rem",
      },
      backgroundImage: {
        'bgBanner': "url('/src/images/background_banner.jpg')",
      },
    },
    
  },
  plugins: [],
}