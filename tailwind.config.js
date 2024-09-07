const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      backgroundImage: {
        "hero-back": "url('/src/assets/HeroSection-Carwash-cover1.jpg')",
        "about-back":
          "url('https://images.unsplash.com/photo-1689182358874-fa9a57a95cc9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },
      fontFamily: {
        bebas: ["Bebas", "sans-serif"],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
