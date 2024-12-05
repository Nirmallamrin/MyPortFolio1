import React from 'react'
import ecommerce from "../assets/IMG39.jpg"
import news from "../assets/IMG40.jpg"
import weather from "../assets/IMG41.png"
import todo from "../assets/IMG42.png"
import expense from "../assets/IMG43.png"
import nuxt from "../assets/IMG44.png"
import blogs from "../assets/IMG13.png"
import estate from "../assets/IMG12.png";

const projects = [
  {
    title: "E-Commerce Web Application",
    description:
      "A full-featured e-commerce web application built using the MERN stack.",
    imageUrl: news,
    liveLink: "https://e-commerce-fe-cyan.vercel.app/",
    githubLink: "https://github.com/Nirmallamrin",
  },
  {
    title: "News Website",
    description:
      "A news website that aggregates articles from various sources, using MERN Stack",
    imageUrl: ecommerce,
    liveLink: "https://entri-news-client.vercel.app/",
    githubLink: "https://github.com/Nirmallamrin",
  },
  {
    title: "Estate WebSite",
    description: "Estate Website Using MERN Stack",
    imageUrl: estate,
    liveLink: "https://estate-web-mp5d.vercel.app/",
    githubLink: "https://github.com/Nirmallamrin/EstateWeb.git",
  },
  {
    title: "Weather App",
    description: " Weather App using React Vite",
    imageUrl: weather,
    liveLink: "https://weather-app-dun-kappa-84.vercel.app/",
    githubLink: "https://github.com/Nirmallamrin/WeatherApp.git",
  },
  {
    title: "To Do List ",
    description: "To Do List App using React Vite",
    imageUrl: todo,
    liveLink: "https://to-do-list-seven-beta-43.vercel.app/",
    githubLink: "https://github.com/Nirmallamrin/To-Do-List.git",
  },
  {
    title: "Expense Tracker",
    description: "Expense Tracker App using React Vite",
    imageUrl: expense,
    liveLink: "https://expense-tracker-rouge-ten.vercel.app/",
    githubLink: "https://github.com/Nirmallamrin/ExpenseTracker.git",
  },
  {
    title: "Nuxt Portfolio",
    description: "My Portfolio using Nuxt.js",
    imageUrl: nuxt,

    githubLink: "https://github.com/Nirmallamrin/nuxtPortfolio.git",
  },

  {
    title: "Blog",
    description: "Blog Web Application Using Next JS",
    imageUrl: blogs,

    githubLink: "https://github.com/Nirmallamrin/blog-app-next.git",
  },
];

const Projects = () => {
  return (
    <div className="bg-custom-image p-8">
     
      <h1 className="font-bold italic text-white text-5xl flex justify-center  mb-12">My Projects</h1>
      <div className="m-12 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-300 p-12 rounded-lg shadow-lg transition-transform transform hover:scale-110">
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-fit rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="mb-4">{project.description}</p>
              <a href={project.liveLink} className="text-blue-500 hover:underline mr-4" target="_blank" rel="noopener noreferrer">Live Page</a>
              <a href={project.githubLink} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Projects
