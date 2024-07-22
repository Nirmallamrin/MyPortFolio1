import React from 'react';

const Contact = () => {
  return (
    <div className="bg-custom-image flex flex-col md:flex-row justify-between items-start p-8 bg-gray-100">
      
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className=" text-white text-2xl font-bold mb-4">Contact Information</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Email</h3>
          <p className="text-gray-700">example@example.com</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Phone</h3>
          <p className="text-gray-700">+123 456 7890</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">LinkedIn</h3>
          <a href="https://www.linkedin.com/in/yourprofile" className="text-blue-500" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/yourprofile
          </a>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Map</h3>
          <a href="https://www.google.com/maps/place/yourlocation" className="text-blue-500" target="_blank" rel="noopener noreferrer">
            View on Google Maps
          </a>
        </div>
      </div>

      
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <form action="" className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea id="message" name="message" className="w-full p-2 border border-gray-300 rounded" rows="4"></textarea>
          </div>
          <div>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
