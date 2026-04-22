import React from "react";
import { NavbarMenu } from "../mockData/mockData";
import { IoWifi } from "react-icons/io5";
import ThemeButton from "../components/ThemeButton";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar flex items-center justify-between sticky top-0 z-50 px-6 py-5 
             /* Light Mode Styles */
             bg-white border-b border-slate-200
             /* Dark Mode Styles (Tailwind v4) */
             dark:bg-brand-backup/80 dark:backdrop-blur-xl 
             dark:border-white/10 transition-all duration-500"
    >
      <div className="navbar-logo">
        <Link to="/" className="flex items-center gap-2 group no-underline">
          <div className="p-2 bg-brand-orange/10 rounded-lg group-hover:bg-brand-orange transition-colors duration-300">
            <IoWifi className="text-brand-orange group-hover:text-white text-2xl transition-colors" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white">
              Home<span className="text-brand-orange">Net</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 dark:text-slate-400">
              Connectivity
            </span>
          </div>
        </Link>
      </div>

      <ul className="hidden md:flex items-center gap-8">
        {NavbarMenu.map((item) => (
          <li key={item.id} className="relative group">
            <Link
              to={item.link}
              className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-orange dark:hover:text-brand-orange transition-colors"
            >
              {item.title}
            </Link>
            <span className="absolute -bottom-8 left-0  w-0 h-1 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <ThemeButton />
      </div>
    </nav>
  );
};

export default Navbar;
