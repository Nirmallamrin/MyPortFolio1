import React, { useState } from 'react';
import { FaCalendarAlt, FaArrowRight, FaTag } from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    title: 'Architecting Scalable Cloud Deployments on AWS',
    content: 'A comprehensive guide into setting up AWS EC2 instances, S3 storage buckets, IAM security roles, and CloudFront CDN for zero-downtime web applications.',
    date: 'Feb 10, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60',
    category: 'AWS Cloud',
    readTime: '6 min read'
  },
  {
    id: 2,
    title: 'Production VPS Server Setup: From Root Access to Hardened Security',
    content: 'Step-by-step walkthrough of configuring Ubuntu VPS servers with root access, SSH key hardening, UFW firewalls, Nginx reverse proxy, and PM2 cluster management.',
    date: 'Jan 28, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=60',
    category: 'VPS & Linux',
    readTime: '8 min read'
  },
  {
    id: 3,
    title: 'Modern DevOps & Automated CI/CD Deployment Pipelines',
    content: 'How to streamline development to production using GitHub Actions, automated testing, environment secret management, and continuous container deployment.',
    date: 'Jan 15, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&auto=format&fit=crop&q=60',
    category: 'DevOps',
    readTime: '5 min read'
  },
  {
    id: 4,
    title: 'Integrating AI & Intelligent APIs into Modern Web Applications',
    content: 'Exploring how generative AI models, vector search, and intelligent workflow automation elevate business web apps into smart, adaptive digital tools.',
    date: 'Dec 22, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=60',
    category: 'AI & Machine Learning',
    readTime: '7 min read'
  },
  {
    id: 5,
    title: 'Scaling Real-Time Customer Messaging with Meta Graph API',
    content: 'How we unified WhatsApp Business, Instagram Direct, and Facebook Messenger webhooks into a high-throughput centralized messaging hub with 99% uptime.',
    date: 'Dec 05, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=60',
    category: 'Meta APIs',
    readTime: '6 min read'
  },
  {
    id: 6,
    title: 'Building Enterprise Full Stack Solutions with Next.js & Supabase',
    content: 'Leveraging React Server Components, PostgreSQL row-level security, and edge functions to deliver ultra-fast, secure, and reactive web applications.',
    date: 'Nov 18, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60',
    category: 'Full Stack',
    readTime: '5 min read'
  },
];

const categories = ['All', 'AWS Cloud', 'VPS & Linux', 'DevOps', 'AI & Machine Learning', 'Meta APIs', 'Full Stack'];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen py-24 md:py-32 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 tracking-tight">
            MY <span className="text-gradient">BLOG</span>
          </h1>
          <div className="w-24 h-1.5 bg-green-500 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-400 max-w-xl mx-auto">
            Practical insights on AWS Cloud, VPS server operations, DevOps workflows, AI integration, and full-stack development.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-14">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-green-500 text-slate-900 shadow-lg shadow-green-500/25 scale-105'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="glass-card flex flex-col group overflow-hidden p-0 border-white/5 h-full hover:border-green-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-green-500 text-slate-900 text-[10px] font-black uppercase tracking-widest rounded-full shadow-md">
                    {post.category}
                  </span>
                </div>
                <div className="absolute bottom-3 right-4 text-[11px] text-slate-300 bg-slate-900/80 px-2.5 py-0.5 rounded-full backdrop-blur-sm border border-white/10">
                  {post.readTime}
                </div>
              </div>

              <div className="p-7 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-slate-500 text-xs mb-3 font-medium">
                  <FaCalendarAlt className="text-green-400" />
                  {post.date}
                </div>
                <h2 className="text-lg md:text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.content}
                </p>
                <div className="mt-auto pt-2 border-t border-white/5">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-xs font-black text-green-400 group-hover:text-green-300 transition-all group/btn uppercase tracking-widest">
                      Read Article{" "}
                      <FaArrowRight className="group-hover/btn:translate-x-1.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

