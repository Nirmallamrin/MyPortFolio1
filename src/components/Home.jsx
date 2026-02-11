import React, { useState, useEffect } from "react";

import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import img from "../assets/IMG35.jpg";
import Type from "./Type";
import ThreeBackground from "./ThreeBackground";
import Cube3D from "./Cube3D";

const Home = ({ isLoading }) => {
  

  // Parallax effect for the image
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative min-h-screen text-white flex items-center justify-center p-4 mt-[-15px] md:p-6 md:pt-32 lg:pt-20 overflow-hidden">
      {/* 3D Moving Background */}
      <ThreeBackground />

      <motion.div
        style={{ perspective: "1200px" }}
        initial={{ opacity: 0, y: 30 }}
        animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container mx-auto px-4 md:px-12 flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-60  z-10"
      >
        {/* Left Content */}
        <div className="flex flex-col items-center md:items-start space-y-8">
          <div className="space-y-4 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={
                !isLoading ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
              }
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-green-400 font-medium tracking-[0.2em] uppercase text-xs  animate-pulse"
            >
              Welcome to my portfolio
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={
                !isLoading ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
              }
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
            >
              Hi, I'm{" "}
              <span className="text-gradient block md:inline">Nirmal Mani</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={!isLoading ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl sm:text-2xl md:text-4xl text-slate-300 font-light h-16 md:h-20"
            >
              <Type />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={!isLoading ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="max-w-lg text-slate-400 text-base md:text-md leading-relaxed text-center md:text-left"
            >
              Dedicated and passionated Web Developer with a strong foundation
              in modern web technologies. Turning complex problems into elegant,
              user-friendly digital solutions.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-6 w-full md:w-auto"
          >
            <button
              onClick={() => {
                const element = document.getElementById("contact");
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
                }
              }}
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-slate-900 font-bold rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-green-500/20 text-center w-full sm:w-auto"
            >
              Get In Touch
            </button>
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
          </motion.div>
        </div>

        {/* Right Content - Image with Zoom Animation */}
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ scale: 0, opacity: 0, rotate: -10 }}
          animate={
            !isLoading
              ? { scale: 1, opacity: 1, rotate: 0 }
              : { scale: 0, opacity: 0, rotate: -10 }
          }
          transition={{
            duration: 1.2,
            ease: "easeOut",
            delay: 0.5,
          }}
          className="flex justify-center items-center"
        >
          <div className="relative group r">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>

            <div className="relative ">
              <img
                src={img}
                alt="Nirmal Mani"
                className="w-64  md:w-80 lg:w-96 h-auto rounded-2xl border-4 border-white/5 object-cover grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl animate-float"
              />

              {/* Floating Badge */}
              <div
                style={{
                  transform: "translateZ(50px)",
                  transformStyle: "preserve-3d",
                }}
                className="absolute -bottom-4 -right-4 bg-slate-900/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl hidden md:block"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">
                    Available for work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
