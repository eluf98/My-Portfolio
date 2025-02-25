import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export function Circle() {
  const { darkMode } = useContext(UserContext);

  return (
    <div
      className={
        "z-10 w-[8.35rem] h-[5rem] rounded-b-[5rem] translate-x-[35rem] " +
        (darkMode ? "bg-[#525252]" : "bg-gray-300") 
      }
    ></div>
  );
}