import React from 'react'
import ecommerce from "../assets/IMG39.jpg"
import news from "../assets/IMG40.jpg"
import weather from "../assets/IMG41.png"
import todo from "../assets/IMG42.png"
import expense from "../assets/IMG43.png"
import nuxt from "../assets/IMG44.png"
import blogs from "../assets/IMG13.png"
import estate from "../assets/IMG12.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Web Application",
    description: "A full-featured e-commerce web application built using the MERN stack.",
    imageUrl: news,
    liveLink: "https://e-commerce-fe-cyan.vercel.app/",
    githubLink: "https://github.com/Nirmallamrin",
    tags: ["MERN", "Tailwind", "Redux"]
  },
  {
    title: "News Website",
    description: "A news website that aggregates articles from various sources, using MERN Stack",
    imageUrl: ecommerce,
    liveLink: "https://entri-news-client.vercel.app/",
    githubLink: "https://github.com/Nirmallamrin",
    tags: ["MERN", "API", "Auth"]
  },
  {
    title: "Estate WebSite",
    description: "Estate Website Using MERN Stack",
    imageUrl: estate,
    liveLink: "https://estate-web-mp5d.vercel.app/",
    githubLink: "https://github.com/Nirmallamrin/EstateWeb.git",
    tags: ["MERN", "Prisma", "GSAP"]
  },
  {
    title: "Weather App",
    description: "Weather App using React Vite",
    imageUrl: weather,
    liveLink: "https://weather-app-dun-kappa-84.vercel.app/",
    githubLink: "https://github.com/Nirmallamrin/WeatherApp.git",
    tags: ["React", "API", "CSS"]
  },
  {
    title: "To Do List",
    description: "To Do List App using React Vite",
    imageUrl: todo,
    liveLink: "https://to-do-list-seven-beta-43.vercel.app/",
    githubLink: "https://github.com/Nirmallamrin/To-Do-List.git",
    tags: ["React", "LocalStorage"]
  },
  {
    title: "Expense Tracker",
    description: "Expense Tracker App using React Vite",
    imageUrl: expense,
    liveLink: "https://expense-tracker-rouge-ten.vercel.app/",
    githubLink: "https://github.com/Nirmallamrin/ExpenseTracker.git",
    tags: ["React", "Charts"]
  },
  {
    title: "Nuxt Portfolio",
    description: "My Portfolio using Nuxt.js",
    imageUrl: nuxt,
    githubLink: "https://github.com/Nirmallamrin/nuxtPortfolio.git",
    tags: ["Nuxt", "Vue", "Tailwind"]
  },
  {
    title: "Blog",
    description: "Blog Web Application Using Next JS",
    imageUrl: blogs,
    githubLink: "https://github.com/Nirmallamrin/blog-app-next.git",
    tags: ["Next.js", "Markdown", "SEO"]
  },
];

const Projects = () => {
  return (
    <div className="bg-custom-image min-h-screen py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
            RECENT <span className="text-gradient">WORK</span>
          </h1>
          <div className="w-24 h-1.5 bg-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="glass-card flex flex-col group overflow-hidden p-0 rounded-3xl border-white/5">
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60"></div>

                {/* Hover Links Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-green-500 hover:text-slate-900 transition-all">
                    <FaGithub size={24} />
                  </a>
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-green-500 hover:text-slate-900 transition-all">
                      <FaExternalLinkAlt size={22} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags?.map((tag, tIndex) => (
                    <span key={tIndex} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-green-500/10 text-green-400 rounded-full border border-green-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors uppercase">
                  {project.title}
                </h2>
                <p className="text-slate-400 leading-relaxed mb-6 font-medium">
                  {project.description}
                </p>
                <div className="flex items-center gap-6">
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> CODE
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      className="flex items-center gap-2 text-sm font-bold text-green-400 hover:text-green-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt /> DEMO
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
