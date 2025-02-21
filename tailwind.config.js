/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Proje içindeki tüm JS/TS/JSX/TSX dosyalarını içerecek şekilde ayarlandı
    ],
    theme: {
      extend: {
        // Buraya kendi özelleştirilmiş renkler, yazı tipleri vb. ekleyebilirsin.
      },
    },
    plugins: [],
  }