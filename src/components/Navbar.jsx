import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-custom-image p-4 shadow-black">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-green-400 font-italic font-bold text-3xl md:text-5xl">
          <Link to="/">About Me.</Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <ul className={`flex-col md:flex md:flex-row md:space-x-10 text-xl items-center md:items-start absolute md:relative bg-black md:bg-transparent w-full md:w-auto left-0 transition-transform transform ${isOpen ? 'translate-y-0' : '-translate-y-full md:translate-y-0'}`}>
          <li><Link to="/" className="text-white block md:inline-block px-4 py-2 md:p-0">Home</Link></li>
          <li><Link to="/about" className="text-white block md:inline-block px-4 py-2 md:p-0">About</Link></li>
          <li><Link to="/projects" className="text-white block md:inline-block px-4 py-2 md:p-0">Projects</Link></li>
          <li><Link to="/resume" className="text-white block md:inline-block px-4 py-2 md:p-0">Resume</Link></li>
          <li><Link to="/portfolio" className="text-white block md:inline-block px-4 py-2 md:p-0">Portfolio</Link></li>
          <li><Link to="/blog" className="text-white block md:inline-block px-4 py-2 md:p-0">Blog</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
