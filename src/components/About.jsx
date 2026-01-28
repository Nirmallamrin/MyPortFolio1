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
    <div className="bg-custom-image min-h-screen py-20 px-6 ">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
            ABOUT <span className="text-gradient">ME</span>
          </h1>
          <div className="w-24 h-1.5 bg-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-20">
          {/* Left Side: Image Section */}
          <div className="w-full lg:w-5/12 max-w-md lg:max-w-none">
            <div className="relative group mx-auto lg:mx-0">
              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-green-500/30 to-emerald-600/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>

              <div className="relative overflow-hidden rounded-3xl border-2 border-white/10 shadow-2xl">
                <img
                  src={img1}
                  alt="Nirmal Mani"
                  className="w-full h-auto lg:h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Right Side: Content Section */}
          <div className="w-full lg:w-7/12 flex flex-col space-y-10">
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight leading-tight">
                Crafting Digital Excellence <br className="hidden md:block" />
                <span className="text-green-400 font-extrabold italic">Through Modern Code</span>
              </h2>

              <div className="grid gap-8">
                {/* Work Experience Card */}
                <div className="glass-card hover:bg-white/5 border-white/5 p-8 transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                    <div className="flex-shrink-0 p-4 bg-green-500/10 rounded-2xl text-green-400">
                      <FaBriefcase size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-widest text-center md:text-left">Working Experience</h3>
                      <p className="text-slate-400 leading-relaxed font-medium text-center md:text-left">
                        I specialize in <span className="text-white font-semibold">React (Vite)</span> and <span className="text-white font-semibold">Next.js</span> development.
                        My professional work focuses on building high-performance applications with <span className="text-white font-semibold">Supabase</span> for real-time backends, solidifying my ability to deliver scalable and modern digital products.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Education/Study Card */}
                <div className="glass-card hover:bg-white/5 border-white/5 p-8 transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                    <div className="flex-shrink-0 p-4 bg-blue-500/10 rounded-2xl text-blue-400">
                      <FaGraduationCap size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-widest text-center md:text-left">Deep Learning</h3>
                      <p className="text-slate-400 leading-relaxed font-medium text-center md:text-left">
                        Mastered the <span className="text-white font-semibold">MERN Stack</span> core fundamentals. My academic and self-driven study path has equipped me with a deep understanding of database architecture (MongoDB), backend logic (Express/Node), and frontend reactivity (React).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid - Aligned for better flow */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="glass-card p-6 border-white/5 flex flex-col items-center text-center group hover:border-green-500/30 transition-colors">
                  <div className="text-2xl md:text-3xl text-green-500 mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <div className="text-lg md:text-xl font-black text-white">{stat.value}</div>
                  <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-[0.2em] font-bold mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Actions */}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
