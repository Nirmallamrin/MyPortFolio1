import React from "react";
import img1 from "../assets/IMG37.jpg";
import { FaGraduationCap, FaBriefcase, FaCode } from "react-icons/fa";

const About = () => {
  const stats = [
    { icon: <FaCode />, label: "Experience", value: "2+ Years" },
    { icon: <FaBriefcase />, label: "Projects", value: "15+ Completed" },
    { icon: <FaGraduationCap />, label: "Stack", value: "Full Stack" },
  ];

  return (
    <div className="bg-custom-image min-h-screen py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
            ABOUT <span className="text-gradient">ME</span>
          </h1>
          <div className="w-24 h-1.5 bg-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Section */}
          <div className="lg:w-2/5 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <img
              src={img1}
              alt="Nirmal Mani"
              className="relative rounded-2xl w-full h-[500px] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 border border-white/10"
            />
          </div>

          {/* Content Section */}
          <div className="lg:w-3/5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white uppercase tracking-tight">
                Crafting Digital Experiences <span className="text-green-400">Through Code</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed font-medium">
                I am a professional software developer specializing in the MERN stack (MongoDB, Express, React, Node.js).
                With a deep passion for clean architecture and user-centric design, I transform complex requirements into
                seamless, high-performance web applications.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed font-medium">
                My journey in tech is driven by curiosity and a commitment to continuous improvement. Whether it's
                architecting scalable backends or crafting pixel-perfect frontends, I strive for excellence in every line of code.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="glass-card p-6 border-white/5 flex flex-col items-center text-center">
                  <div className="text-3xl text-green-400 mb-2">{stat.icon}</div>
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-slate-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button className="px-10 py-4 bg-green-500 hover:bg-green-600 text-slate-900 font-bold rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-green-500/20">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
