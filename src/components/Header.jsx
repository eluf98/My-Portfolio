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
      <div className="flex ml-[82rem] mt-[4rem] items-center dark:bg-dark-bg">
        <label className="relative flex items-center group p-2 text-xl font-bold text-pink-700">
          <input
            type="checkbox"
            className="absolute ml-6 left-1/2 -translate-x-1/2 w-6/12 h-6/12 peer appearance-none rounded-md color"
            checked={darkMode} // Dark mode durumunu checkbox'a yansıt
          onChange={handleDarkModeChange} // Checkbox durumunu değiştirdiğinde darkMode'u güncelle
          />
          <span className="w-16 h-[26px] flex items-center flex-shrink-0 mr-3 p-1 bg-pink-600 rounded-full duration-300 ease-in-out peer-checked:bg-red-600 after:w-8 after:h-8 after:bg-amber-300 after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1"></span>
          DARK MODE
        </label>
        <label className="mx-8 font-bold text-pink-700">|</label>
        <label
        className="font-bold text-pink-700 text-xl cursor-pointer"
        onClick={handleLanguageChange}
      >
        {language === "turkish" ? "TÜRKÇE" : "ENGLISH"}
      </label>

      <label className="font-bold text-gray-600 text-xl cursor-pointer">
        YE GEÇ
      </label>
      </div>
    );
  }