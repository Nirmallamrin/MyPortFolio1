import React from "react";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3, IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman } from "react-icons/si";
import { FaReact, FaWindows, FaSlack } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  return (
    <div className="bg-custom-image min-h-screen py-12">
      <div className="text-white flex flex-col justify-center items-center">
        <h1 className="font-bold italic text-white text-5xl mb-8">Skills</h1>

        <div className="w-full max-w-5xl">
          <h2 className="flex justify-center text-2xl font-semibold mt-12 mb-6">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="card">
              <TiHtml5 className="text-6xl mx-auto" />
              <p className="mt-2">HTML5</p>
            </div>
            <div className="card">
              <IoLogoCss3 className="text-6xl mx-auto" />
              <p className="mt-2">CSS3</p>
            </div>
            <div className="card">
              <RiTailwindCssFill className="text-6xl mx-auto" />
              <p className="mt-2">Tailwind CSS</p>
            </div>
            <div className="card">
              <IoLogoJavascript className="text-6xl mx-auto" />
              <p className="mt-2">JavaScript</p>
            </div>
            <div className="card">
              <FaReact className="text-6xl mx-auto" />
              <p className="mt-2">React</p>
            </div>
            <div className="card">
              <DiNodejs className="text-6xl mx-auto" />
              <p className="mt-2">Node.js</p>
            </div>
            <div className="card">
              <SiExpress className="text-6xl mx-auto" />
              <p className="mt-2">Express.js</p>
            </div>
            <div className="card">
              <SiMongodb className="text-6xl mx-auto" />
              <p className="mt-2">MongoDB</p>
            </div>
          </div>

          <h2 className="flex justify-center text-2xl font-semibold mt-12 mb-6">Soft Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="card">
              <p className="text-xl">English</p>
            </div>
            <div className="card">
              <p className="text-xl">Malayalam</p>
            </div>
            <div className="card">
              <p className="text-xl">Tamil</p>
            </div>
          </div>

          <h2 className="flex justify-center text-2xl font-semibold mt-12 mb-6">Tools I Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="card">
              <FaWindows className="text-6xl mx-auto" />
              <p className="mt-2">Windows</p>
            </div>
            <div className="card">
              <VscVscode className="text-6xl mx-auto" />
              <p className="mt-2">VS Code</p>
            </div>
            <div className="card">
              <SiPostman className="text-6xl mx-auto" />
              <p className="mt-2">Postman</p>
            </div>
            <div className="card">
              <IoLogoVercel className="text-6xl mx-auto" />
              <p className="mt-2">Vercel</p>
            </div>
            <div className="card">
              <FaSlack className="text-6xl mx-auto" />
              <p className="mt-2">Slack</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
