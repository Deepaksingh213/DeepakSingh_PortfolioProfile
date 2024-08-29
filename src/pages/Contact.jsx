import React from 'react';
import { motion } from "framer-motion";
import { FadeRight, FadeLeft } from "../utils/animation";


const Contact = () => {
  return (
    <>
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
           <motion.h1
                variants={FadeRight(1)}
                initial="hidden"
                animate="visible" className="text-3xl mb-4  text-primary font-bold ">Contact Us</motion.h1>
                 <div className=" border border-b-2 border-secondary w-40"></div>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between mt-12">
         
          
            <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 ">
          
              <form className="space-y-4">
                <div>
                  <label className="block mb-2" htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block mb-2" htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label className="block mb-2" htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
                    placeholder="Your Message"
                    rows="4"
                  ></textarea>
                </div>
                <button type="submit" className="bg-primary hover:bg-red-600 text-white px-4 py-2 rounded">
                  Send Message
                </button>
              </form>
            </div>
            
           
            <div className="w-full md:w-1/2 rounded-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28018.5555360705!2d77.33974495674309!3d28.62018666523251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456ef36d9f%3A0x3b7191b1286136c8!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1724917816007!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
