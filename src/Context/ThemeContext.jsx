import { useState } from "react";
import { createContext } from "react";


export const ThemeContext = createContext()

export default function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState("light")
    const [isDarkMode, setIsDarkMode] = useState(true)

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode)
        // console.log(isDarkMode)
        setTheme(isDarkMode ? "dark" : "light")
    }
    
    return (
        <div>
            <ThemeContext.Provider value={{ theme, isDarkMode, toggleMode }}>{children}</ThemeContext.Provider>
        </div>
    )
}