import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // LocalStorage থেকে theme load
    return localStorage.getItem("theme") || "light";
  });

  // Theme পরিবর্তন হলে localStorage update
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme; // tailwind dark mode handle
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// custom hook
export const useTheme = () => useContext(ThemeContext);
