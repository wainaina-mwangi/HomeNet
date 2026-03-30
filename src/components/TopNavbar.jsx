import React from 'react';
import { FaFacebook, FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";

const TopNavbar = () => {
  return (
    
    <div className='top-nav hidden sm:flex px-6 py-5 bg-slate-900 text-white/80 justify-between items-center text-sm border-b border-white/5'>
      
      {/* Contact Info Side */}
      <div className="flex items-center gap-2 font-medium tracking-wide">
        <IoCallOutline className="text-blue-400" />
        <span className="text-white/60">Customer Care:</span>
        <a href="tel:+254793888552" className="hover:text-blue-400 transition-colors">
          +(254) 793 888 552
        </a>
      </div>
      <div className="flex items-center gap-2 font-medium tracking-wide">
        <MdLocationPin  className="text-blue-400" />
        <span className="text-white/60">00100:</span>
        <a href="tel:+254793888552" className="hover:text-blue-400 transition-colors">
          LuckySummer,Nairobi
        </a>
      </div>

      {/* Social Media Side */}
      <div>
        <ul className='flex gap-3 items-center social_link'>
          <li>
            <FaFacebook size={16} />
          </li>
          <li>
            <FaSquareXTwitter size={16} />
          </li>
          <li >
            <FaLinkedin size={16} />
          </li>
          <li>
            <AiFillTikTok size={16} />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TopNavbar;