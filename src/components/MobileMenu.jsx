import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MobileMenu = ({ open }) => {
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 w-full z-20 mt-14"
          >
            <div className="text-xl font-semibold uppercase bg-gray-800 text-white py-10 m-6 rounded-3xl">
              <ul className="flex flex-col justify-center items-center gap-4">
                 <Link to="/"><li>Home</li></Link>
                 <Link to="/skills"><li>Skill</li></Link>
                 <Link to="/projects"><li>Services</li></Link>
                 <Link to="/services"><li>Projects</li></Link>
                 <Link to="/contacts"><li>Contacts</li></Link>
            
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
