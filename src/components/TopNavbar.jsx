import React from "react";
import { FaFacebook, FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";

const TopNavbar = () => {
  const socialLinks = [
    { icon: <FaFacebook />, link: "#", label: "Facebook" },
    { icon: <FaSquareXTwitter />, link: "#", label: "X" },
    { icon: <FaLinkedin />, link: "#", label: "LinkedIn" },
    { icon: <AiFillTikTok />, link: "#", label: "TikTok" },
  ];

  return (
    <div
      className="top-nav hidden sm:flex px-8 py-2.5 items-center justify-between text-[13px] transition-all duration-500
                 bg-slate-50 text-slate-700 border-b border-slate-200
                 dark:bg-[#020b1d]/90 dark:backdrop-blur-md dark:text-slate-300 dark:border-white/5"
    >
  
      <div className="flex items-center gap-8">
        <div className="group flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm border border-slate-200 group-hover:border-brand-orange/30 group-hover:bg-brand-orange/5 transition-all duration-300">
            <IoCallOutline className="text-brand-orange text-base" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Customer Care</span>
            <a
              href="tel:+254793888552"
              className="hover:text-brand-orange font-bold transition-colors text-white dark:text-slate-100"
            >
              +254 793 888 552
            </a>
          </div>
        </div>
        <div className="h-6 w-[1px] bg-slate-300 dark:bg-white/10" />
        <div className="group flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm border border-slate-200 group-hover:border-brand-orange/30 group-hover:bg-brand-orange/5 transition-all duration-300">
            <MdLocationPin className="text-brand-orange text-base" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Location</span>
            <span className="font-bold text-white dark:text-slate-100">LuckySummer, Nairobi</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="h-1 w-1 rounded-full bg-slate-300 dark:bg-white/20" />
        <ul className="flex gap-2.5 items-center  ">
          {socialLinks.map((social, index) => (
            <li key={index} className='list-none'  >
              <a
                href={social.link}
                aria-label={social.label}
                className="flex items-center justify-center w-8 h-8 rounded-lg 
                           bg-white border border-slate-200 text-white-200 shadow-sm
                           hover:text-white hover:bg-brand-orange hover:border-brand-orange hover:-translate-y-1 
                           dark:bg-white/5 dark:border-white/10 dark:hover:bg-brand-orange
                           transition-all duration-300 ease-out "
              >
                {React.cloneElement(social.icon, { size: 16 })}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopNavbar;