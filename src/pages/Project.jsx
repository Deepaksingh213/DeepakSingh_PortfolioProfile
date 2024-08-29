import React from 'react';
import { motion } from "framer-motion";
import { FadeRight } from "../utils/animation";

const projects = [
  {
    id: 1,
    title: 'nscloudacademy ',
    description: 'professional online classes, unlock your potential for IT with our customized real-world solution',
    iframe: '<iframe src="https://www.nscloudacademy.com/" width="460" height="270" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" scrolling="no"></iframe>',
    link: 'https://www.nscloudacademy.com/', 
  },
  {
    id: 2,
    title: 'rrinfraprostructure',
    description: 'R.R.Infrastructures is also a leading manufacture and service provider of hydrogen gas generator plants, sewage treatment plants, industrial pressure vessel and many more.',
    iframe: '<iframe src="https://rrinfrapro.com/" width="460" height="270" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" scrolling="no"></iframe>',
    link: 'https://rrinfrapro.com/', 
  },
  {
    id: 3,
    title: 'envirolondon',
    description: 'We provide a quick & surrounding areas, competitively priced and convenient waste collection service covering all over London.',
    iframe: '<iframe src="http://www.envirolondon.co.uk/" width="460" height="270" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" scrolling="no"></iframe>',
    link: 'http://www.envirolondon.co.uk/', 
  },
];

const Project = () => {
  return (
    <>
      <section className='bg-gray-800 py-16'>
        <div className="container mx-auto px-4">
          <motion.h1
            variants={FadeRight(0.8)}
            initial="hidden"
            animate="visible"
            className='text-primary text-3xl font-bold mb-8'
          >
            Project
            
          </motion.h1>
          <div className=" border border-b-2 border-secondary w-28"></div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4'>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className='bg-gray-700 text-gray-400 p-3 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out'
                whileHover={{ scale: 1.05 }} 
                transition={{ type: 'spring', stiffness: 300, damping: 15 }} 
              >
                {project.iframe ? (
                  <div
                    className='w-full h-72 mb-4 rounded-md overflow-hidden'
                    dangerouslySetInnerHTML={{ __html: project.iframe }}
                  />
                ) : (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className='w-full h-72 object-cover mb-4 rounded-md'
                  />
                )}
                <h2 className='text-xl font-bold mb-2 text-gray-400 uppercase'>{project.title}</h2>
                <p className=''>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className="mt-4 py-2 px-4 text-white bg-primary rounded-md w-36">
                    Live demo
                  </button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
