import React from 'react'
import ecommerce from "../assets/IMG39.jpg"
import news from "../assets/IMG40.jpg"
const projects = [
  {
    title: 'E-Commerce Web Application',
    description: 'A full-featured e-commerce web application built using the MERN stack.',
    imageUrl: news,
    liveLink: 'https://e-commerce-fe-cyan.vercel.app/',
    githubLink: 'https://github.com/Nirmallamrin',
  },
  {
    title: 'News Website',
    description: 'A news website that aggregates articles from various sources, using MERN Stack',
    imageUrl:ecommerce ,
    liveLink: 'https://entri-news-client.vercel.app/',
    githubLink: 'https://github.com/Nirmallamrin',
  },
  {
    title: "Weather App",
    description: " Weather App using React Vite",
    imageUrl: "",
    liveLink: 'https://your-live-link.com',
    githubLink: 'https://github.com/your-username/news-website',
  },
  {
    title: "",
    description: "",
    imageUrl: "",
    liveLink: 'https://your-live-link.com',
    githubLink: 'https://github.com/your-username/news-website',
  },
  
];

const Projects = () => {
  return (
    <div className="bg-custom-image p-8">
     
      <h1 className="text-white flex justify-center text-3xl font-bold mb-12">My Projects</h1>
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
