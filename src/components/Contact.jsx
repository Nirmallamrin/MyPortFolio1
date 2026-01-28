import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.message) errors.message = "Message is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        alert("Successfully sent to Nirmal");
        setFormData({ name: "", email: "", message: "" });
        setFormErrors({});
        setIsSubmitting(false);
      }, 1000);
    }
  };

  const contactInfo = [
    { icon: <SiGmail />, label: "Email", value: "nirmallamrin77@gmail.com", link: "mailto:nirmallamrin77@gmail.com" },
    { icon: <FaPhoneAlt />, label: "Phone", value: "+91 6282637227", link: "tel:+916282637227" },
    { icon: <FaLinkedin />, label: "LinkedIn", value: "linkedin.com/in/nirmal-mani", link: "https://www.linkedin.com/in/nirmal-mani-399125268/" },
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Palakkad, Kerala", link: "https://www.google.com/maps/search/Palakkad,+Kerala" },
  ];

  return (
    <div className="bg-custom-image min-h-screen py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
            GET IN <span className="text-gradient">TOUCH</span>
          </h1>
          <div className="w-24 h-1.5 bg-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-6">
            <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-green-500 pl-4 uppercase tracking-widest">
              Contact Info
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-6 border-white/5 hover:border-green-500/30 group transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl text-green-400 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">{item.label}</p>
                      <p className="text-slate-200 font-medium">{item.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="glass-card p-8 md:p-12 border-white/5 h-full">
              <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-green-500 pl-4 uppercase tracking-widest">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-green-500/50 transition-colors"
                    />
                    {formErrors.name && <p className="text-red-500 text-xs font-bold">{formErrors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-green-500/50 transition-colors"
                    />
                    {formErrors.email && <p className="text-red-500 text-xs font-bold">{formErrors.email}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="How can I help you?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-green-500/50 transition-colors resize-none"
                  ></textarea>
                  {formErrors.message && <p className="text-red-500 text-xs font-bold">{formErrors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-12 py-4 bg-green-500 hover:bg-green-600 disabled:bg-green-800 text-slate-900 font-black rounded-xl transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-xl shadow-green-500/20"
                >
                  {isSubmitting ? "SENDING..." : (
                    <>
                      SEND MESSAGE <FaPaperPlane />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
