import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { FaCodeBranch } from "react-icons/fa6";

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
          <li><Link to="/skills" className="text-white">Skills</Link></li>
          <li><Link to="/projects" className="text-white">Projects</Link></li>
          <li><Link to="/resume" className="text-white">Resume</Link></li>
          <li><Link to="/blog" className="text-white">Blog</Link></li>
          <li><Link to="/contact" className="text-white">Contact</Link></li>
          <li><button className="text-black font-extrabold bg-white hover:bg-gray-800 p-1 rounded-md" >Hire Me</button></li>
          <li><Link to="https://github.com/Nirmallamrin/MyPortFolio1.git"
          target="_blank"
           className='text-white text-3xl font-bold hover:text-gray-700'><FaCodeBranch /></Link></li>
        </ul>   
        <div></div>
      </div>
      <Outlet/>
    </nav>
  );
};

export default Navbar;