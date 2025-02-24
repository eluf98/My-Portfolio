import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import profile from "../assets/profile.png";
import "boxicons";

export function Information() {
    const { language } = useContext(UserContext);
  return (
    <div className="flex flex-col  mx-40 dark:bg-dark-bg-1 dark:text-white">
      <div className="mb-4">
        <label className="font-semibold text-[2.5rem]">
        {language === "turkish" ? "Merhaba! 👋" : "Hi! 👋"} 
        </label>
      </div>

      <div className="flex justify-between ">
        <label className="z-20 relative font-semibold text-[3.5rem] w-1/2">
        {language === "turkish"
            ? "Ben Almila. Full-stack geliştiricisiyim. Sağlam ve ölçeklenebilir frontend ürünleri tasarlayabilirim. Tanışalım!"
            : "I’m Almila. I’m a full-stack developer. I can craft solid and scalable frontend products. Let’s meet!"}
          <div className="absolute -z-40 w-[12rem] h-[3rem] bg-pink-600 rounded-[.5rem] translate-y-[-23rem] translate-x-[-2rem]"></div>
        </label>

        <div className="relative w-[30rem] h-[27.5rem] bg-pink-600 rounded-[2.5rem] mr-8">
          <img
            className="absolute w-[30rem] h-[27.5rem] mt-6 ml-6 rounded-[2.5rem]"
            src={profile}
          />
        </div>
      </div>
      <div className="my-7">
        <i className="bx bxl-linkedin bx-lg m-0 mr-4"></i>
        <i className="bx bxl-github bx-lg"></i>
      </div>
      <label className="font-['Arial'] text-[1.5rem]">
      {language === "turkish"
          ? "Şu anda UX, UI ve Web Tasarım projeleri için freelance çalışıyorum. Takımınıza katılmam için davet edin ->"
          : "Currently Freelancing for UX, UI, & Web Design Project. Invite me to join your team ->"}{" "}
    <a className="text-pink-700 underline" href="mailto:pratamaiosi@gmail.com">
          pratamaiosi@gmail.com
        </a>
      </label>
      <div className="absolute -z-10 w-[8rem] h-[5rem] bg-pink-600 rounded-l-[5rem] translate-x-[100.94rem] translate-y-[34rem]"></div>
    </div>
  );
}