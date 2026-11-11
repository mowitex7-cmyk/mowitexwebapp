import { createContext, useState, useEffect, useContext } from "react";
const initialState = { theme: "light", setTheme: () => null };
const ThemeProviderContext = createContext(initialState);
const safeGet = (key) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};
const safeSet = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch {}
};
export function ThemeProvider({
  children: children,
  defaultTheme = "light",
  storageKey = "vite-ui-theme",
}) {
  const [theme, setThemeState] = useState(
    () => safeGet(storageKey) || defaultTheme,
  );
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);
  const value = {
    theme: theme,
    setTheme: (newTheme) => {
      safeSet(storageKey, newTheme);
      setThemeState(newTheme);
    },
  };
  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
