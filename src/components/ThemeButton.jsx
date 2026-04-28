import { useTheme } from "../pages/ThemeContext";
import { MdDarkMode } from "react-icons/md";
import { LuSunMedium } from "react-icons/lu";
import "./ThemeButton.css"; 

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle-btn ${theme}`}
      aria-label="Toggle Theme"
    >
      
      <span className="btn-gradient-overlay" />

      <div className="icon-wrapper">
        {theme === "light" ? (
          <div className="icon-container sun-animate">
            <LuSunMedium className="theme-icon sun" />
          </div>
        ) : (
          <div className="icon-container moon-animate">
            <MdDarkMode className="theme-icon moon" />
          </div>
        )}
      </div>

      
      <div className="corner corner-top-right" />
      <div className="corner corner-bottom-left" />
    </button>
  );
};

export default ThemeButton;