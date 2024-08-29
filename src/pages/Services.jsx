import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdOutlineWebAsset, MdOutlineWebStories } from "react-icons/md";
import { SiWebmoney } from "react-icons/si";
import { motion } from "framer-motion"; 
import { FadeRight, FadeLeft } from "../utils/animation";

const ServicesData = [
  {
    icon: <MdOutlineWebAsset />, 
    title: "Frontend Development",
    desc: "Crafting interactive and engaging user interfaces using React.js.",
  },
  {
    icon: <MdOutlineWebStories />, 
    title: "Backend Development",
    desc: "Building robust and scalable server-side applications with Node.js.",
  },
  {
    icon: <SiWebmoney />, 
    title: "Mobile App Development",
    desc: "Creating intuitive and high-performing mobile apps.",
  },
];

const Services = () => {
  return (
    <>
      <section className="bg-gray-800 py-10">
        <div className="container mx-auto px-4">
          {/* Service Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <div className="text-left space-y-7 lg:max-w-[400px]">
                <motion.h1
                  variants={FadeRight(0.8)}
                  initial="hidden"
                  animate="visible"
                  className="text-3xl lg:text-4xl font-bold text-primary"
                >
                  Service
                </motion.h1>
                <div className=" border border-b-2 border-secondary w-32"></div>
                <motion.p
                  variants={FadeRight(1)}
                  initial="hidden"
                  animate="visible"
                  className="text-white/70"
                >
                  I specialize in creating seamless and visually appealing user interfaces through Frontend Development, building efficient and scalable server-side solutions with Backend Development, and developing feature-rich mobile applications to meet modern user needs.
                </motion.p>
                <motion.div
                  variants={FadeRight(1.5)}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col md:flex-row items-center gap-4"
                >
                  <button className="py-2 px-4 text-white bg-primary rounded-md w-36">
                    Know More
                  </button>
                  <button className="border border-primary/50 rounded-lg text-md flex items-center gap-2 py-2 px-4 text-white">
                    <MdOutlineFileDownload className="text-white" size="22px" />
                    Download Resume
                  </button>
                </motion.div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ServicesData.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col gap-4 justify-center items-start p-6 bg-white/10 backdrop-blur-sm rounded-2xl"
                >
                  <div className="text-primary/80 bg-white/70 rounded-full p-2">
                    {service.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">{service.title}</div>
                  <p className="text-sm text-white/70">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
