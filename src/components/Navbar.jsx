import React, { useState } from "react";
import { NavbarMenu } from "../mockData/mockData";
import { IoWifi } from "react-icons/io5";
import { MdMenu, MdClose } from "react-icons/md"; // Added icons for mobile
import ThemeButton from "../components/ThemeButton";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar flex items-center justify-between sticky top-0 z-50 px-6 py-5 bg-white dark:bg-gray-900">
      {/* Logo Section */}
      <div className="navbar-logo">
        <Link to="/" className="flex items-center gap-2 group no-underline">
          <div className="p-2 bg-brand-orange/10 rounded-lg group-hover:bg-brand-orange transition-colors duration-300">
            <IoWifi className="text-brand-orange group-hover:text-white text-2xl transition-colors" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="nav-logo-text text-xl font-black tracking-tighter">
              Home<span className="text-brand-orange">Net</span>
            </span>
            <span className="nav-subtext text-[10px] uppercase tracking-[0.2em] font-bold">
              Connectivity
            </span>
          </div>
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8">
        {NavbarMenu.map((item) => (
          <li key={item.id} className="relative group">
            <Link
              to={item.link}
              className="nav-link text-sm font-semibold transition-colors"
            >
              {item.title}
            </Link>
            <span className="absolute rounded -bottom-8 left-0 w-0 h-1 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Right Side Actions */}
      <div className="flex items-center gap-3">
        <ThemeButton />
        
        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          {isOpen ? (
            <MdClose className="text-3xl cursor-pointer text-brand-orange" />
          ) : (
            <MdMenu className="text-3xl cursor-pointer text-brand-orange" />
          )}
        </div>
      </div>

     {/* Mobile Sidebar Overlay */}
<div
  className={`fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[60] transition-opacity duration-500 md:hidden ${
    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
  }`}
  onClick={toggleMenu}
/>

{/* Mobile Sidebar Content */}
<div
  className={`fixed top-0 right-0 w-[85%] max-w-[400px] h-screen bg-white dark:bg-slate-950 z-[70] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden ${
    isOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  <div className="flex flex-col h-full p-8">
    
    {/* Drawer Header: Logo & Close */}
    <div className="flex items-center justify-between mb-10">
      <div className="flex items-center gap-2">
        <IoWifi className="text-brand-orange text-2xl" />
        <span className="text-xl font-black tracking-tighter dark:text-white">
          Home<span className="text-brand-orange">Net</span>
        </span>
      </div>
      <button 
        onClick={toggleMenu}
        className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500"
      >
        <MdClose size={24} />
      </button>
    </div>

    {/* Navigation Links */}
    <div className="flex flex-col gap-1">
      <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-4">
        Menu
      </p>
      {NavbarMenu.map((item) => (
        <Link
          key={item.id}
          to={item.link}
          onClick={() => setIsOpen(false)}
          className="group flex items-center justify-between py-4 border-b border-slate-100 dark:border-slate-800 no-underline"
        >
          <span className="text-lg font-semibold text-slate-700 dark:text-slate-200 group-hover:text-brand-orange transition-colors">
            {item.title}
          </span>
          <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-orange">
            →
          </span>
        </Link>
      ))}
    </div>

    {/* Footer Section of Sidebar */}
    <div className="mt-auto pt-10">
      <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800">
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
          Ready for high-speed internet?
        </p>
        <button className="w-full bg-brand-orange text-white py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-brand-orange/30 transition-all">
          Get Started
        </button>
      </div>
    </div>
  </div>
</div>
    </nav>
  );
};

export default Navbar;
