// src/contexts/ThemeContextArea.jsx
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

export function ThemeContextArea({ children }) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    useEffect(() => {
    document.documentElement.dataset.theme = theme;
    }, [theme]);

    return (
    <ThemeContext value={{ theme, toggleTheme }}>
        {children}
    </ThemeContext>
    );
}