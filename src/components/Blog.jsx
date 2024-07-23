import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'First Blog Post',
    content: 'This is the content of the first blog post.vg',
    date: 'July 23, 2024',
    imageUrl: 'https://via.placeholder.com/300', // Placeholder image URL
  },
  {
    id: 2,
    title: 'Second Blog Post',
    content: 'This is the content of the second blog post.',
    date: 'July 24, 2024',
    imageUrl: 'https://via.placeholder.com/300', 
  },
  {
    id: 3,
    title: 'Second Blog Post',
    content: 'This is the content of the second blog post,',
    date: 'July 24, 2024',
    imageUrl: 'https://via.placeholder.com/300', 
    visit:" "
  },
  {
    id: 4,
    title: 'Fourth Blog Post',
    content: 'This is the content of the first blog post.vg',
    date: 'July 23, 2024',
    imageUrl: 'https://via.placeholder.com/300', // Placeholder image URL
  },
  {
    id: 5,
    title: 'Fifth Blog Post',
    content: 'This is the content of the second blog post.',
    date: 'July 24, 2024',
    imageUrl: 'https://via.placeholder.com/300', 
  },
  {
    id: 6,
    title: 'Sixth Blog Post',
    content: 'This is the content of the second blog post,',
    date: 'July 24, 2024',
    imageUrl: 'https://via.placeholder.com/300', 
    visit:" "
  },

];

const Blog = () => {
  return (
    <div className="bg-custom-image py-8">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="font-bold italic text-white text-5xl mb-8 ">My Little Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-6 m-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-gray-300 rounded-lg shadow-md p-6 hover:shadow-lg transition-transform transform hover:scale-110">
              <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover rounded-t-lg mb-4 " />
              <div className="flex justify-between">
              <button className="text-xl font-bold mb-2 hover:text-zinc-600">{post.title}</button>
              <p className="text-gray-600 mb-4">{post.date}</p>
              </div>
              <p className="text-gray-800">{post.content}</p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
