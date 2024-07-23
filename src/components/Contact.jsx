import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.message) errors.message = "Message is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // If there are no errors, show success alert
      alert("Successfully sent to Nirmal");
      // Optionally, clear the form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setFormErrors({});
    }
  };

  return (
    <div className="bg-custom-image flex flex-col md:flex-row justify-between items-start p-8 bg-gray-900">
      
      <div className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col justify-center items-center">
        <h2 className="text-white text-3xl font-bold mb-4">Contact Information</h2>
        <div className="flex flex-col justify-center items-center mt-10">
          <ul className="space-y-6 text-center">
            <li className="text-gray-300 flex items-center space-x-2">
              <SiGmail className="text-xl" />
              <span>nirmallamrin77@gmail.com</span>
            </li>
            <li className="text-gray-300 flex items-center space-x-2">
              <FaPhoneAlt className="text-xl" />
              <span>+91 6282637227</span>
            </li>
            <li className="text-gray-300 flex items-center space-x-2">
              <FaLinkedin className="text-xl" />
              <Link
                to="https://www.linkedin.com/in/nirmal-mani-399125268/"
                className="text-blue-300 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/nirmal-mani
              </Link>
            </li>
            <li className="text-gray-300 flex items-center space-x-2">
              <FaMapMarkerAlt className="text-xl" />
              <Link
                to="https://www.google.com/maps/place/yourlocation"
                className="text-blue-300 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Palakkad, kerala
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <h2 className="text-white text-3xl font-bold mb-4">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-gray-200"
            />
            {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-gray-200"
            />
            {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-gray-200"
              rows="4"
            ></textarea>
            {formErrors.message && <p className="text-red-500">{formErrors.message}</p>}
          </div>
          <div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
