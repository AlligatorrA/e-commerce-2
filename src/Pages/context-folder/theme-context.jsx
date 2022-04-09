import { createContext, useContext, useState, useEffect } from "react";

const defaultTheme = {
    backgroundColor: "#15141a",
    color: "black"
};

const ThemeContext = createContext(defaultTheme);

const ThemeProvider = ({ children }) => {
    const getStoredTheme = () => {
        const storedTheme = localStorage.getItem('theme')
        if (storedTheme) {
            return JSON.parse(localStorage.getItem("theme"))
        } else {
            return []
        }
    }


    const [theme, setTheme] = useState(getStoredTheme());
    useEffect(() => {

        localStorage.setItem("theme", JSON.stringify(theme))

    }, [theme])


    const ThemeToogle = () => {
        setTheme((theme) => (theme === "light" ? "dark" : "light"));
    };
    const [asideShow, setAsideShow] = useState(true);

    const showProduct = () => {
        setAsideShow((asideShow) => !asideShow);
    }


    // *******************Toast*****************
    const [toast, setToast] = useState('')
    const [showToast, setShowToast] = useState(false)

    const ShowToast = (child) => {
        setShowToast(true)
        setToast(child)
        setTimeout(() => {
            setShowToast(false)
            setToast('')
        }, 3000);

    }

    return (
        <ThemeContext.Provider value={{ theme, ThemeToogle, asideShow, showProduct, toast, ShowToast, showToast }}>
            {children}
        </ThemeContext.Provider>
    );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
