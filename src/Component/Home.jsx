import { ArrowRight, ChevronDown, Github, Linkedin, Mail } from "lucide-react";

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

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section
      id="Home"
      className="relative  flex items-center justify-center px-4 py-37"
    >
      <div className="flex flex-col gap-6.5 text-max-w-4xl mx-auto text-center">
        <h1 className="text-xl md:text-3xl mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 ">
          Hi, I'm
          <span className="bg-gradient-to-r from-accent-teal to-accent-purple bg-clip-text text-transparent">
            {" "}
            Zain Rahmoun{" "}
          </span>
        </h1>
        <h2 className="text-4xl md:text-7xl mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
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
            className="bg-accent-teal rounded-3xl px-6 py-3 text-xl font-medium text-black hover:opacity-80 cursor-pointer "
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-bg-base border  border-gray-700 rounded-3xl px-5 py-3 text-xl hover:bg-accent-purple cursor-pointer"
          >
            Contact Me
          </a>
        </div>
        <div className="flex gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 mb-3 duration-700 delay-400">
          <a
            href="https://github.com/zainRhmon10"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-[#1A1A1F] transition-colors"
          >
            <Github className="w-7 h-7" />
          </a>

          <a
            href="https://linkedin.com/in/zayn-rahmon-10c"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-[#1A1A1F] transition-colors"
          >
            <Linkedin className="w-7 h-7" />
          </a>

          <a
            href="mailto:zynrhmwn74@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-[#1A1A1F] transition-colors"
          >
            <Mail className="w-7 h-7" />
          </a>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer group animate-in fade-in duration-700 delay-500"
        aria-label="Scroll to next section"
      >
        <div className="flex flex-col pl-8  items-center gap-2">
          {/* Animated Arrow Container */}
          <div className="relative w-14 h-16 ">
            {/* Multiple arrows for trail effect */}
            <ChevronDown
              className="w-8 h-8 absolute left-1/2 -translate-x-1/2 text-[#00F5D4]"
              style={{
                animation: "bounce-arrow 2s infinite",
                animationDelay: "0s",
              }}
            />
            <ChevronDown
              className="w-8 h-8 absolute left-1/2 -translate-x-1/2 text-[#00F5D4] opacity-60"
              style={{
                animation: "bounce-arrow 2s infinite",
                animationDelay: "0.2s",
              }}
            />
            <ChevronDown
              className="w-8 h-8 absolute left-1/2 -translate-x-1/2 text-[#00F5D4] opacity-30"
              style={{
                animation: "bounce-arrow 2s infinite",
                animationDelay: "0.4s",
              }}
            />
          </div>

          {/* Text Label */}
          <span className="text-xs text-[#00F5D4] pr-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Scroll Down
          </span>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 -z-10 blur-xl opacity-50 group-hover:opacity-100 transition-opacity">
          <div className="w-12 h-12 bg-[#00F5D4] rounded-full absolute top-0 left-1/2 -translate-x-1/2"></div>
        </div>
      </button>
    </section>
  );
};
export default Home;
