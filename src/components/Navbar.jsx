import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-custom-image p-7 shadow-black">
      <div className="container mx-auto flex justify-between items-center ">
        
        <div className="flex ">
          <div className="text-green-400 mx-12 font-italic font-bold text-5xl flex-grow text-center">
            <Link to="/" >About Me.</Link>
          </div>
        </div>

        
        <ul className="flex space-x-10 text-xl">
          <li><Link to="/" className="text-white">Home</Link></li>
          <li><Link to="/about" className="text-white ">About</Link></li>
          <li><Link to="/projects" className="text-white">Projects</Link></li>
          <li><Link to="https://drive.google.com/file/d/15MC1IwNBJ-OjsMNG6Gznw5CDJoEFrOwQ/view?usp=drivesdk" className="text-white">Resume</Link></li>
          <li><Link to="/portfolio" className="text-white">Portfolio</Link></li>
          <li><Link to="/blog" className="text-white">Blog</Link></li>
          <li><Link to="/blog" className="text-white">Contact</Link></li>
        </ul>

        
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;