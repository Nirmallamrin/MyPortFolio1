import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="flex ">
          <div className="text-white mx-12 font-italic font-bold text-4xl">
            <Link to="/">NM...</Link>
          </div>
        </div>

        
        <ul className="flex space-x-10 flex-grow justify-center">
          <li><Link to="/" className="text-white">Home</Link></li>
          <li><Link to="/about" className="text-white ">About</Link></li>
          <li><Link to="/projects" className="text-white">Projects</Link></li>
          <li><Link to="/resume" className="text-white">Resume</Link></li>
          <li><Link to="/portfolio" className="text-white">Portfolio</Link></li>
          <li><Link to="/blog" className="text-white">Blog</Link></li>
        </ul>

        
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
