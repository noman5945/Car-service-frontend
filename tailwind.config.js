const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      backgroundImage: {
        "hero-back": "url('/src/assets/HeroSection-Carwash-cover1.jpg')",
      },
      fontFamily: {
        bebas: ["Bebas", "sans-serif"],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
