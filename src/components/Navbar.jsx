import React, { useState } from "react";
import { NavbarMenu } from "../mockData/mockData";
import { IoWifi } from "react-icons/io5";
import {  MdClose } from "react-icons/md";
import { VscLayoutSidebarRightDock } from "react-icons/vsc";
import ThemeButton from "../components/ThemeButton";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar flex items-center justify-between sticky top-0 z-50 px-6 py-5 bg-white dark:bg-gray-900">
     
      <div className="navbar-logo">
        <Link to="/" className="flex items-center gap-2 group no-underline">
          <div className="p-2 bg-brand-orange/10 rounded-lg group-hover:bg-brand-orange transition-colors duration-300">
            <IoWifi className="text-brand-orange group-hover:text-white text-2xl transition-colors" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="nav-logo-text dark:text-white text-xl font-black tracking-tighter">
              Home<span className="text-brand-orange">Net</span>
            </span>
            <span className="nav-subtext text-[10px] uppercase tracking-[0.2em] font-bold">
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
              className="nav-link text-sm font-semibold transition-colors"
            >
              {item.title}
            </Link>
            <span className="absolute rounded -bottom-8 left-0 w-0 h-1 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

     
      <div className="flex items-center gap-3">
        <ThemeButton />
        
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          {isOpen ? (
            <MdClose className="text-3xl cursor-pointer text-brand-orange" />
          ) : (
            <VscLayoutSidebarRightDock className="text-3xl cursor-pointer text-brand-orange" />
          )}
        </div>
      </div>


      <div className={`mobile-overlay ${isOpen ? "active" : ""}`} onClick={toggleMenu} />
      
      <div className={`mobile-drawer ${isOpen ? "open" : ""}`}>
        <div className="drawer-content">
          <div className="drawer-header">
            <div className="drawer-logo">
              <IoWifi className="text-brand-orange" />
              <span className="text-white">Home<span className="text-brand-orange">Net</span></span>
            </div>
            <button className="close-btn" onClick={toggleMenu}><MdClose /></button>
          </div>

          <div className="drawer-body">
            {NavbarMenu.map((item) => (
              <Link 
                key={item.id} 
                to={item.link} 
                className="mobile-link"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
                <span className="arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
