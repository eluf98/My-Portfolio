import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const [language, setLanguage] = useState(localStorage.getItem("lang") || "english");
  const [token, setToken] = useLocalStorage("token", null);

  useEffect(() => {
    console.log("Dark Mode Durumu:", darkMode);  // Konsolda kontrol et
    if (darkMode) {
      document.documentElement.classList.add("dark");  // 🔥 Burada `document.body` yerine `document.documentElement`
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <UserContext.Provider value={{ darkMode, setDarkMode, language, setLanguage, token }}>
      {children}
    </UserContext.Provider>
  );
}