import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import img from "../assets/IMG35.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-custom-image bg-cover bg-center text-white flex items-center justify-center p-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">
        <div className="flex flex-col mb-48 md:mb-0 ml-14 md:ml-0 md:items-start space-y-4 md:w-1/2 transition-transform transform hover:scale-105">
          <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left">
            Hi, This is <span className="text-5xl md:text-6xl text-green-400">Nirmal</span>, I'm a Professional Software Developer.
          </h1>
          <ul className="flex justify-center md:justify-start space-x-4 md:space-x-6 text-2xl md:text-3xl pt-6">
            <li>
              <Link
                to="https://github.com/Nirmallamrin"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <IoLogoGithub />
              </Link>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nirmal-mani-399125268/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/lamrin_____6/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={img}
            alt="Nirmal"
            className="w-4/5 md:w-full h-auto rounded-lg transition-transform transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
