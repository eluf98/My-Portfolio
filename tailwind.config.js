/** @type {import('tailwindcss').Config} */
module.exports =  {
    darkMode: "class",
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Proje içindeki tüm JS/TS/JSX/TSX dosyalarını içerecek şekilde ayarlandı
    ],
    theme: {
      extend: {
        colors: {
            'dark-bg': '#2A262B',
          },
      },
    },
    plugins: [],
  }