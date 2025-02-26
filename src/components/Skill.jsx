import { skillIcons } from "../Data.js";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";  // Assuming you're using UserContext for darkMode

export function Skill() {
  const { darkMode } = useContext(UserContext);  // Get darkMode from context

  return (
    <>
      <div
        className={`flex justify-center items-center flex-col ${
          darkMode ? "dark:bg-[#484148] bg-[#484148]" : "bg-white"
        }`}
      >
        <h1
          className={`font-semibold text-[3rem] sm:text-[4rem] mb-14 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Skills
        </h1>
        <div className="flex gap-8 sm:gap-14 w-full sm:w-[66.2%] overflow-auto mb-8">
          {skillIcons.map((item, index) => {
            return (
              <div key={item.id || index} className="relative flex flex-col">
                <div
                  className={
                    item.tcClass +
                    " flex items-center justify-center " +
                    item.boxColor
                  }
                >
                  <img className="absolute w-24 sm:w-36" src={item.icon} />
                </div>
                <label
                  className={`text-center mt-4 font-semibold text-[1.25rem] sm:text-[1.75rem] ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  {item.title}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute z-10 w-[7rem] sm:w-[9rem] h-[3.5rem] bg-gray-600 rounded-r-[5rem] translate-y-[1rem]"></div>
    </>
  );
}