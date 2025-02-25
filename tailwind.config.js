/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",  // ✅ Class bazlı dark mode kullanıyoruz
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          "dark-bg-1": "#2A262B",
          "dark-bg-2": "#484148",
        },
      },
    },
    plugins: [],
  };