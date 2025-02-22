import { useEffect, useState } from "react";
import { Sun, Moon, Cloud } from "lucide-react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(true); // 🔥 Dark Mode ativado por padrão

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <header className="w-full bg-gray-100 dark:bg-gray-950 py-4 px-6 shadow-md flex justify-between items-center transition-colors duration-300">
      {" "}
      {/* Logo e Título */}
      <div className="flex items-center gap-2">
        <Cloud size={28} className="text-primary" />
        <h1 className="text-2xl font-bold text-text dark:text-darkText">
          CDP Forecast Analytics
        </h1>
      </div>
      {/* Botão Dark Mode */}
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-lg bg-gray-700 dark:bg-gray-800 hover:bg-gray-600 dark:hover:bg-gray-700 transition duration-300"
      >
        {darkMode ? (
          <Sun size={24} className="text-yellow-400" />
        ) : (
          <Moon size={24} className="text-gray-400" />
        )}
      </button>
    </header>
  );
}
