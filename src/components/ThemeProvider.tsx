import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextValue>({ theme: "light" });

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const hour = new Date().getHours();
    return hour >= 19 || hour < 7 ? "dark" : "light";
  });

  useEffect(() => {
    const checkTime = () => {
      const hour = new Date().getHours();
      setTheme(hour >= 19 || hour < 7 ? "dark" : "light");
    };

    // Check every minute
    const interval = setInterval(checkTime, 60_000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
