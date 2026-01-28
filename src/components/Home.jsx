import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import img from "../assets/IMG35.jpg";
import { Link } from "react-router-dom";
import Type from "./Type";

const Home = () => {
  return (
    <div className="min-h-screen  bg-custom-image bg-cover bg-center text-white flex items-center justify-center p-6 pt-32 lg:pt-20">
      <div className=" container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex flex-col items-center md:items-start space-y-8 md:w-1/2">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-green-400 font-medium tracking-[0.2em] uppercase text-sm md:text-base animate-pulse">
              Welcome to my portfolio
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="text-gradient block md:inline">Nirmal Mani</span>
            </h1>
            <div className="text-2xl md:text-4xl text-slate-300 font-light h-20">
              <Type />
            </div>
            <p className="max-w-lg text-slate-400 text-lg leading-relaxed hidden md:block">
              Dedicated and passionated Web Developer with a strong foundation
              in modern web technologies. Turning complex problems into elegant,
              user-friendly digital solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 w-full md:w-auto">
            <Link
              to="/contact"
              className="px-8 py-4 bg-green-500 hover:bg-green-600 text-slate-900 font-bold rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-green-500/20 text-center w-full sm:w-auto"
            >
              Get In Touch
            </Link>
            <div className="flex items-center space-x-6 text-2xl">
              <a
                href="https://github.com/Nirmallamrin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-all transform hover:-translate-y-1"
              >
                <IoLogoGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/nirmal-mani-399125268/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-all transform hover:-translate-y-1"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/lamrin_____6/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-all transform hover:-translate-y-1"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="relative group">
            {/* Animated Glow Backdrops */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>

            <div className="relative">
              <img
                src={img}
                alt="Nirmal Mani"
                className="w-64 md:w-80 lg:w-96 h-auto rounded-2xl border-4 border-white/5 object-cover grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl animate-float"
              />

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-slate-900/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl hidden md:block">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">
                    Available for work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;