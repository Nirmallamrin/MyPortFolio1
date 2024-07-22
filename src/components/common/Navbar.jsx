import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCodeBranch, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-custom-image p-5 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-green-400 font-italic font-bold text-3xl lg:text-5xl">
          <Link to="/">About Me.</Link>
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="text-white text-3xl focus:outline-none">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <ul className={`lg:flex items-center space-x-8 text-xl ${isMobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <li><Link to="/" className="text-white hover:text-gray-400">Home</Link></li>
          <li><Link to="/about" className="text-white hover:text-gray-400">About</Link></li>
          <li><Link to="/skills" className="text-white hover:text-gray-400">Skills</Link></li>
          <li><Link to="/projects" className="text-white hover:text-gray-400">Projects</Link></li>
          <li><Link to="/resume" className="text-white hover:text-gray-400">Resume</Link></li>
          <li><Link to="/blog" className="text-white hover:text-gray-400">Blog</Link></li>
          <li><Link to="/contact" className="text-white hover:text-gray-400">Contact</Link></li>
          <li><button className="text-black font-extrabold bg-white hover:bg-gray-800 p-2 rounded-md">Hire Me</button></li>
          <li>
            <Link to="https://github.com/Nirmallamrin/MyPortFolio1.git" target="_blank" className="text-white text-3xl font-bold hover:text-gray-400">
              <FaCodeBranch />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
