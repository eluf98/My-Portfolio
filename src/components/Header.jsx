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
        <div className="flex flex-wrap justify-end items-center gap-4">
          {/* Dark Mode Toggle */}
          <label className="relative flex items-center group p-2 text-xl font-bold text-pink-700 cursor-pointer">
            <input
              type="checkbox"
              className="absolute opacity-0 w-0 h-0 peer"
              checked={darkMode}
              onChange={handleDarkModeChange}
            />
            <span
              className={`w-16 h-[26px] flex items-center flex-shrink-0 p-1 rounded-full duration-300 ease-in-out 
                ${darkMode ? "bg-black" : "bg-pink-600"} peer-checked:bg-black`}
            >
              {/* Yuvarlak Kısım */}
              <span
                className={`w-8 h-8 rounded-full shadow-md flex items-center justify-center duration-300 transform 
                  ${darkMode ? "translate-x-0 bg-amber-300" : "translate-x-6 bg-amber-300"}`}
              ></span>
            </span>
            <span className="ml-2">{darkMode ? "LIGHT MODE" : "DARK MODE"}</span>
          </label>

          {/* Ayırıcı Çizgi */}
          <span className="font-bold text-pink-700 hidden sm:block">|</span>

          {/* Dil Değiştirme */}
          <label
            className="font-bold text-pink-700 text-xl cursor-pointer"
            onClick={handleLanguageChange}
          >
            {language === "turkish" ? "Switch To English" : "TÜRKÇE'YE GEÇ"}
          </label>
        </div>
      </div>
    </section>
  );
}