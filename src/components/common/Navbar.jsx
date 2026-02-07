import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaCodeBranch, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Resume", id: "resume" },
    { name: "Blog", id: "blog" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={`flex items-center transition-all duration-300 px-6 py-2 rounded-2xl backdrop-blur-2xl shadow-2xl ${scrolled ? "bg-white/5 border border-white/10" : "bg-white/5 border border-transparent"
          }`}
      >
        <div className="flex items-center">
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeSection === link.id
                    ? "text-green-400 bg-green-400/10"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <a
              href="https://github.com/Nirmallamrin/MyPortFolio1.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 text-xl"
            >
              <FaCodeBranch />
            </a>
            <button
              onClick={toggleMobileMenu}
              className="text-white text-2xl focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          <div
            className={`fixed inset-0 bg-slate-900/95 backdrop-blur-xl z-50 transition-all duration-500 lg:hidden ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
              }`}
          >
            <div className="flex flex-col h-full p-8">
              <div className="flex justify-between items-center mb-12">
                <span className="text-green-400 font-bold text-2xl">MENU</span>
                <button onClick={toggleMobileMenu} className="text-white text-3xl">
                  <FaTimes />
                </button>
              </div>
              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className={`text-3xl font-bold transition-colors ${activeSection === link.id ? "text-green-400" : "text-slate-300 hover:text-white"
                        }`}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
                <li className="pt-6">
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="w-full py-4 bg-green-500 text-slate-900 font-bold rounded-2xl text-xl hover:bg-green-400 transition-colors"
                  >
                    Hire Me
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
