import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-black p-12 ">
        <div className="flex justify-between ">
            <p className="text-white">Designed and Created By <span className="text-2xl font-bold text-green-400">Nirmal</span></p>
            <p className="text-white">copyright @2024</p>
            <ul className="text-white flex space-x-6">
            <li className="">
              <Link
                to="https://github.com/Nirmallamrin"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-gray-400"
              >
                <IoLogoGithub />
              </Link>
            </li>
            <li className=" ">
              <a
                href="https://www.linkedin.com/in/nirmal-mani-399125268/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/lamrin_____6/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-gray-400"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaTwitter />
              </a>
            </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer