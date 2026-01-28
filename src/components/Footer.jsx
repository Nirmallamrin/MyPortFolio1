import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">
              NI<span className="text-green-400">RMAL</span><span className="text-green-500">.</span>
            </h3>
            <p className="text-slate-500 text-sm max-w-xs">
              Building high-quality digital experiences with mission-driven developers.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex space-x-6 text-xl">
              <a href="https://github.com/Nirmallamrin" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-green-400 transition-colors">
                <IoLogoGithub />
              </a>
              <a href="https://www.linkedin.com/in/nirmal-mani-399125268/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-green-400 transition-colors">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/lamrin_____6/?hl=en" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-green-400 transition-colors">
                <FaInstagram />
              </a>
              <a href="mailto:hello@nirmal.com" className="text-slate-400 hover:text-green-400 transition-colors">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-slate-400 text-sm">
              &copy; {currentYear} <span className="text-white font-semibold">Nirmal Mani</span>.
            </p>
            <p className="text-slate-600 text-xs mt-1">All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;