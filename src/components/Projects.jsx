import React, { useState } from 'react';
import ecommerce from "../assets/IMG39.jpg";
import news from "../assets/IMG40.jpg";
import weather from "../assets/IMG41.png";
import todo from "../assets/IMG42.png";
import expense from "../assets/IMG43.png";
import nuxt from "../assets/IMG44.png";
import blogs from "../assets/IMG13.png";
import estate from "../assets/IMG12.png";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";

const projects = [
  {
    title: "Meta Unified Message Management Hub",
    description: "Centralized multi-platform customer communication dashboard integrating WhatsApp Business, Instagram Graph API, and Facebook Messenger into one live inbox with automated webhook dispatches.",
    imageUrl: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&auto=format&fit=crop&q=60",
    githubLink: "https://github.com/Nirmallamrin",
    tags: ["Meta Graph API", "WhatsApp Business", "React.js", "Webhooks", "Node.js"],
    category: "Meta & APIs",
    featured: true,
    highlight: "40% Faster Response"
  },
  {
    title: "Razorpay Realtime Payment Gateway Integration",
    description: "Robust production payment system featuring dynamic Razorpay Standard Checkout, cryptographic webhook signature verification, automated order generation, and real-time transaction reconciliation.",
    imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=60",
    githubLink: "https://github.com/Nirmallamrin",
    tags: ["Razorpay API", "Node.js", "React.js", "Fintech", "Security"],
    category: "Fintech & CRM",
    featured: true,
    highlight: "Real-time Verification"
  },
  {
    title: "Meta Billing & Campaign CRM Platform",
    description: "Comprehensive CRM and billing dashboard tailored for ad-spend tracking, automated PDF invoice generation, WhatsApp payment alerts, credit limit monitoring, and multi-tier subscription billing.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    githubLink: "https://github.com/Nirmallamrin",
    tags: ["Next.js", "Supabase", "Meta API", "Tailwind CSS", "PostgreSQL"],
    category: "Fintech & CRM",
    featured: true,
    highlight: "Automated Invoicing"
  },
  {
    title: "WhatsApp OTP Authentication & Verification Engine",
    description: "High-security WhatsApp-based OTP verification gateway achieving a 99% message delivery success rate, slashing telephony SMS overheads in low-coverage regions.",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=60",
    githubLink: "https://github.com/Nirmallamrin",
    tags: ["WhatsApp API", "VPS Deployment", "Security", "Node.js"],
    category: "Meta & APIs",
    featured: true,
    highlight: "99% Delivery Rate"
  },
  {
    title: "Estate WebSite",
    description: "High-end real estate marketplace featuring interactive property exploration, responsive listings, and fluid animations built with MERN and GSAP.",
    imageUrl: estate,
    liveLink: "https://estate-web-mp5d.vercel.app/",
    githubLink: "https://github.com/Nirmallamrin/EstateWeb.git",
    tags: ["MERN", "Prisma", "GSAP"],
    category: "Full Stack"
  },
  {
    title: "E-Commerce Web Application",
    description: "A full-featured e-commerce web application with product catalogs, shopping cart state management, and responsive checkout flows.",
    imageUrl: news,
    liveLink: "https://e-commerce-fe-cyan.vercel.app/",
    githubLink: "https://github.com/Nirmallamrin",
    tags: ["MERN", "Tailwind", "Redux"],
    category: "Full Stack"
  },
  {
    title: "News Web Portal",
    description: "A dynamic news aggregator delivering curated articles and breaking news feeds from diverse categories.",
    imageUrl: ecommerce,
    liveLink: "https://entri-news-client.vercel.app/",
    githubLink: "https://github.com/Nirmallamrin",
    tags: ["MERN", "API", "Auth"],
    category: "Full Stack"
  },
  {
    title: "Engineering Blog Platform",
    description: "Fast, SEO-optimized tech blog web application built using Next.js with static generation and Markdown rendering.",
    imageUrl: blogs,
    githubLink: "https://github.com/Nirmallamrin/blog-app-next.git",
    tags: ["Next.js", "Markdown", "SEO"],
    category: "Full Stack"
  },
];

const categories = ["All", "Meta & APIs", "Fintech & CRM", "Full Stack"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen py-24 md:py-32 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 tracking-tight">
            RECENT <span className="text-gradient">WORK</span>
          </h1>
          <div className="w-24 h-1.5 bg-green-500 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-400 max-w-xl mx-auto">
            A showcase of production-ready systems, Meta API integrations, payment processing suites, and modern full-stack web applications.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-14">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === cat
                  ? "bg-green-500 text-slate-900 shadow-lg shadow-green-500/25 scale-105"
                  : "bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`glass-card flex flex-col group overflow-hidden p-0 rounded-3xl border-white/5 transition-all duration-300 hover:-translate-y-1.5 ${
                project.featured ? "ring-1 ring-green-500/30" : ""
              }`}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent opacity-80"></div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.featured && (
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-green-500 text-slate-950 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-green-500/30">
                      <FaStar className="text-[10px]" /> Featured
                    </span>
                  )}
                  {project.highlight && (
                    <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-md text-green-400 border border-green-500/30 text-[10px] font-bold uppercase tracking-wider rounded-full">
                      {project.highlight}
                    </span>
                  )}
                </div>

                {/* Hover Links Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/60 backdrop-blur-sm">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/10 hover:bg-green-500 hover:text-slate-950 rounded-full text-white transition-all transform hover:scale-110 shadow-lg"
                    title="View Code on GitHub"
                  >
                    <FaGithub size={22} />
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white/10 hover:bg-green-500 hover:text-slate-950 rounded-full text-white transition-all transform hover:scale-110 shadow-lg"
                      title="View Live Demo"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-7 md:p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags?.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors uppercase leading-snug">
                  {project.title}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium flex-grow">
                  {project.description}
                </p>
                <div className="flex items-center gap-6 pt-4 border-t border-white/5 mt-auto">
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-2 text-xs font-black tracking-wider text-slate-300 hover:text-green-400 transition-colors uppercase"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={14} /> Repository
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      className="flex items-center gap-2 text-xs font-black tracking-wider text-green-400 hover:text-green-300 transition-colors uppercase"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt size={12} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

