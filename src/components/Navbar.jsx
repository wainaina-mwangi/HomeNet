import React from "react";
import { NavbarMenu } from "../mockData/mockData";
import { IoWifi } from "react-icons/io5";
import ThemeButton from "../components/ThemeButton";
import "./Navbar.css";
import{Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className="navbar flex items-center justify-between  sticky top-0 z-50 dark:py-10 px-6 py-5
                    bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl 
                    border-b border-slate-200 dark:border-white-500 transition-all duration-500"
    >
      {/* Logo Section */}
      <div className="navbar-logo">
        <Link to="/" className="flex items-center gap-2 group no-underline">
          <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500 transition-colors duration-300">
            <IoWifi className="text-blue-500 group-hover:text-white text-2xl transition-colors" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white">
              Home<span className="text-blue-500">Net</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
              Connectivity
            </span>
          </div>
        </Link>
      </div>

      {/* Navigation Links - Animated Underlines */}
      <ul className="hidden md:flex items-center gap-8">
        {NavbarMenu.map((item) => (
          <li key={item.id} className="relative group">
            <Link
              to={item.link}
              className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-white transition-colors"
            >
              {item.title}
            </Link>
            {/* The "Cool" Underline Animation */}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Actions Section */}
      <div className="flex items-center gap-3">
        <ThemeButton />
        <button className="relative inline-flex items-center justify-center px-3 py-1.5 overflow-hidden font-bold text-white transition-all duration-300 bg-blue-600 rounded-full group active:scale-95 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40">
          <span className="absolute inset-0 w-full h-full transition duration-300 translate-x-full bg-slate-900 group-hover:translate-x-0 ease"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
