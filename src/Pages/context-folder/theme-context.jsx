import { createContext, useContext, useState } from "react";

const defaultTheme = {
    backgroundColor: "#15141a",
    color: "black"
};

const ThemeContext = createContext(defaultTheme);

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");

    const ThemeToogle = () => {
        setTheme((theme) => (theme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, ThemeToogle }}>
            {children}
        </ThemeContext.Provider>
    );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
