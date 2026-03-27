import React from "react";
import { NavbarMenu } from "../mockData/mockData";
import "./Navbar.css";
import { IoWifi } from "react-icons/io5";
import ThemeButton  from "../components/ThemeButton";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 shadow-md sticky top-0 z-50 bg-blue/80 backdrop-blur-md border-b border-slate-100">
      <div className="text-xl font-bold">
        <a
          href="/"
          aria-label="HomeNet Home"
          className="flex items-center gap-2"
        >
          <IoWifi />
          <span className="text-slate-800">Home</span>
          <span className="text-blue-500">Net</span>
        </a>
      </div>

      <ul className="flex items-center gap-8">
        {NavbarMenu.map((item) => (
          <li
            key={item.id}
            className="text-slate-600 font-medium hover:text-blue-600 transition-colors cursor-pointer"
          >
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
        <div className="flex items-center gap-4">
          <ThemeButton />
          <button className="hidden sm:block rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
            Get Started
          </button>
        </div>
    </nav>
  );
};

export default Navbar;
