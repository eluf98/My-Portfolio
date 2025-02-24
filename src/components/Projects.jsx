import "boxicons";
import laptop from "../assets/laptop.png";
import { projectsArea, projectsInformation, TURKISH } from "../Data.js";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";

export function Projects() {
  const { darkMode, language } = useContext(UserContext);

  function projectCardBackground(index) {
    if (index % 2 === 0) {
      return "bg-blue-200 dark:bg-zinc-800";
    } else {
      return "bg-slate-200 dark:bg-zinc-600";
    }
  }

  return (
    <section className={darkMode ? "dark" : ""}>
      <div className="flex flex-col justify-center items-center pt-24 pb-16 dark:bg-zinc-700">
        <label className="text-[3rem] mb-8 font-semibold dark:text-white">
          {language === TURKISH
            ? projectsArea.turkishTitle
            : projectsArea.englishTitle}
        </label>
        <div className="flex gap-16">
          <div className="flex flex-wrap gap-16 justify-center ">
            {projectsInformation.map((item, index) => {
              return (
                <>
                  <div
                   key={item.id} 
                    className={
                      "w-[35rem] h-[40rem] rounded-lg " +
                      projectCardBackground(index)
                    }
                  >
                    <div className="ml-10 mt-10">
                      <label className="font-semibold text-3xl dark:text-white">
                        {language === TURKISH
                          ? item.turkishTitle
                          : item.englishTitle}
                      </label>
                      <p className="text-lg mt-6 w-10/12 mb-6 dark:text-white">
                        {language === TURKISH
                          ? item.turkishDescription
                          : item.englishDescription}
                      </p>
                      <section className="flex flex-row gap-4 w-[65%] flex-wrap">
                        {item.structures.map((it2, index) => {
                          return (
                            <div
                              key={it2}
                              className={
                                "relative w-[5.5rem] h-[2rem] rounded-2xl border-solid flex justify-center items-center bg-white dark:bg-zinc-700"
                              }
                            >
                              <label className="absolute font-semibold dark:text-white">
                                {it2}
                              </label>
                            </div>
                          );
                        })}
                      </section>
                      <section className="flex justify-between w-[90%] mt-8 mb-[.5rem]">
                        <a
                          target="_blank"
                          href={item.github}
                          className="text-2xl font-semibold dark:text-white"
                        >
                          {language === TURKISH
                            ? projectsArea.turkishGithub
                            : projectsArea.englishGithub}
                        </a>
                        <a
                          target="_blank"
                          href={item.app}
                          className="text-2xl font-semibold flex items-center dark:text-white"
                        >
                          {language === TURKISH
                            ? projectsArea.turkishApp
                            : projectsArea.englishApp}

                          <i className="bx bx-right-arrow-alt bx-md text-black dark:text-white"></i>
                        </a>
                      </section>
                      <div className="relative">
                        <img
                          src={laptop}
                          alt="Laptop"
                          className={
                            "mr-8 absolute z-10 " +
                            (language === TURKISH
                              ? item.turkishLaptopPos
                              : item.englishLaptopPos)
                          }
                        />
                        <img
                          src={item.projectImg}
                          alt=""
                          className={
                            "absolute mt-12 w-[21.65rem] h-[13.5rem] " +
                            (language === TURKISH
                              ? item.turkishImgPos
                              : item.englishImgPos)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}