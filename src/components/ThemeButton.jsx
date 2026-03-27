import { useTheme } from "../pages/ThemeContext";
import { MdDarkMode } from "react-icons/md";
import { LuSunMedium } from "react-icons/lu";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="group relative flex items-center justify-center p-2.5 rounded-2xl 
                 transition-all duration-500 ease-spring active:scale-90
                 /* Light Mode: Glassy Slate */
                 bg-slate-100/50 border border-slate-200 shadow-sm
                 /* Dark Mode: Neon Blue Depth */
                 dark:bg-blue-500/10 dark:border-blue-500/30 dark:shadow-[0_0_15px_rgba(59,130,246,0.2)]
                 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 overflow-hidden"
      aria-label="Toggle Theme"
    >
      {/* Background Glow Effect */}
      <span className="absolute inset-0 z-0 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex items-center justify-center transition-all duration-700 ease-in-out">
        {theme === "light" ? (
          <div className="flex items-center justify-center animate-in fade-in zoom-in spin-in-90 duration-500">
            < LuSunMedium className="text-xl text-slate-700 transition-transform group-hover:-rotate-12" />
          </div>
        ) : (
          <div className="flex items-center justify-center animate-in fade-in zoom-in spin-in-180 duration-500">
            < MdDarkMode className="text-xl text-blue-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)] transition-transform group-hover:rotate-90" />
          </div>
        )}
      </div>

      {/* Hidden tech-style border corner (Modern Detail) */}
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
};

export default ThemeButton;
