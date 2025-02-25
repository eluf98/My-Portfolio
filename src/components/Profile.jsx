import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { profileLanguage, TURKISH } from "../Data";

export function Profile() {
    const { darkMode, language } = useContext(UserContext);
  
    
    return (
        <div className={darkMode ? "dark" : ""}>
          <div
            className={`flex justify-center flex-col items-center pb-[6rem] ${darkMode ? "dark:bg-[#2A262B]" : "bg-gray-200"}`}
          >
            <h1 className={`font-semibold text-[3rem] mt-16 mb-8 ${darkMode ? "text-white" : "text-black"} max-[960px]:text-[2rem]`}>
              {language === TURKISH
                ? profileLanguage.turkishTitle
                : profileLanguage.englishTitle}
            </h1>
            <section className="flex flex-col sm:flex-row gap-14 sm:gap-8 max-[960px]:gap-6">
  <div
    className={`absolute rounded-2xl w-[37rem] h-[22.5rem] translate-x-4 translate-y-2 bg-gray-400 dark:bg-gray-600 max-[960px]:w-[31.25rem]`}
  ></div>
  <div
    className={`relative z-30 flex flex-col gap-6 rounded-2xl border-none w-[37rem] h-[22rem] ${darkMode ? "bg-[#525252]" : "bg-white"} max-[960px]:w-full`}
  >
    <div className="ml-12 mt-8 max-[960px]:ml-4">
      <label className={`text-[2rem] text-[#EA2678] max-[960px]:text-[1.5rem]`}>
        {language === TURKISH
          ? profileLanguage.turkishBasicInfo
          : profileLanguage.englishBasicInfo}
      </label>
    </div>
    <div className="flex flex-col sm:flex-row gap-8 ml-12 max-[960px]:ml-4 max-[960px]:mb-4"> {/* Added mb-4 here */}
      <div className="flex flex-col gap-4 w-[45%] max-[960px]:w-full">
        <label className={`font-bold text-[1.15rem] ${darkMode ? "text-white" : "text-black"}`}>
          {language === TURKISH
            ? profileLanguage.turkishBirthDate
            : profileLanguage.englishBirthDate}
        </label>
        <label className={`font-bold text-[1.15rem] ${darkMode ? "text-white" : "text-black"}`}>
          {language === TURKISH
            ? profileLanguage.turkishCityOfResidence
            : profileLanguage.englishCityOfResidence}
        </label>
        <label className={`font-bold mb-14 text-[1.15rem] ${darkMode ? "text-white" : "text-black"} max-[960px]:mb-0`}>
          {language === TURKISH
            ? profileLanguage.turkishEducation
            : profileLanguage.englishEducation}
        </label>
        <label className={`font-bold text-[1.15rem] ${darkMode ? "text-white" : "text-black"}`}>
          {language === TURKISH
            ? profileLanguage.turkishPreferredRole
            : profileLanguage.englishPreferredRole}
        </label>
      </div>
      <div className="flex flex-col gap-4 max-[960px]:w-full">
        <label className={`font-semibold text-[1.15rem] ${darkMode ? "text-white" : "text-black"}`}>
          07.08.1998
        </label>
        <label className={`font-semibold text-[1.15rem] ${darkMode ? "text-white" : "text-black"}`}>
          {language === TURKISH
            ? profileLanguage.turkishIst
            : profileLanguage.englishIst}
        </label>
        <label className={`font-semibold w-[70%] text-[1.15rem] ${darkMode ? "text-white" : "text-black"}`}>
          {language === TURKISH
            ? profileLanguage.turkishUni
            : profileLanguage.englishUni}
        </label>
        <label className={`font-semibold text-[1.15rem] ${darkMode ? "text-white" : "text-black"}`}>
          Full-Stack Developer
        </label>
      </div>
    </div>
  </div>
  <div className="flex flex-col sm:flex-row gap-6 w-[37rem] max-[960px]:w-full max-[960px]:translate-y-[-2rem]">
    <div className="flex flex-col gap-4 ml-8 mt-8 max-[960px]:ml-4 max-[960px]:w-full">
      <label className={`relative z-10 font-semibold text-2xl ${darkMode ? "text-white" : "text-black"}`}>
        {language === TURKISH
          ? profileLanguage.turkishAboutMe
          : profileLanguage.englishAboutMe}

        <div className="absolute -z-10 w-[6rem] h-[1.5rem] bg-blue-300 rounded-[.5rem] translate-y-[-1rem] translate-x-[-1rem]"></div>
      </label>

      <div className="flex flex-col max-[960px]:w-[90%]">
        <label className={`text-lg mb-4 ${darkMode ? "text-white" : "text-black"} max-[960px]:text-[1rem]`}>
          {language === TURKISH
            ? profileLanguage.turkishAboutMeFirstPartDescp
            : profileLanguage.englishAbouteMeFirstDescp}
          {language === TURKISH
            ? profileLanguage.turkishAboutMeThirdPartDescp
            : profileLanguage.englishAbouteMeThirdDescp}
        </label>
        <label className={`text-lg ${darkMode ? "text-white" : "text-black"} max-[960px]:text-[1rem]`}>
          {language === TURKISH
            ? profileLanguage.turkishAboutMeFinalPartDescp
            : profileLanguage.englishAbouteMeFinalDescp}
        </label>
      </div>
    </div>
  </div>
</section>
          </div>
        </div>
      );
    }