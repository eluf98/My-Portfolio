import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { footerDescp, TURKISH } from "../Data";

export function Footer() {
  const { darkMode, language } = useContext(UserContext);

  return (
    <section className={darkMode ? "dark " : ""}>
      <div className="flex justify-center items-center relative z-30 gap-20 dark:bg-zinc-700">
        <div className="w-[30%] ">
          <label className="relative font-semibold text-5xl leading-relaxed z-10 dark:text-white max-[960px]:text-3xl">
            {language === TURKISH ? footerDescp.turkish : footerDescp.english}
            <div className="absolute -z-10 w-[24rem] max-[960px]:w-0 h-[1.5rem] bg-purple-600 rounded-[.5rem] translate-y-[-6.5rem] translate-x-[5rem]"></div>
          </label>
        </div>
        <div className="flex flex-col gap-2 ">
          <a
            target="_blank"
            className="text-blue-500 text-2xl font-semibold hover:underline cursor-pointer"
            href="https://github.com/eluf98"
          >
            Github
          </a>
          <a
            className="text-2xl font-semibold dark:text-white hover:underline"
            href=""
            target="_blank"
          >
            Personal Blog
          </a>
          <a
            className="text-purple-400 text-2xl font-semibold hover:underline"
            href="https://www.linkedin.com/in/elify%C3%BCce/"
            target="_blank"
          >
            Linkedin
          </a>
          <a
            className="text-gray-400 text-2xl font-semibold hover:underline"
            href="elifyuce99r@gmail.com"
            target="_blank"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}