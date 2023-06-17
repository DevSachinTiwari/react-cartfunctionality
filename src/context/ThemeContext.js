import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeContextValues = {
    isDarkMode,
    toggleMode,
  };

  return (
    <ThemeContext.Provider value={themeContextValues}>
      {children}
    </ThemeContext.Provider>
  );
};
