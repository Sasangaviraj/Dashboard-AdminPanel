import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { IThemeContext, ThemeType } from "./type";

export const Theme = {
  Light: "light" as ThemeType,
  Dark: "dark" as ThemeType,
};

export const ThemeContext = createContext<IThemeContext>({
  theme: Theme.Light,
  toggleTheme: () => {},
  T: true,
});

const UiThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>(Theme.Light);

  const toggleTheme = () => {
    setTheme((p) => (p == Theme.Light ? Theme.Dark : Theme.Light));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        T: theme == Theme.Light,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default UiThemeProvider;
