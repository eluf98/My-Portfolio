import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const [language, setLanguage] = useState(localStorage.getItem("lang") || "english");
  const [token, setToken] = useLocalStorage("token", null);

  // Dark mode class'ı ekle
  useEffect(() => {
    console.log("Dark Mode Başlangıç Durumu:", darkMode);
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <UserContext.Provider
      value={{ darkMode, setDarkMode, language, setLanguage, token }}
    >
      {children}
    </UserContext.Provider>
  );
}