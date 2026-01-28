import React from "react";
import img2 from "../assets/IMG.png";
import { FaDownload, FaEye } from "react-icons/fa";

const Resume = () => {
  return (
    <div className="min-h-screen bg-custom-image py-32 px-6 flex flex-col items-center">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
            MY <span className="text-gradient">RESUME</span>
          </h1>
          <div className="w-24 h-1.5 bg-green-500 mx-auto rounded-full mb-12"></div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://drive.google.com/file/d/1UG_igq2vYn_6P-zX_9oQyeTTBbTvViYJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-500 hover:bg-green-600 text-slate-900 font-bold rounded-xl transition-all transform hover:scale-105 flex items-center gap-2 shadow-xl shadow-green-500/20"
            >
              <FaDownload /> Download PDF
            </a>
            
          </div>
        </div>

        <div className="glass-card p-4 md:p-8 bg-white/5 border-white/5 relative group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          <img
            src={img2}
            alt="Resume Preview"
            className="w-full h-auto rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
