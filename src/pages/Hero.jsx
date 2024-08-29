import React from 'react';
import student from "../assets/student.png";
import { motion } from "framer-motion";
import { FadeRight, FadeLeft } from "../utils/animation";
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  const handleType = (count) => {
    // access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <>
      <section className="bg-gray-800 py-14">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left text-gray-300">
            <motion.h5
              variants={FadeRight(0.8)}
              initial="hidden"
              animate="visible"
              className="uppercase text-lg font-medium"
            >
              Hello
            </motion.h5>
            <motion.h1
              variants={FadeRight(1)}
              initial="hidden"
              animate="visible"
              className="text-3xl md:text-5xl font-bold text-gray-500 mt-2"
            >
              I'm Deepak Singh
            </motion.h1>
            <motion.h4
              variants={FadeRight(1.2)}
              initial="hidden"
              animate="visible"
              className="text-xl md:text-2xl font-medium tracking-tight mt-2 text-primary"
            >
              Freelance Web &<br />
              <span style={{ fontWeight: 'bold' }} className='text-secondary'>
                <Typewriter
                  words={['Frontend Developer', 'Backend Developer', 'Full Stack Developer']}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  onLoopDone={handleDone}
                  onType={handleType}
                />
              </span>
            </motion.h4>
            <motion.p
              variants={FadeRight(1.5)}
              initial="hidden"
              animate="visible"
              className="mt-4 md:w-[80%] lg:w-[60%] mx-auto md:mx-0"
            >
              I specialize in creating seamless and visually appealing user interfaces through Frontend Development, building efficient and scalable server-side solutions with Backend Development, and developing feature-rich mobile applications to meet modern user needs.
            </motion.p>
            <motion.div
              variants={FadeRight(1.5)}
              initial="hidden"
              animate="visible"
            >
              <button className="mt-4 py-2 px-4 text-white bg-primary rounded-md w-36">
                Hire me
              </button>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div
            variants={FadeLeft(1.2)}
            initial="hidden"
            animate="visible"
          >
            <img src={student} alt="Student studying" className="w-[80%]" />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
