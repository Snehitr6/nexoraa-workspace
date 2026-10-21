
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("nexora-theme") || "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    const isDark = theme === "dark";

    root.dataset.theme = theme;
    root.classList.toggle("dark", isDark);
    document.body.classList.toggle("dark", isDark);

    document.body.style.backgroundColor = isDark
      ? "#090b13"
      : "#f8f9fc";

    document.body.style.color = isDark
      ? "#f4f5fc"
      : "#15162b";

    try {
      localStorage.setItem("nexora-theme", theme);
    } catch {
      // Continue even if browser storage is unavailable.
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) =>
      current === "dark" ? "light" : "dark"
    );
  };

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used inside ThemeProvider"
    );
  }

  return context;
}
