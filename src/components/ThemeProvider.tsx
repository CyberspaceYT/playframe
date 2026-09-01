import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
type Theme = "light" | "dark";
interface ThemeContextValue { theme: Theme; setTheme: (t: Theme) => void; }
const ThemeContext = createContext<ThemeContextValue>({ theme: "light", setTheme: () => {} });
export const useTheme = () => useContext(ThemeContext);
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => { const hour = new Date().getHours(); return hour >= 19 || hour < 7 ? "dark" : "light"; });
  useEffect(() => { const checkTime = () => { const hour = new Date().getHours(); setTheme(hour >= 19 || hour < 7 ? "dark" : "light"); }; const interval = setInterval(checkTime, 60000); return () => clearInterval(interval); }, []);
  useEffect(() => { const root = document.documentElement; root.classList.remove("light", "dark"); root.classList.add(theme); root.style.setProperty("--aero-glass-bg", theme === "dark" ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.62)"); root.style.setProperty("--aero-glow-color", "rgba(111,227,225,0.7)"); root.style.setProperty("--aero-text-color", theme === "dark" ? "#ffffff" : "#20243a"); }, [theme]);
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
