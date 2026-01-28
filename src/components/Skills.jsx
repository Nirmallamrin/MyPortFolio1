import React from "react";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3, IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiSupabase, SiWordpress } from "react-icons/si";
import { FaReact, FaWindows, FaSlack } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML5", icon: <TiHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <IoLogoCss3 className="text-blue-500" /> },
    { name: "JavaScript", icon: <IoLogoJavascript className="text-yellow-400" /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-cyan-400" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Node.js", icon: <DiNodejs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-slate-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "Supabase", icon: <SiSupabase className="text-emerald-500" /> },
    { name: "WordPress", icon: <SiWordpress className="text-blue-400" /> },
  ];

  const tools = [
    { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "Vercel", icon: <IoLogoVercel className="text-white" /> },
    { name: "Slack", icon: <FaSlack className="text-purple-400" /> },
    { name: "Windows", icon: <FaWindows className="text-blue-400" /> },
  ];

  const softSkills = ["English", "Malayalam", "Tamil", "Communication", "Problem Solving"];

  return (
    <div className="bg-custom-image min-h-screen py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
            MY <span className="text-gradient">SKILLS</span>
          </h1>
          <div className="w-24 h-1.5 bg-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Technical Skills */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-10 border-l-4 border-green-500 pl-4 uppercase tracking-widest text-slate-400">
            Technical Proficiency
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="card group">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <p className="font-semibold text-slate-300">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Tools */}
          <div>
            <h2 className="text-2xl font-bold mb-10 border-l-4 border-green-500 pl-4 uppercase tracking-widest text-slate-400">
              Tools I Leverage
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <div key={index} className="card group">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {tool.icon}
                  </div>
                  <p className="font-semibold text-slate-300">{tool.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h2 className="text-2xl font-bold mb-10 border-l-4 border-green-500 pl-4 uppercase tracking-widest text-slate-400">
              Human Skills
            </h2>
            <div className="flex flex-wrap gap-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="px-6 py-4 glass-card bg-white/5 hover:bg-green-500/10 border-white/10 hover:border-green-500/50 flex-1 min-w-[150px] text-center font-bold text-slate-300 transition-all cursor-default">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
