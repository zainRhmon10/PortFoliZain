import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const roles = ["AI & Frontend Dev", "AI Developer", "Frontend Developer"];
const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="Home" className="flex items-center justify-center px-4 py-50">
      <div className="flex flex-col gap-8 text-max-w-4xl mx-auto text-center">
        <h1 className="text-xl md:text-4xl mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 ">
          Hi, I'm
          <span className="bg-gradient-to-r from-accent-teal to-accent-purple bg-clip-text text-transparent">
            {" "}
            Zain Rahmoun{" "}
          </span>
        </h1>
        <h2 className="text-4xl md:text-8xl mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={roles[index]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              {roles[index]}
            </motion.div>
          </AnimatePresence>
        </h2>
        <div className=" flex flex-wrap gap-6 justify-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <a
            href="#projects"
            className="bg-accent-teal rounded-3xl px-10 py-6 text-xl font-medium text-black hover:opacity-80 cursor-pointer "
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-bg-base border  border-gray-700 rounded-3xl px-8 py-5 text-xl hover:bg-accent-purple cursor-pointer"
          >
            Contact Me
          </a>
        </div>
        <div className="flex gap-5 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
          <a
            href="https://github.com/zainRhmon10"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-[#1A1A1F] transition-colors"
          >
            <Github className="w-8 h-8" />
          </a>

          <a
            href="https://linkedin.com/in/zayn-rahmon-10c"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-[#1A1A1F] transition-colors"
          >
            <Linkedin className="w-8 h-8" />
          </a>

          <a
            href="mailto:zynrhmwn74@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-[#1A1A1F] transition-colors"
          >
            <Mail className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Home;
