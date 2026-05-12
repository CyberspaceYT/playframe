import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  setTheme: () => {},
});

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

    const interval = setInterval(checkTime, 60_000);
    return () => clearInterval(interval);
  }, []);

  // Update root classes & CSS variables for Aero
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);

    if (theme === "dark") {
      root.style.setProperty("--aero-glass-bg", "rgba(255,255,255,0.10)");
      root.style.setProperty("--aero-glow-color", "rgba(0,180,255,0.7)");
      root.style.setProperty("--aero-text-color", "#ffffff");
    } else {
      root.style.setProperty("--aero-glass-bg", "rgba(255,255,255,0.5)");
      root.style.setProperty("--aero-glow-color", "rgba(255,165,0,0.7)");
      root.style.setProperty("--aero-text-color", "#000000");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
