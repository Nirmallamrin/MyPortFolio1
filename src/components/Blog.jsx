import React from 'react';
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    title: 'Modern Web Development with MERN',
    content: 'Exploring the depths of MongoDB, Express, React, and Node.js for scalable apps.',
    date: 'Jan 15, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60',
    category: 'Development'
  },
  {
    id: 2,
    title: 'Mastering Tailwind CSS',
    content: 'How to build beautiful, responsive interfaces faster than ever before.',
    date: 'Dec 20, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&auto=format&fit=crop&q=60',
    category: 'Design'
  },
  {
    id: 3,
    title: 'The Future of Javascript',
    content: 'A look into upcoming features and trends in the world of ECMAScript.',
    date: 'Nov 12, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&auto=format&fit=crop&q=60',
    category: 'Tech'
  },
];

const Blog = () => {
  return (
    <div className="bg-custom-image min-h-screen py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
            MY <span className="text-gradient">BLOG</span>
          </h1>
          <div className="w-24 h-1.5 bg-green-500 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-400 max-w-lg mx-auto">Sharing my thoughts, experiences, and tutorials on modern web technologies.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="glass-card flex flex-col group overflow-hidden p-0 border-white/5 h-full hover:border-green-500/20">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-green-500 text-slate-900 text-[10px] font-black uppercase tracking-widest rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-slate-500 text-xs mb-4">
                  <FaCalendarAlt className="text-green-500" />
                  {post.date}
                </div>
                <h2 className="text-xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.content}
                </p>
                <div className="mt-auto">
                  <button className="flex items-center gap-2 text-xs font-black text-green-400 hover:text-green-300 transition-all group/btn uppercase tracking-widest">
                    Read More <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
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
