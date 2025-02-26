import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import profile from "../assets/profile.png";
import "boxicons";

export function Information() {
    const { darkMode, language } = useContext(UserContext);

    return (
        <section className={darkMode ? "dark bg-[#2A262B]" : "bg-gray-200"}>
            <div className={darkMode ? "dark bg-[#2A262B]" : "bg-gray-200"}>
                <div className={`flex flex-col mx-4 md:mx-20 lg:mx-40 ${darkMode ? "dark:bg-[#2A262B]" : "bg-gray-200"} ${darkMode ? "dark:text-white" : "text-black"}`}>
                    <div className="mb-4 text-center md:text-left">
                        <label className="font-semibold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem]">
                            {language === "turkish" ? "Merhaba! 👋" : "Hi! 👋"}
                        </label>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center md:items-start relative">
                        <label className="z-20 relative font-semibold text-[1.25rem] sm:text-[2rem] md:text-[3.5rem] w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
                            {language === "turkish"
                                ? "Ben Almila. Full-stack geliştiricisiyim. Sağlam ve ölçeklenebilir frontend ürünleri tasarlayabilirim. Tanışalım!"
                                : "I’m Almila. I’m a full-stack developer. I can craft solid and scalable frontend products. Let’s meet!"}
                        </label>
                        <div className="absolute w-[16rem] h-[2rem] bg-pink-600 rounded-[.5rem] translate-y-[2rem] md:translate-y-[2rem] left-[10rem] md:left-[5rem]"></div>
                        
                        {/* Resim alanı */}
                        <div className="relative w-[16rem] h-[16rem] sm:w-[20rem] sm:h-[18rem] md:w-[30rem] md:h-[27.5rem] bg-pink-600 rounded-[2.5rem] mt-6 md:mt-0">
                            <img
                                className="absolute w-[16rem] h-[16rem] sm:w-[20rem] sm:h-[18rem] md:w-[30rem] md:h-[27.5rem] mt-4 md:mt-6 ml-4 md:ml-6 rounded-[2.5rem]"
                                src={profile}
                            />
                        </div>
                    </div>

                    <div className="my-7 flex justify-center md:justify-start">
                        <i className="bx bxl-linkedin bx-lg mx-2"></i>
                        <i className="bx bxl-github bx-lg mx-2"></i>
                    </div>

                    <label className="font-['Arial'] text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] text-center md:text-left">
                        {language === "turkish"
                            ? "Şu anda UX, UI ve Web Tasarım projeleri için freelance çalışıyorum. Takımınıza katılmam için davet edin ->"
                            : "Currently Freelancing for UX, UI, & Web Design Project. Invite me to join your team ->"}{" "}
                        <a className="text-pink-700 underline" href="mailto:pratamaiosi@gmail.com">
                            pratamaiosi@gmail.com
                        </a>
                    </label>

                    <div className="absolute -z-10 w-[5rem] sm:w-[6rem] md:w-[8rem] h-[3rem] sm:h-[4rem] md:h-[5rem] bg-pink-600 rounded-l-[5rem] translate-x-[80vw] md:translate-x-[100.94rem] translate-y-[30rem] md:translate-y-[34rem]"></div>
                </div>
            </div>
        </section>
    );
}
