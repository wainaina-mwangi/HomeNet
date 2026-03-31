import { useTheme } from "../pages/ThemeContext";
import { MdDarkMode } from "react-icons/md";
import { LuSunMedium } from "react-icons/lu";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="group relative flex items-center justify-center p-2.5 rounded-xl 
                 transition-all duration-500 active:scale-90 overflow-hidden
                 /* Base / Light Mode: White with subtle brand border */
                 bg-white border border-brand-gray/30 shadow-sm
                 /* Dark Mode: Deep Navy Glass */
                 dark:bg-brand-navy/40 dark:border-white/10 dark:backdrop-blur-md
                 hover:border-brand-orange/50 hover:shadow-lg focus:outline-none"
      aria-label="Toggle Theme"
    >
      {/* Background Hover Glow - Using brand-orange gradient */}
      <span className="absolute inset-0 z-0 bg-gradient-to-tr from-brand-orange/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex items-center justify-center transition-all duration-700">
        {theme === "light" ? (
          <div className="flex items-center justify-center animate-in fade-in zoom-in spin-in-90 duration-500">
            {/* Sun Icon in Brand Orange */}
            <LuSunMedium className="text-xl text-brand-orange transition-transform group-hover:rotate-45" />
          </div>
        ) : (
          <div className="flex items-center justify-center animate-in fade-in zoom-in spin-in-180 duration-500">
            {/* Moon Icon in Brand Orange */}
            <MdDarkMode className="text-xl text-brand-orange drop-shadow-[0_0_8px_rgba(255,109,0,0.4)] transition-transform group-hover:-rotate-12" />
          </div>
        )}
      </div>

      {/* Decorative Brand Corners */}
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-brand-orange/40 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-brand-orange/40 opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
};

export default ThemeButton;
