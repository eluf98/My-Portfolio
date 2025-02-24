import { useContext, useState, useEffect} from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Information } from "./components/Information";
import { Skill } from "./components/Skill";
import { Profile } from "./components/Profile";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { UserContext } from "./contexts/UserContext";
import { ToastContainer, toast } from "react-toastify";
import { Operation } from "./components/Operation";
import {Circle} from "./components/Circle";


function App() {
  const { darkMode } = useContext(UserContext);
  useEffect(() => {
    // Sayfa yüklendiğinde body'e dark sınıfını ekler veya çıkarır
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);


  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <section className={" pb-32 bg-gray-200 dark:bg-[#2A262B]"}>
          <Circle />
          <Header />
          <Information />
        </section>
      </div>

      <div className={darkMode ? "dark" : ""}>
        <section className="dark:bg-zinc-700">
          <Skill />
        </section>
      </div>
      <Profile />
      <Projects />
      <Footer />
      <Operation />
    </>
  );
}

export default App;