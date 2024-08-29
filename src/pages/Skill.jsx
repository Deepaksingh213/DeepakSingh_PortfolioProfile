import React from "react";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import { FadeRight, FadeLeft } from "../utils/animation";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-500 text-4xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-4xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-400 text-4xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 text-4xl" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600 text-4xl" /> },
];

const Skills = () => {
  return (
       <section className="bg-gray-800 py-16">
        <div className="container">
        <motion.h1
                variants={FadeRight(1)}
                initial="hidden"
                animate="visible" className="my-4 text-primary text-3xl font-bold">Skill</motion.h1>
                <div className=" border border-b-2 border-secondary w-16"></div>
        <div className="flex flex-wrap  justify-center items-center gap-6 p-8">
       
      {skills.map((skill, index) => (
        <motion.div
        variants={FadeLeft(1.5)}
        initial="hidden"
        animate="visible"
          key={index}
          className="flex flex-col items-center bg-white/10 backdrop-blur-sm  shadow-md rounded-lg p-4 w-40"
        >
          <div className="mb-2">{skill.icon}</div>
          <div className="text-center font-semibold text-white">{skill.name}</div>
          </motion.div>
      ))}
    </div>
        </div>
       </section>
  );
};

export default Skills;
