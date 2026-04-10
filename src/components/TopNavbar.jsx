import React from "react";
import { FaFacebook, FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";

const TopNavbar = () => {
  return (
    <div
      className="top-nav hidden sm:flex px-6 py-3 items-center justify-between text-sm transition-all duration-500
                    
                    bg-slate-50 text-brand-orange-600 border-b border-slate-200
                    
                    dark:bg-brand-option dark:text-white/80 dark:border-white/5"
    >
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 font-medium tracking-wide">
          <IoCallOutline className="text-brand-orange text-lg" />
          <span className="opacity-60">Customer Care:</span>
          <a
            href="tel:+254793888552"
            className="hover:text-brand-orange transition-colors"
          >
            +(254) 793 888 552
          </a>
        </div>

        <div className="flex items-center gap-2 font-medium tracking-wide">
          <MdLocationPin className="text-brand-orange text-lg" />
          <span className="opacity-60">Location:</span>
          <span className="dark:text-white/90">LuckySummer, Nairobi</span>
        </div>
      </div>

      <div>
        <ul className="flex gap-4 items-center social_link">
          {[
            { icon: <FaFacebook size={16} />, link: "#" },
            { icon: <FaSquareXTwitter size={16} />, link: "#" },
            { icon: <FaLinkedin size={16} />, link: "#" },
            { icon: <AiFillTikTok size={18} />, link: "#" },
          ].map((social, index) => (
            <li key={index}>
              <a
                href={social.link}
                className="opacity-60 hover:opacity-100 hover:text-brand-orange transition-all duration-300"
              >
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopNavbar;
