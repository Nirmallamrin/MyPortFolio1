import React, { useState } from "react";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3, IoLogoJavascript, IoLogoVercel, IoLogoWhatsapp } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import {
  SiExpress,
  SiMongodb,
  SiPostman,
  SiSupabase,
  SiFirebase,
  SiWordpress,
  SiNextdotjs,
  SiMeta,
  SiPostgresql,
  SiNetlify,
  SiFigma,
} from "react-icons/si";
import {
  FaReact,
  FaAws,
  FaServer,
  FaTerminal,
  FaGitAlt,
  FaGithub,
  FaInstagram,
  FaCode,
  FaSlack,
} from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

const skillCategories = [
  {
    category: "Frontend Development",
    description: "Modern, reactive, and responsive user interfaces",
    skills: [
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "JavaScript (ES6+)", icon: <IoLogoJavascript className="text-yellow-400" /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-cyan-400" /> },
      { name: "HTML5", icon: <TiHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <IoLogoCss3 className="text-blue-500" /> },
      { name: "MERN Stack", icon: <FaCode className="text-emerald-400" /> },
    ],
  },
  {
    category: "Backend & Databases",
    description: "Robust architectures, real-time data & scalable APIs",
    skills: [
      { name: "Node.js", icon: <DiNodejs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-slate-300" /> },
      { name: "Supabase", icon: <SiSupabase className="text-emerald-400" /> },
      { name: "Firebase", icon: <SiFirebase className="text-amber-400" /> },
      { name: "PostgreSQL / SQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    ],
  },
  {
    category: "APIs & Real-Time Messaging",
    description: "High-volume webhook pipelines & automated business messaging",
    skills: [
      { name: "Meta Graph API", icon: <SiMeta className="text-blue-500" /> },
      { name: "WhatsApp Business API", icon: <IoLogoWhatsapp className="text-green-500" /> },
      { name: "Instagram & FB Messaging", icon: <FaInstagram className="text-pink-500" /> },
      { name: "REST APIs & Webhooks", icon: <TbApi className="text-teal-400" /> },
    ],
  },
  {
    category: "Cloud, DevOps & Hosting",
    description: "Reliable production deployment, server root configuration & CI/CD",
    skills: [
      { name: "AWS Cloud", icon: <FaAws className="text-amber-500" /> },
      { name: "VPS Setup (Root Access)", icon: <FaServer className="text-emerald-400" /> },
      { name: "Linux / Deployment", icon: <FaTerminal className="text-yellow-400" /> },
      { name: "Vercel", icon: <IoLogoVercel className="text-white" /> },
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "Netlify", icon: <SiNetlify className="text-cyan-400" /> },
    ],
  },
  {
    category: "CMS & Workflow Tools",
    description: "Content management & professional developer tooling",
    skills: [
      { name: "WordPress", icon: <SiWordpress className="text-blue-400" /> },
      { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
      { name: "Figma", icon: <SiFigma className="text-purple-400" /> },
      { name: "Slack", icon: <FaSlack className="text-purple-400" /> },
    ],
  },
];

const softSkills = [
  "Problem Solving",
  "Time Management",
  "Timely Execution",
  "Process Discipline",
  "Adaptability",
  "Clear Communication",
  "English",
  "Malayalam",
  "Tamil",
];

const Skills = () => {
  return (
    <div className="min-h-screen py-24 md:py-32 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 tracking-tight">
            MY <span className="text-gradient">SKILLS</span>
          </h1>
          <div className="w-24 h-1.5 bg-green-500 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-400 max-w-xl mx-auto">
            Full-stack engineering, cloud infrastructure, real-time Meta APIs, and production deployment capabilities.
          </p>
        </div>

        {/* Categorized Skills */}
        <div className="space-y-16 mb-20">
          {skillCategories.map((cat, cIdx) => (
            <div key={cIdx} className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-white/10 pb-3 gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></div>
                  <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-white">
                    {cat.category}
                  </h2>
                </div>
                <span className="text-xs text-slate-400 font-medium">
                  {cat.description}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="glass-card bg-white/5 hover:bg-white/10 border-white/5 hover:border-green-500/30 p-5 rounded-2xl flex flex-col items-center text-center transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <p className="font-semibold text-slate-200 text-sm md:text-base group-hover:text-green-400 transition-colors">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Human / Soft Skills */}
        <div>
          <div className="flex items-center gap-3 border-b border-white/10 pb-3 mb-8">
            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-white">
              Professional Strengths & Languages
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 md:gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="px-5 py-3 glass-card bg-white/5 hover:bg-green-500/10 border-white/10 hover:border-green-500/50 rounded-xl text-center font-bold text-slate-300 hover:text-green-400 transition-all cursor-default text-sm md:text-base shadow-sm"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

