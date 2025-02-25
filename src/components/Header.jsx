import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export function Header() {
    const { darkMode, setDarkMode, language, setLanguage } = useContext(UserContext);

  const handleDarkModeChange = () => {
    console.log("Dark Mode Değişiyor:", darkMode);
    setDarkMode(!darkMode); // Dark mode değerini tersine çevir
  };
  const handleLanguageChange = () => {
   
    // Eğer dil İngilizce ise, Türkçe'ye geçiş yap
    setLanguage(language === "english" ? "turkish" : "english");
  };
  return (
    <section className={darkMode ? "dark bg-[#2A262B]" : "bg-gray-200"}>
      <div className="container mx-auto px-4 py-4">
        <div className={`flex flex-wrap justify-end items-center gap-4`}>
          <label className="relative flex items-center group p-2 text-xl font-bold text-pink-700">
            <input
              type="checkbox"
              className="absolute ml-6 left-1/2 -translate-x-1/2 w-6 h-6 peer appearance-none rounded-md"
              checked={darkMode}
              onChange={handleDarkModeChange}
            />
            <span className="w-16 h-[26px] flex items-center flex-shrink-0 p-1 bg-pink-600 rounded-full duration-300 ease-in-out peer-checked:bg-red-600 after:w-8 after:h-8 after:bg-amber-300 after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1"></span>
            DARK MODE
          </label>

          <span className="font-bold text-pink-700 hidden sm:block">|</span>

          <label
            className="font-bold text-pink-700 text-xl cursor-pointer"
            onClick={handleLanguageChange}
          >
            {language === "turkish" ? "TÜRKÇE'YE GEÇ" : "Switch to Turkish"}
          </label>
        </div>
      </div>
    </section>
  );
}