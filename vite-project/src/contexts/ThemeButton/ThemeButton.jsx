// src/components/ThemeButton.jsx
import { use } from "react";
import { ThemeContext } from "../../contexts/ThemeContextArea";

function ThemeButton() {
    const { theme, toggleTheme } = use(ThemeContext);

    return (
    <button onClick={toggleTheme}>
        {theme === "light" ? "ダークモードにする" : "ライトモードにする"}
    </button>
    );
}

export default ThemeButton;