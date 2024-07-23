import React from "react";
import img1 from "../assets/IMG37.jpg";

const About = () => {
  return (
    <div className=" bg-custom-image text-white flex flex-col items-center">
      <div className="m-12">
        <h1 className="font-bold italic text-white text-5xl text-center mb-12">About Me</h1>
        <div className="flex flex-col justify-start  md:flex-row items-start md:space-x-8 space-y-8 md:space-y-0">
          <div className="md:w-1/2 flex items-center justify-center">
            <img
              src={img1}
              alt="Your Name"
              className="h-screen  rounded-lg "
            />
          </div>
          <div className="md:w-1/2 space-x-4 ">
            <h2 className="text-3xl font-bold">Hi, I'm Nirmal</h2>
            <p className="text-lg">
              I am a professional software developer with a passion for creating
              innovative solutions and a strong background in the MERN stack. I
              enjoy building web applications that are both functional and
              aesthetically pleasing. I am constantly learning new technologies
              and improving my skills to stay updated with the latest trends in
              the tech industry.
            </p>
            <p className="text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              saepe maiores eveniet iusto fugit velit sapiente? Perspiciatis qui
              vero ratione, maxime culpa enim cum fugiat ut ipsam voluptas?
              Neque, a!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              saepe maiores eveniet iusto fugit velit sapiente? Perspiciatis qui
              vero ratione, maxime culpa enim cum fugiat ut ipsam voluptas?
              Neque, a!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              saepe maiores eveniet iusto fugit velit sapiente? Perspiciatis qui
              vero ratione, maxime culpa enim cum fugiat ut ipsam voluptas?
              Neque, a!
            </p>
            <p className="text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              saepe maiores eveniet iusto fugit velit sapiente? Perspiciatis qui
              vero ratione, maxime culpa enim cum fugiat ut ipsam voluptas?
              Neque, a!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              saepe maiores eveniet iusto fugit velit sapiente? Perspiciatis qui
              vero ratione, maxime culpa enim cum fugiat ut ipsam voluptas?
              Neque, a!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              saepe maiores eveniet iusto fugit velit sapiente? Perspiciatis qui
              vero ratione, maxime culpa enim cum fugiat ut ipsam voluptas?
              Neque, a!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
