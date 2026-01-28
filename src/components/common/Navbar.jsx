import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCodeBranch, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${scrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-xl py-3' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-green-400 font-bold text-2xl lg:text-3xl tracking-tighter">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            NI<span className="text-white">RMAL</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${location.pathname === link.path
                  ? 'text-green-400 bg-green-400/10'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="ml-4 flex items-center space-x-4">
            <button className="px-6 py-2 bg-green-500 hover:bg-green-600 text-slate-900 font-bold rounded-full transition-all transform hover:scale-105 active:scale-95 text-sm">
              Hire Me
            </button>
            <Link
              to="https://github.com/Nirmallamrin/MyPortFolio1.git"
              target="_blank"
              className="text-slate-300 hover:text-white transition-colors text-2xl"
            >
              <FaCodeBranch />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-4">
          <Link
            to="https://github.com/Nirmallamrin/MyPortFolio1.git"
            target="_blank"
            className="text-slate-300 text-xl"
          >
            <FaCodeBranch />
          </Link>
          <button onClick={toggleMobileMenu} className="text-white text-2xl focus:outline-none">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-slate-900/95 backdrop-blur-xl z-50 transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full p-8">
            <div className="flex justify-between items-center mb-12">
              <span className="text-green-400 font-bold text-2xl">MENU</span>
              <button onClick={toggleMobileMenu} className="text-white text-3xl">
                <FaTimes />
              </button>
            </div>
            <ul className="space-y-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-bold text-slate-300 hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-6">
                <button className="w-full py-4 bg-green-500 text-slate-900 font-bold rounded-2xl text-xl">
                  Hire Me
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
