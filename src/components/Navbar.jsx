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
        className={`fixed top-0 left-0 w-full h-screen bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Mobile Sidebar Content */}
      <div
        className={`fixed top-0 right-0 w-[75%] sm:w-[60%] h-screen bg-white dark:bg-gray-900 z-[70] p-8 transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8 mt-10">
          {NavbarMenu.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              onClick={() => setIsOpen(false)} // Close menu on link click
              className="text-xl font-bold hover:text-brand-orange transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
