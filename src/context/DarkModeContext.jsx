import { useState, createContext } from "react";

export const DarkModeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((darkMode) => !darkMode);
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
