import { useState, useEffect } from 'react';
import { Sun, Moon } from "lucide-react";

import { cn } from '@/lib/utils';


export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  }
  console.log(isDarkMode)
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden right-5 z-50 p-2 rounded-full transition-colors duration-300",
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" /> 
      )}
    </button>
  )
};