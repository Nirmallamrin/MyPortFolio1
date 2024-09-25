import React from "react";
import img2 from "../assets/IMG38.png";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div className="min-h-screen bg-custom-image text-white flex flex-col items-center p-8">
      <div className="flex flex-col justify-center items-center space-y-8">
        <button className="p-5 bg-blue-700 rounded-md hover:bg-green-400">
          <Link 
            to="https://drive.google.com/file/d/1RS6nPSN4O3fMsOqyf2R-yVSfIZtRKwiI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </Link>
        </button>
        <img src={img2} alt="Resume" className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-110" />
      </div>
    </div>
  );
};

export default Resume;
